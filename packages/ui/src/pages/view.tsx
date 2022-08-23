import React, { useEffect, useState } from 'react'
import {
  Alert, AlertDescription, AlertIcon, AlertTitle,
  Image, chakra, Heading, Stack, Flex, Spinner, Text,
} from '@chakra-ui/react'
import ReactMarkdown from 'react-markdown'
import {
  regexify, deregexify, httpURL,
} from '@/lib/helpers'
import type { ERC1155Metadata } from '@/lib/types'
import { HomeLink } from '@/components'
import { useWeb3 } from '@/lib/hooks'
import { useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet'

const Markdown = chakra(ReactMarkdown)

const View = () => {
  const { nftId } = useParams() 
  const [metadata, setMetadata] = useState<ERC1155Metadata>()
  const [error, setError] = useState<string>()
  const { roContract } = useWeb3()
  const tokenId = deregexify(
    Array.isArray(nftId) ? nftId[0] : nftId
  )

  useEffect(
    () => {
      const getMetadata = async () => {
        if(roContract && tokenId) {
          try {
            const metadataURI = await roContract.uri(
              BigInt(tokenId)
            )
            const metadataURL = httpURL(metadataURI)
            if(!metadataURL) {
              throw new Error(`Couldn't find metadata for token #${nftId}.`)
            }
            const response = await fetch(metadataURL)
            const data = await response.text()
            setMetadata(JSON.parse(data))
          } catch(err) {
            setError((err as Error).message)
          }
        }
      }

      getMetadata()
    },
    [nftId, roContract, tokenId],
  )

  if(error) {
    return (
      <Alert status="error">
        <AlertIcon />
        <AlertTitle mr={2}>Error: Loading NFT</AlertTitle>
        <AlertDescription>{error}</AlertDescription>
      </Alert>
    )
  }

  if(!metadata) {
    return (
      <Flex align="center" justify="center" h="100vh">
        <Spinner thickness="4px" speed="1s" mr={2}/>
        <Text>Loading Metadata For Token #{regexify(tokenId)}</Text>
      </Flex>
    )
  }

  const {
    name, image, animation_url: animationURL,
    description, background_color: bg,
  } = metadata

  return (
    <Stack align="center" position="relative">
      <Helmet>
        <title>’𝖈𝖍𝖎𝖊𝖛𝖊: 𝓥ⲓⲉⲱ #{regexify(tokenId)}</title>
        <meta
          name="description"
          content="MetaGame’s ’Chievemint NFTs"
        />
      </Helmet>
      <HomeLink/>
      {name && <Heading>{name}</Heading>}
      {image && (
        <chakra.object
          data={httpURL(image) ?? undefined}
          title={name}
          pointerEvents="none"
          maxW="80vmin" maxH="80vmin"
          bg={`#${bg}`}
          borderRadius={15}
          p={2}
        />
      )}
      {description && (
        <Markdown
          maxW="30rem"
          sx={{
            a: { textDecoration: 'underline' },
            p: {
              textIndent: '1em',
              my: 3,
              textAlign: 'justify',
            },
          }}
          linkTarget="_blank"
        >
          {description}
        </Markdown>
      )}
      {animationURL?.endsWith('.mp4') && (
        <chakra.video
          maxW={96} maxH={96}
          controls autoPlay loop muted
        >
          <chakra.source
            src={httpURL(animationURL) ?? undefined}
          />
        </chakra.video>
      )}
      {animationURL?.endsWith('.webp') && (
        <Image
          src={httpURL(animationURL) ?? undefined}
          alt={name}
          maxW={96} maxH={96}
        />
      )}
    </Stack>
  )
}

export default View