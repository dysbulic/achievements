import { CodedError, Maybe } from 'lib/types'
import { CID } from 'multiformats/cid'
import { IPFS_LINK_PATTERN } from 'lib/constants';
import { NETWORKS } from './networks';

export const httpURL = (uri?: Maybe<string>) => {
    const [, origCID, path] = (
      uri?.match(/^(?:ipfs|dweb):(?:\/\/)?([^/]+)(?:\/(.*))?$/) ?? []
    )
  
    if (origCID) {
      const cid = CID.parse(origCID)
      const v0CID = cid.toV0().toString()
      const v1CID = cid.toV1().toString()
      const pattern = IPFS_LINK_PATTERN
      return (
        encodeURI(
          pattern
          .replace(/{cid}/g, origCID)
          .replace(/{v0cid}/g, v0CID)
          .replace(/{v1cid}/g, v1CID)
          .replace(/{path}/g, path ?? '')
        )
        .replace(/#/g, '%23')
      )
    }
  
    if(!uri) {
      throw new Error(`URI Undefined`)
    }

    return uri
  };

export const capitalize = (str: string) => {
  if(!str?.split) return str
  return (
    str.trim().split(/\s+/g)
    .map((sub) => (`${
      sub[0]?.toUpperCase() ?? ''
    }${
      sub.substring(1)?.toLowerCase() ?? ''
    }`))
    .join(' ')
  )
}

export const isEmpty = (val: unknown) => {
  if (Array.isArray(val)) {
    return val.length === 0
  }
  if (val instanceof Object) {
    return Object.keys(val).length === 0
  }
  if (val === '') {
    return true
  }
  return false
}

export const switchTo = async (chain: string) => {
  try {
    await window.ethereum.request?.({
      method: 'wallet_switchEthereumChain',
      params: [{ chainId: chain }],
    })
  } catch (switchError) {
    if ((switchError as CodedError).code === 4902) {
      throw new Error(
        `The network “${NETWORKS[chain].name ?? 'Unknown'}”`
        + ' is not yet available in your MetaMask.\n\n'
        + ' Please add it.'
      )
    } else {
      throw switchError
    }
  }
}
