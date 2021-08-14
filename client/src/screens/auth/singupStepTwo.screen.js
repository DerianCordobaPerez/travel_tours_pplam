import React from 'react'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import {
  NativeBaseProvider,
  Box,
  Tooltip,
  Heading,
  VStack,
  FormControl,
  Input,
  Image,
  Button,
  Icon,
  IconButton,
  HStack,
  Center,
} from 'native-base'

export const SingUpStepTwoScreen = () => (
  <NativeBaseProvider>
    <Box safeArea flex={1} p={2} w="90%" mx="auto">
      <Center marginTop={5}>
        <Heading size="xl" color="primary.500">
        Registrate para continuar
        </Heading>
        <Image borderRadius={60} size={'xl'} source={require('../../../assets/profile.png')} />
      </Center>
      <VStack space={2} mt={5}>
        <FormControl>
          <FormControl.Label
            _text={{color: 'muted.700', fontSize: 'sm', fontWeight: 600}}
          >
            Nombres
          </FormControl.Label>
          <Input />
        </FormControl>
        <FormControl>
          <FormControl.Label
            _text={{color: 'muted.700', fontSize: 'sm', fontWeight: 600}}
          >
            Apellidos
          </FormControl.Label>
          <Input />
          <FormControl.Label
            _text={{color: 'muted.700', fontSize: 'sm', fontWeight: 600}}
          >
            Sexo
          </FormControl.Label>
          <Input />
        </FormControl>
        <FormControl>
          <FormControl.Label
            _text={{color: 'muted.700', fontSize: 'sm', fontWeight: 600}}
          >
            Nacionalidad
          </FormControl.Label>
          <Input placeholder={'Nicaragua'} />
        </FormControl>
        <VStack space={2}>
          <Button colorScheme="cyan" _text={{color: 'white'}}>
            Singin
          </Button>
        </VStack>
      </VStack>
    </Box>
  </NativeBaseProvider>
)