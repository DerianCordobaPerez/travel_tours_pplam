import React from 'react'
import {NativeBaseProvider, Box, Text} from 'native-base'

export const HomeScreen = () => (
  <NativeBaseProvider>
    <Box flex={1} bg={'#fff'} alignItems="center" justifyContent="center">
      <Text>Estamos en Home!!</Text>
    </Box>
  </NativeBaseProvider>
)
