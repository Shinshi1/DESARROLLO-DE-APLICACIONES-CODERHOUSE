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

  useEffect(() => {
    // encontrar el producto por su id
    const productSelected = allProducts.find(product => product.id === productId)
    setProduct(productSelected)
  }, [productId])

  return (
    <View>
      {product ?
        <View style={orientation === 'portrait' ? styles.mainContainer : styles.mainContainerLandscape}>
          <Text style={styles.title}>{product.title}</Text>
          <Image resizeMode='cover' style={styles.image} source={{ uri: product.images[0] }} />
          <View style={styles.textContainer}>
            <Text style={styles.textDescription}>{product.description}</Text>
            <Text style={styles.textPrice}>${product.price}</Text>
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
    alignItems: 'center',
    padding: 10
  },
  title: {
    letterSpacing: 2.3,
    fontWeight: 'bold',
    paddingVertical: 20,
    fontSize: 21
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
  },
  textDescription: {
    fontSize: 16,
    paddingVertical: 10
  },
  textPrice: {
    fontWeight: 'bold',
    paddingBottom: 10
  },
})