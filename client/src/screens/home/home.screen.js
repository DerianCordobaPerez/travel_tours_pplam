import React from 'react'
import { useState } from "react"
import {TouchableOpacity} from 'react-native'
import {
  NativeBaseProvider,
  ScrollView,
  Text,
  Stack,
  Heading,
  Image,
  Center,
  Slide,
  Modal,
} from 'native-base'
import {Card} from '../../components/index'

export const HomeScreen = () => {
  const [showModal, setShowModal] = useState(false)
  return (
    <NativeBaseProvider>
      <ScrollView>
      <Center>
        <Text marginTop={"3"} fontSize={"xl"} bold>Lugares Turisticos</Text>
        <TouchableOpacity onPress={() => setShowModal(true)}>
        <Card
          uri={{uri: require('../../../assets/san juan del sur.jpg')}}
          header="Rio San Juan"
          body="Es uno de los destinos turísticos más importantes de este país centroamericano gracias a la frescura y serenidad de las
                aguas de su bahía, así como por las varias playas cercanas aptas para el surf (El Remanso, El Coco, Marsella, Majagual, Maderas,
                Las Salinas, Gigante y El Astillero)"
        />
        </TouchableOpacity>
        <TouchableOpacity>
        <Card
          uri={{uri: require('../../../assets/isla de ometepe.webp')}}
          header="Isla de Ometepe"
          body="Ometepe es una isla en el vasto lago de Nicaragua, al suroeste de Nicaragua. Es conocida por sus volcanes gemelos. El volcán activo 
          Concepción está en el norte de la isla. Al sur, los senderos recorren el volcán Maderas hasta las cascadas de San Ramón. El Museo de Ometepe, en la ciudad de Altagracia,"
        />
        </TouchableOpacity>
      </Center>
      </ScrollView>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
            <Modal.Content width="100%" height="100%">
            <Modal.Header>San Juan</Modal.Header>
              <Modal.CloseButton />
              <ScrollView>
              <Text>San Juan del Sur es una ciudad de la costa suroeste de Nicaragua. Es conocida por su franja de playas en el Pacífico, como la playa Maderas, con sus olas de rompientes fuertes, y la playa Marsella, que es más tranquila. En un acantilado sobre la bahía de la ciudad, se alza una estatua contemporánea de Cristo. Cerca de un riachuelo en las afueras de la ciudad hay un petroglifo antiguo. La Reserva Natural La Flor se encuentra al sur a lo largo de la costa y es un lugar de anidamiento de las tortugas oliváceas.</Text>
              <Text>Su casco urbano ofrece una completa y variada oferta turística, y en su zona municipal se practica el surf, la pesca, avistamiento de ballenas, canopy, yoga, cabalgatas y otros deportes. Entre sus playas de ambiente silvestre o con infraestructura, destaca el Refugio de Vida Silvestre Playa La Flor.</Text>
              </ScrollView>
            </Modal.Content>
          </Modal>
    </NativeBaseProvider>
  )
}
