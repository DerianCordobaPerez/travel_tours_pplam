import React from 'react'
import {Image, Text, Box, Stack, Heading} from 'native-base'

export const Card = ({uri, header, body}) => {
  return (
      <Box marginLeft={5} bg="white" shadow={2} rounded="lg" maxWidth="90%" marginTop={"3"}>
        <Image
          source={uri}
          alt="image base"
          resizeMode="cover"
          height={150}
          roundedTop="md"
        />
        <Stack space={4} p={[4, 4, 8]}>
          <Heading size={['md', 'lg', 'md']} noOfLines={2}>
            {header}
          </Heading>
          <Text lineHeight={[5, 5, 7]} noOfLines={[4, 4, 2]} color="gray.700">
            {body}
          </Text>
        </Stack>
      </Box>
    )
  }
