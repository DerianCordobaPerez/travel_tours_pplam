import React, {useState} from 'react'
import {StyleSheet,Image, TouchableOpacity, Platform} from 'react-native'
import {NativeBaseProvider, Stack, Text,Divider,} from 'native-base'
import * as ImagePicker from 'expo-image-picker'

export const ProfileScreen = () => {
  const [selectedImage, setSelectedImage] = useState(null)

  let openImagePickerAsync = async () => {
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync()

    if (permissionResult.granted === false) {
      alert('Permission to camara roll is required')
      return
    }

    const pickerResult = await ImagePicker.launchImageLibraryAsync()
    // console.log(pickerResult)

    if (pickerResult.cancelled === true) {
      return
    }

    if (Platform.OS === 'web') {
      let remoteUri = await uploadAnonymousFilesAsync(pickerResult.uri)
      setSelectedImage({localUri: pickerResult.uri, remoteUri})
    } else {
      setSelectedImage({localUri: pickerResult.uri})
    }
  }

  let nombre = 'alguien'
  let apellido = 'example'
  let sexo = 'masculino'
  let nacionalidad = 'Nicaragua'
  let email = 'example@gmail.com'

  return (
    <NativeBaseProvider>
      <Stack
        direction={{
          base: 'column',
          md: 'row',
        }}
        space={1}
        alignItems={{
          base: 'center',
          md: 'flex-start',
        }}
      >
        <TouchableOpacity onPress={openImagePickerAsync}>
          <Image
            source={{
              uri:
                selectedImage !== null
                  ? selectedImage.localUri
                  : 'https://picsum.photos/200/200',
            }}
            style={styles.image}
          />
        </TouchableOpacity>
        <Text bold fontSize={"xl"} marginTop={"5"} >{nombre} {apellido}</Text>
        <Text bold fontSize={"xl"} marginTop={"5"} >{nacionalidad}</Text>
        <Divider my={2}/>
        <Text bold fontSize={"xl"} marginTop={"5"} >sexo</Text>
        <Text>{sexo}</Text>
        <Text bold fontSize={"xl"} marginTop={"5"} >correo</Text>
        <Text >{email}</Text>
      </Stack>
    </NativeBaseProvider>
  )
}

const styles = StyleSheet.create({
  image: {
    marginTop : 40,
    height: 150,
    width: 150,
    resizeMode: 'contain',
    borderRadius: 100,
  },
})
