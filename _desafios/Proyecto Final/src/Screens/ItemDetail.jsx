import React, { useEffect, useState } from 'react'
import { Button, Image, StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { addCartItem } from '../Features/Cart/cartSlice'

const ItemDetail = ({
  navigation,
  route
}) => {
  const dispatch = useDispatch()
  const productId = useSelector(state => state.shopReducer.value.productIdSelected)
  const productSelected = useSelector(state => state.shopReducer.value.productSelected)

  const [product, setProduct] = useState(null)
  const [orientation, setOrientation] = useState('portrait')
  const { width, height } = useWindowDimensions()

  useEffect(() => {
    if (width > height) setOrientation('landscape')
    else setOrientation('portrait')
  }, [width, height])

  useEffect(() => {
    setProduct(productSelected)
  }, [productId])

  const onAddCart = () => {
    dispatch(addCartItem({ ...product, quantity: 1 }))
  }

  return (
    <View>
      {product ?
        <View style={orientation === 'portrait' ? styles.mainContainer : styles.mainContainerLandscape}>
          <Text style={styles.title}>{product.title}</Text>
          <Image resizeMode='cover' style={styles.image} source={{ uri: product.images[0] }} />
          <View style={styles.textContainer}>
            <Text style={styles.textDescription}>{product.description}</Text>
            <Text style={styles.textPrice}>${product.price}</Text>
            <Button
              title='Add cart'
              onPress={() => onAddCart()}
            />
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