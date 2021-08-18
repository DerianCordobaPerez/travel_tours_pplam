import React from 'react'
import {Image, Text, Box, Stack, Heading} from 'native-base'

export const Card = ({ruta, header, body}) => {
  return (
      <Box marginLeft={3} marginRight={3} bg="white" shadow={2} rounded="lg" maxWidth="90%" marginTop={"3"}>
        <Image
          source={ruta}
          alt="image base"
          resizeMode="cover"
          height={150}
          roundedTop="md"
          fallbackSource={'https://picsum.photos/200/200'}
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
