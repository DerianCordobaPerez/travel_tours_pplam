import React from 'react'
import {NativeBaseProvider, Image, Center,Text} from 'native-base'

export const loadingScreen = () => (
  <NativeBaseProvider>
    <Center flex={1}>
      <Image size={'2xl'} source={require('../../../assets/loading.jpeg')} />
      <Text fontSize="xl" bold>
        Travel Tours
      </Text>
    </Center>
  </NativeBaseProvider>
)
