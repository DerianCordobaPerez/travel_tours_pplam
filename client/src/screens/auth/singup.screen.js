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
  Button,
  Icon,
  IconButton,
  HStack,
  Center,
} from 'native-base'
import {Entypo} from '@expo/vector-icons'

export const SingUpScreen = () => {
  const [show, setShow] = React.useState(false)

  const handleClick = () => setShow(!show)
  return (
    <NativeBaseProvider>
      <Box safeArea flex={1} p={2} w="90%" mx="auto">
        <Center marginTop={'40'}>
          <Heading size="xl" color="primary.500">
            Bienvenido
          </Heading>
          <Heading color="muted.400" size="lg">
            Registrate para continuar
          </Heading>
        </Center>

        <VStack space={2} mt={5}>
          <FormControl>
            <FormControl.Label
              _text={{color: 'muted.700', fontSize: 'sm', fontWeight: 600}}
            >
              Correo
            </FormControl.Label>
            <Input />
          </FormControl>
          <FormControl mb={5}>
            <FormControl.Label
              _text={{color: 'muted.700', fontSize: 'sm', fontWeight: 600}}
            >
              Contraseña
            </FormControl.Label>
            <Input
              type={show ? 'text' : 'password'}
              InputRightElement={
                <Button
                  bg={'#8F8F8F'}
                  ml={2}
                  roundedLeft={0}
                  roundedRight="md"
                  onPress={handleClick}
                >
                  {show ? (
                    <Entypo name="eye-with-line" size={24} color="black" />
                  ) : (
                    <Entypo name="eye" size={24} color="black" />
                  )}
                </Button>
              }
            />
            <FormControl.Label
              _text={{color: 'muted.700', fontSize: 'sm', fontWeight: 600}}
            >
              Confirmar Contraseña
            </FormControl.Label>
            <Input
              type={show ? 'text' : 'password'}
              InputRightElement={
                <Button
                  bg={'#8F8F8F'}
                  ml={2}
                  roundedLeft={0}
                  roundedRight="md"
                  onPress={handleClick}
                >
                  {show ? (
                    <Entypo name="eye-with-line" size={24} color="black" />
                  ) : (
                    <Entypo name="eye" size={24} color="black" />
                  )}
                </Button>
              }
            />
          </FormControl>
          <VStack space={2}>
            <Button colorScheme="cyan" _text={{color: 'white'}}>
              Singin
            </Button>

            <HStack justifyContent="center" alignItem="center">
              <Tooltip label="Inicia sesion con facebook" openDelay={300}>
                <IconButton
                  variant="unstyled"
                  startIcon={
                    <Icon
                      as={<MaterialCommunityIcons name="facebook" />}
                      color="muted.700"
                      size="sm"
                    />
                  }
                />
              </Tooltip>
              <Tooltip label="Inicia sesion con Google" openDelay={300}>
                <IconButton
                  variant="unstyled"
                  startIcon={
                    <Icon
                      as={<MaterialCommunityIcons name="google" />}
                      color="muted.700"
                      size="sm"
                    />
                  }
                />
              </Tooltip>
            </HStack>
          </VStack>
        </VStack>
      </Box>
    </NativeBaseProvider>
  )
}
