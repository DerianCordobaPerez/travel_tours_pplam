import React from 'react'
import {
  Heading,
  useColorMode,
  Button,
  HStack,
  Avatar,
  Text,
  Box,
  Center,
  useColorModeValue,
  NativeBaseProvider,
} from 'native-base'
import {AntDesign, Entypo, Ionicons} from '@expo/vector-icons'

const ChangeColorTheme = () => {
  const {colorMode, toggleColorMode} = useColorMode()

  const [isOpen, setIsOpen] = React.useState(false)
  const [isOpen1, setIsOpen1] = React.useState(false)

  return (
    <>
      <Box marginTop={'2'} bg={colorMode === 'dark' ? 'black' : 'white'}>
        <Button bg={'#DCDADA'} onPress={() => setIsOpen(!isOpen)}>
          <Text bold>
            Configuracion{' '}
            {isOpen ? (
              <AntDesign name="caretdown" size={15} color="black" />
            ) : (
              <AntDesign name="caretright" size={15} color="black" />
            )}
          </Text>
        </Button>
        <PresenceTransition
          visible={isOpen}
          initial={{opacity: 0}}
          animate={{opacity: 1, transition: {duration: 800}}}
        >
          <Box marginTop={'1'} bg="white" rounded="md" _text={{color: 'black'}}>
            <Button borderRadius={100} bg={'#EBE8E8'}>
              <Text>Cambio de Contraseña</Text>
            </Button>
            <Button borderRadius={100} bg={'#EBE8E8'}>
              <Text>Notificaciones</Text>
            </Button>
            <Button borderRadius={100} bg={'#EBE8E8'}>
              <Text>Idioma</Text>
            </Button>
            <Button borderRadius={100} bg={'#EBE8E8'} onPress={toggleColorMode}>
              {colorMode === 'dark' ? (
                <Ionicons name="sunny" size={24} color="black" />
              ) : (
                <Entypo name="moon" size={24} color="black" />
              )}
            </Button>
          </Box>
        </PresenceTransition>
      </Box>

      <Box marginTop={'2'} bg={'white'}>
        <Button bg={'#DCDADA'} onPress={() => setIsOpen1(!isOpen1)}>
          <Text bold>
            Ayuda y asistencia{' '}
            {isOpen1 ? (
              <AntDesign name="caretdown" size={15} color="black" />
            ) : (
              <AntDesign name="caretright" size={15} color="black" />
            )}
          </Text>
        </Button>
        <PresenceTransition
          visible={isOpen1}
          initial={{opacity: 0}}
          animate={{opacity: 1, transition: {duration: 800}}}
        >
          <Box bg="white" rounded="md" _text={{color: 'black'}}>
            <Button borderRadius={100} bg={'#EBE8E8'}>
              <Text>servicio de ayuda</Text>
            </Button>
            <Button borderRadius={100} bg={'#EBE8E8'}>
              <Text>Informar un problema</Text>
            </Button>
          </Box>
        </PresenceTransition>
      </Box>

      <Box marginTop={'2'} bg={'white'}>
        <Button bg={'#EB2B2B'}>
          <Text color={'white'} bold>
            Cerrar session
          </Text>
        </Button>
      </Box>
    </>
  )
}

const LocalWrapper = ({children}) => {
  const bg = useColorModeValue('gray.200', 'gray.800')

  return (
    <Center flex={1} bg={bg}>
      {children}
    </Center>
  )
}

export const SettingsScreen = () => {

  return (
    <NativeBaseProvider>
      <LocalWrapper>
        <ChangeColorTheme />
      </LocalWrapper>
    </NativeBaseProvider>
  )
}

/*



  return (
    <NativeBaseProvider>
      <Box marginTop={'2'} bg="dark">
        <Button bg={'#DCDADA'} onPress={() => setIsOpen(!isOpen)}></Button>
        <Box marginTop={'1'} bg="white" rounded="md" _text={{color: 'black'}}>
          <Button borderRadius={100} bg={'#EBE8E8'}>
            <Text>Cambio de Contraseña</Text>
          </Button>
          <Button borderRadius={100} bg={'#EBE8E8'}>
            <Text>Notificaciones</Text>
          </Button>
          <Button borderRadius={100} bg={'#EBE8E8'}>
            <Text>Idioma</Text>
          </Button>
          <Button borderRadius={100} bg={'#EBE8E8'}>
            <Ionicons name="sunny" size={24} color="black" />
          </Button>
        </Box>
      </Box>

      <Box marginTop={'2'} bg={'white'}>
        <Button bg={'#DCDADA'} onPress={() => setIsOpen1(!isOpen1)}>
          <Text bold>
            Ayuda y asistencia{' '}
            {isOpen1 ? (
              <AntDesign name="caretdown" size={15} color="black" />
            ) : (
              <AntDesign name="caretright" size={15} color="black" />
            )}
          </Text>
        </Button>
        <Box bg="white" rounded="md" _text={{color: 'black'}}>
          <Button borderRadius={100} bg={'#EBE8E8'}>
            <Text>servicio de ayuda</Text>
          </Button>
          <Button borderRadius={100} bg={'#EBE8E8'}>
            <Text>Informar un problema</Text>
          </Button>
        </Box>
      </Box>

      <Box marginTop={'2'} bg={'white'} alignItems={'left'}>
        <Button bg={'#EB2B2B'}>
          <Text color={'white'} bold>
            Cerrar session
          </Text>
        </Button>
      </Box>
    </NativeBaseProvider>
  )

  const [open, setOpen] = React.useState(false)
  const [openTwo, setOpenTwo] = React.useState(false)

  function ColorModeExample() {
    const {colorMode, toggleColorMode} = useColorMode()
    return (
      <>
        <Heading>I'm a Heading</Heading>
        <Button
          colorScheme={colorMode === 'light' ? 'blue' : 'red'}
          onPress={() => {
            toggleColorMode()
          }}
        >
          Change mode
        </Button>
        <HStack space={2} mt={3}>
          <Avatar
            name="Ankur"
            borderWidth={2}
            source={{
              uri: 'https://pbs.twimg.com/profile_images/1309797238651060226/18cm6VhQ_400x400.jpg',
            }}
          />
          <Avatar
            name="Rohit"
            borderWidth={2}
            source={{
              uri: 'https://pbs.twimg.com/profile_images/1352844693151731713/HKO7cnlW_400x400.jpg',
            }}
          />
        </HStack>
      </>
    )
  }

  const LocalWrapper = ({children}) => {
    const bg = useColorModeValue('gray.200', 'gray.800')
    return (
      <Center flex={1} bg={bg}>
        {children}
      </Center>
    )
  }

  return (
    <NativeBaseProvider>
      <LocalWrapper>
        <ColorModeExample />
      </LocalWrapper>
    </NativeBaseProvider>
  )


*/
