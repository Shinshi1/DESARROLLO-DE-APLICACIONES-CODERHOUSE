import { Image, Pressable, StyleSheet, Text, useWindowDimensions } from 'react-native'
import React from 'react'
import Card from './Card'
import { colors, font } from '../Global/theme'

const ProductItem = ({
  item,
  navigation
}) => {
  const { height, width } = useWindowDimensions()

  const additonalStyleCard = width > 350 ? styles.additionalStyleCard : styles.additionalStyleCardSm
  const imageStyle = width > 350 ? styles.image : styles.imageSm

  const onSelect = (id) => {
    navigation.navigate('Detail', {productId: id})
  }

  return (
    <Pressable onPress={() => onSelect(item.id)}>
      <Card
        additionalStyle={additonalStyleCard}
      >
        <Text style={styles.productTitle}>{item.title}</Text>
        <Image
          resizeMode='cover'
          style={imageStyle}
          source={{ uri: item.images[0] }}
        />
      </Card>
    </Pressable>
  )
}

export default ProductItem

const styles = StyleSheet.create({
  image: {
    height: '100%',
    minWidth: 200,
    width: '40%',
  },
  imageSm: {
    height: '100%',
    minWidth: 100,
    width: '40%',
  },
  additionalStyleCard: {
    flexDirection: 'row',
    height: 120,
    justifyContent: 'space-between',
    backgroundColor: colors.tertiary
  },
  additionalStyleCardSm: {
    flexDirection: 'row',
    height: 120,
    justifyContent: 'space-between',
    backgroundColor: colors.tertiary
  },
  productTitle: {
    fontFamily: font.family3,
    width: '50%',
    textAlign: 'center'
  }
})
