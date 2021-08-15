import React from 'react'
import {NativeBaseProvider,ScrollView, Box, Text,Stack, Heading,Image,Center} from 'native-base'

export const HomeScreen = () => {
  
  return(
  <NativeBaseProvider>
    <ScrollView>
    <Center>
    <Text marginTop={"3"} fontSize={"xl"} bold>Lugares Turisticos</Text>
    <Box bg="white" shadow={2} rounded="lg" maxWidth="90%" marginTop="3" >
      <Image source={require('../../../assets/san juan del sur.jpg')} alt="image base" resizeMode="cover" height={150} roundedTop="md" />
      <Stack space={4} p={[4, 4, 8]}>
        <Heading size={["md", "lg", "md"]} noOfLines={1}>
          Rio San Juan 
          </Heading>
        <Text lineHeight={[5, 5, 7]} noOfLines={[5, 4, 2]} color="gray.700">
        Es uno de los destinos turísticos más importantes de este país centroamericano gracias a la frescura y serenidad de las 
        aguas de su bahía, así como por las varias playas cercanas aptas para el surf (El Remanso, El Coco, Marsella, Majagual, Maderas, 
        Las Salinas, Gigante y El Astillero). Es conocida como "La capital de la diversión", por la diversidad de opciones de recreación 
        y entretenimiento que ofrece a sus visitantes nacionales y extranjeros.
        </Text>
      </Stack>
      </Box>

      <Box bg="white" shadow={2} rounded="lg" maxWidth="90%" marginTop="3" >
      <Image source={require('../../../assets/san juan del sur.jpg')} alt="image base" resizeMode="cover" height={150} roundedTop="md" />
      <Stack space={4} p={[4, 4, 8]}>
        <Heading size={["md", "lg", "md"]} noOfLines={1}>
          Rio San Juan 
          </Heading>
        <Text lineHeight={[5, 5, 7]} noOfLines={[5, 4, 2]} color="gray.700">
        Es uno de los destinos turísticos más importantes de este país centroamericano gracias a la frescura y serenidad de las 
        aguas de su bahía, así como por las varias playas cercanas aptas para el surf (El Remanso, El Coco, Marsella, Majagual, Maderas, 
        Las Salinas, Gigante y El Astillero). Es conocida como "La capital de la diversión", por la diversidad de opciones de recreación 
        y entretenimiento que ofrece a sus visitantes nacionales y extranjeros.
        </Text>
      </Stack>
      </Box>
      </Center>
      </ScrollView>
  </NativeBaseProvider>
)}
