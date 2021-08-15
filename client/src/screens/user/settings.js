import React from "react"
import {
  Text,
  PresenceTransition,
  useColorMode,
  Box,
  Center,
  Button,
  NativeBaseProvider,
} from "native-base"
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export const SettingsScreen = () => {

    const { colorMode, toggleColorMode } = useColorMode();

    const [isOpen, setIsOpen] = React.useState(false)
    const [isOpen1, setIsOpen1] = React.useState(false)

    return (
  <NativeBaseProvider>
    <Box marginTop={"2"}  bg={colorMode === 'dark' ? 'black' : 'white'} >
      <Button bg={"#DCDADA"} onPress={() => setIsOpen(!isOpen)}>
        <Text bold >Configuracion   {isOpen ? <AntDesign name="caretdown" size={15} color="black" /> : <AntDesign name="caretright" size={15} color="black" /> }</Text>
      </Button>
      <PresenceTransition visible={isOpen}initial={{opacity: 0,}}
      animate={{opacity: 1,transition: {duration: 800,},}}>
        <Box marginTop={"1"} bg="white"rounded="md"_text={{color: "black",}}>
            <Button borderRadius={100} bg={"#EBE8E8"} ><Text>Cambio de Contraseña</Text></Button>
            <Button borderRadius={100} bg={"#EBE8E8"} ><Text>Notificaciones</Text></Button>
            <Button borderRadius={100} bg={"#EBE8E8"} ><Text>Idioma</Text></Button>
            <Button borderRadius={100} bg={"#EBE8E8"} onPress={toggleColorMode}>
        {colorMode === 'dark'?<Ionicons name="sunny" size={24} color="black" />
        :<Entypo name="moon" size={24} color="black" />}</Button>
        </Box>
      </PresenceTransition>
    </Box>

    <Box marginTop={"2"}  bg={"white"} >
      <Button bg={"#DCDADA"} onPress={() => setIsOpen1(!isOpen1)}>
        <Text bold >Ayuda y asistencia   {isOpen1 ? <AntDesign name="caretdown" size={15} color="black" /> : <AntDesign name="caretright" size={15} color="black" /> }</Text>
      </Button>
      <PresenceTransition visible={isOpen1}initial={{opacity: 0,}}
      animate={{opacity: 1,transition: {duration: 800,},}}>
        <Box bg="white"rounded="md"_text={{color: "black",}}>
            <Button borderRadius={100} bg={"#EBE8E8"} ><Text>servicio de ayuda</Text></Button>
            <Button borderRadius={100} bg={"#EBE8E8"} ><Text>Informar un problema</Text></Button>
        </Box>
      </PresenceTransition>
    </Box>

    <Box marginTop={"2"}  bg={"white"} >
      <Button bg={"#EB2B2B"} >
        <Text color={"white"} bold >Cerrar session</Text>
      </Button>
      </Box > 
  </NativeBaseProvider>
)}