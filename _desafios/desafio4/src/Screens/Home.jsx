import { StyleSheet, View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import { colors } from '../Global/theme'
import Card from '../Components/Card'

const Home = ({
  navigation
}) => {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>¡Bienvenido a TecnoWorld!</Text>

      <Image
        resizeMode='cover'
        style={styles.image}
        source={{ uri: 'https://images.pexels.com/photos/9555099/pexels-photo-9555099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }}
      />

      <Text style={styles.textAbout}>
        Descubre un universo de tecnología al alcance de tus manos. En nuestra tienda de productos tecnológicos, encontrarás una amplia selección de los dispositivos más innovadores y vanguardistas del mercado. Desde smartphones que te mantendrán conectado en todo momento, hasta laptops y tablets que potenciarán tu productividad. ¿Buscas la experiencia visual definitiva? Sumérgete en la grandeza de nuestros monitores y televisores.
      </Text>

      <Text style={styles.textAbout}>
        Únete a la revolución tecnológica y lleva tu vida al siguiente nivel. ¡Descarga nuestra aplicación ahora y forma parte del futuro con TecnoWorld!
      </Text>
      <Text style={styles.textAbout}>
        Elige una categoría para empezar...
      </Text>

      <Pressable onPress={() => navigation.navigate('Categories')}>
        <Card>
          <Text style={styles.textCategory}>Categorias</Text>
        </Card>
      </Pressable>

    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.quaternary,
    alignItems: 'center',
    flex: 1
  },
  image: {
    height: 300,
    width: 300,
    borderRadius: 8
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingVertical: 14
  },
  textAbout: {
    textAlign: 'center',
    paddingVertical: 10,
    paddingHorizontal: 40
  },
  textCategory: {
    color: colors.quaternary,
    fontWeight: 'bold'
  }
})