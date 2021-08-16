import React from 'react'
import {Image, Text, Box, Stack, Heading} from 'native-base'

export const Card = ({uri, header, date, body, footer}) => {
  return (
    <Box bg="white" shadow={2} rounded="lg" maxWidth="90%">
      <Image
        source={uri}
        alt="image base"
        resizeMode="cover"
        height={150}
        roundedTop="md"
      />
      <Text bold position="absolute" color="white" top={0} m={[4, 4, 8]}>
        {header}
      </Text>
      <Stack space={4} p={[4, 4, 8]}>
        <Text color="gray.400">{date}</Text>
        <Heading size={['md', 'lg', 'md']} noOfLines={2}>
          {body}
        </Heading>
        <Text lineHeight={[5, 5, 7]} noOfLines={[4, 4, 2]} color="gray.700">
          {footer}
        </Text>
      </Stack>
    </Box>
  )
}
