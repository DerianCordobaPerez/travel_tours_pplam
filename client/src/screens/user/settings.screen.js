import React from 'react'
import {
  Text,
  PresenceTransition,
  Box,
  Button,
  NativeBaseProvider,
  AlertDialog,
} from 'native-base'
import {AntDesign} from '@expo/vector-icons'
import {Ionicons} from '@expo/vector-icons'
import {Entypo} from '@expo/vector-icons'
import { Feather } from '@expo/vector-icons'

export const SettingsScreen = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  const [isOpen1, setIsOpen1] = React.useState(false)

  const [isOpenloguot, setIsOpenloguot] = React.useState(false)
  const onClose = () => setIsOpenloguot(false)
  const cancelRef = React.useRef()

  return (
    <NativeBaseProvider>
      <Box marginTop={'2'}>
        <Button
          bg={'#DCDADA'}
          onPress={() => setIsOpen(!isOpen)}
          startIcon={<Ionicons name="settings" size={20} color="black" />}
          endIcon={
            isOpen ? (
              <AntDesign name="caretdown" size={13} color="black" />
            ) : (
              <AntDesign name="caretright" size={13} color="black" />
            )
          }
        >
          <Text bold>Configuracion</Text>
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
          </Box>
        </PresenceTransition>
      </Box>
      <Box marginTop={'2'} bg={'white'}>
        <Button
          bg={'#DCDADA'}
          onPress={() => setIsOpen1(!isOpen1)}
          startIcon={<Ionicons name="help-circle" size={24} color="black" />}
          endIcon={
            isOpen ? (
              <AntDesign name="caretdown" size={13} color="black" />
            ) : (
              <AntDesign name="caretright" size={13} color="black" />
            )
          }
        >
          <Text bold>Ayuda y asistencia</Text>
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
        <Button
          onPress={() => setIsOpenloguot(!isOpenloguot)}
          bg={'#EB2B2B'}
          startIcon={<Entypo name="log-out" size={24} color="white" />}
        >
          <Text color={'white'} bold>
            Cerrar session
          </Text>
        </Button>
      </Box>
      <AlertDialog
        leastDestructiveRef={cancelRef}
        isOpen={isOpenloguot}
        onClose={onClose}
        motionPreset={'fade'}
      >
        <AlertDialog.Content>
          <AlertDialog.Header>
          <Feather name="alert-triangle" size={34} color="black" />
          </AlertDialog.Header>
          <AlertDialog.Body>
            Estas seguro que quieres cerrar session
          </AlertDialog.Body>
          <AlertDialog.Footer>
            <Button ref={cancelRef} onPress={onClose}>
              Cancelar
            </Button>
            <Button colorScheme="red" ml={3}>
              <Text bold color={"white"}>Cerrar session</Text>
            </Button>
          </AlertDialog.Footer>
        </AlertDialog.Content>
      </AlertDialog>
    </NativeBaseProvider>
  )
}
