import React from 'react'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import {
  NativeBaseProvider,
  Box,
  Text,
  Heading,
  VStack,
  FormControl,
  Input,
  Link,
  Button,
  Icon,
  IconButton,
  HStack,
  Center,
} from 'native-base'
import {Entypo} from '@expo/vector-icons'

export const SingInScreen = () => {
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
            Inicia sesion para continuar
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
            <Link
              _text={{fontSize: 'xs', fontWeight: '700', color: 'cyan.500'}}
              alignSelf="flex-end"
              mt={1}
            >
              Restaurar Contraseña?
            </Link>
          </FormControl>
          <VStack space={2}>
            <Button colorScheme="cyan" _text={{color: 'white'}}>
              Login
            </Button>

            <HStack justifyContent="center" alignItem="center">
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
              <IconButton
                variant="unstyled"
                startIcon={
                  <Icon
                    as={<MaterialCommunityIcons name="github" />}
                    color="muted.700"
                    size="sm"
                  />
                }
              />
            </HStack>
          </VStack>
          <HStack justifyContent="center">
            <Text fontSize="sm" color="muted.700" fontWeight={400}>
              No tienes una cuenta?.{' '}
            </Text>
            <Link
              _text={{color: 'cyan.500', bold: true, fontSize: 'sm'}}
              href="#"
            >
              Registrarse
            </Link>
          </HStack>
        </VStack>
      </Box>
    </NativeBaseProvider>
  )
}
