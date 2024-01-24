import { useWeb3 } from '@/lib/hooks'
import { Maybe } from '@/lib/types'
import React, {
  ChangeEvent, FormEvent, useCallback, useEffect, useState
} from 'react'
import { SubmitButton } from './SubmitButton'
import { extractMessage } from '@/lib/helpers'
import { BarLoader } from 'react-spinners'
import { toast } from 'react-toastify'

type MaxFormProps = {
  tokenId?: string
  perUser?: boolean
  purpose: string
} & React.HTMLProps<HTMLFormElement>


export const MaxForm = (
  { tokenId, purpose = 'create', perUser = false, ...props }:
  MaxFormProps
) => {
  const [max, setMax] = useState<Maybe<string>>(null)
  const [processing, setProcessing] = useState(false)
  const { roContract, rwContract, contractClient } = useWeb3()

  useEffect(() => {
    const load = async () => {
      if(roContract && tokenId) {
        if(perUser){
          setMax(await roContract('getPerUserMax', [BigInt(tokenId)]) as string)
        }else{
          setMax(await roContract('getMax', [BigInt(tokenId)]) as string)
        }
      }
    }
    load()
  }, [tokenId, roContract, perUser])
  
  const save = useCallback(async (evt: FormEvent) => {
    evt.preventDefault()

    if(!rwContract) {
      throw new Error('`rwContract` is not defined')
    }
    try {
      setProcessing(true)
      let hash
      if(perUser){
        hash = await rwContract(
          'setPerUserMax', [tokenId, max]
        ) as '0x{string}'
      } else {
        hash = await rwContract(
          'setMax', [tokenId, max]
        ) as '0x{string}'
      }
      await contractClient.waitForTransactionReceipt({ hash })
    } catch(error) {
      toast(extractMessage(error))
    } finally {
      setProcessing(false)
    }
  }, [contractClient, max, perUser, rwContract, tokenId])

  return (
    <form onSubmit={save} {...props}>
      <label>
        <h3>{perUser && 'Per User'} Maximum Mintable</h3>
        {max == null ? (
          <div>
            <BarLoader color="#2768ff"/>
            <p>Loading…</p>
          </div>
        ) : (
          <input
            type="number"
            value={max}
            onChange={({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
              setMax(value.trim().replace(/^0+([^0])/, '$1'))
            }}
          />
        )}
      </label>
      <SubmitButton
        label={`Set ${perUser ? 'Per User': ''} Max`}
        disabled={!/^-?\d+$/.test(max)}
        requireStorage={false}
        short={true}
        className="full"
        {...{ purpose, processing }}
      />
    </form>
  )
}
