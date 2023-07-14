import { Image, StyleSheet, Text, useWindowDimensions } from 'react-native'
import React from 'react'
import Card from './Card'
import { colors } from '../Global/Colors'

const ProductItem = ({
  item
}) => {
  const {height, width} = useWindowDimensions()
  console.log(height, width)

  return (
    <Card
      additionalStyle={styles.additionalStyleCard}
    >
      <Text style={styles.productTitle}>{item.title}</Text>
      <Image
        resizeMode='cover'
        style={styles.image}
        source={{ uri: item.images[0] }}
      />
    </Card>
  )
}

export default ProductItem

const styles = StyleSheet.create({
  image: {
    height: '100%',
    minWidth: 200,
    width: '40%',
  },
  additionalStyleCard: {
    flexDirection: 'row',
    height: 120,
    justifyContent: 'space-between',
    backgroundColor: colors.tertiary
  },
  productTitle: {
    fontFamily: 'PlayFair',
    width: '50%'
  }
})
