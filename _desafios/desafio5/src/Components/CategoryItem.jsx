import { Pressable, StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import React from 'react'
import Card from './Card'
import { colors, font } from '../Global/theme'
import { useDispatch } from 'react-redux'
import { setCategorySelected } from '../Features/Shop/shopSlice'

const CategoryItem = ({
  item,
  navigation
}) => {
  const { width, height } = useWindowDimensions()

  const dispatch = useDispatch()

  const onSelect = () => {
    dispatch(setCategorySelected(item))
    navigation.navigate('ItemListCategory', { category: item })
  }

  const textCategoryStyle = width > 350 ? styles.textCategory : styles.textCategorySm
  const cardContainerStyle = width < 350 && styles.cardContainerSm
  return (
    <View style={{ width: width, alignItems: 'center' }}>
      <Pressable onPress={onSelect}>
        <Card additionalStyle={cardContainerStyle}>
          <Text style={textCategoryStyle}>{item}</Text>
        </Card>
      </Pressable>
    </View>
  )
}

export default CategoryItem

const styles = StyleSheet.create({
  cardContainerSm: {
    width: 170,
    height: 40,
  },
  textCategory: {
    fontSize: 16,
    color: colors.quaternary,
    fontFamily: font.buttonFont
  },
  textCategorySm: {
    fontSize: 14,
    color: colors.quaternary,
    fontFamily: font.buttonFont
  }
})