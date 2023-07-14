import React, { useEffect, useState } from 'react'
import { Button, Image, StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import allProducts from '../Data/products.json'

const ItemDetail = ({
  navigation,
  route
}) => {
  const { productId } = route.params

  const [product, setProduct] = useState(null)
  const [orientation, setOrientation] = useState('portrait')
  const { width, height } = useWindowDimensions()

  useEffect(() => {
    if (width > height) setOrientation('landscape')
    else setOrientation('portrait')
  }, [width, height])

  // console.log(orientation)

  useEffect(() => {
    // encontrar el producto por su id
    const productSelected = allProducts.find(product => product.id === productId)
    setProduct(productSelected)
    // setProductSelected(productSelected)
  }, [productId])

  // console.log(product)

  return (
    <View>
      <Button onPress={() => navigation.goBack()} title='Go Back' />
      {product ?
        <View style={orientation === 'portrait' ? styles.mainContainer : styles.mainContainerLandscape}>
          <Image resizeMode='cover' style={styles.image} source={{ uri: product.images[0] }} />
          <View style={styles.textContainer}>
            <Text>{product.title}</Text>
            <Text>{product.description}</Text>
            <Text>${product.price}</Text>
            <Button title='Add cart' />
          </View>
        </View> : null}

    </View>
  )
}

export default ItemDetail

const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 10
  },
  mainContainerLandscape: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 10
  },
  image: {
    width: 300,
    height: 250
  },
  textContainer: {
    flexDirection: 'column'
  }
})