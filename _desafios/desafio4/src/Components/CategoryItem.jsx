import { Pressable, StyleSheet, Text, useWindowDimensions } from 'react-native'
import React from 'react'
import Card from './Card'
import { colors, font } from '../Global/theme'

const CategoryItem = ({
  item,
  navigation
}) => {
  const { width, height } = useWindowDimensions()
  const textCategoryStyle = width > 350 ? styles.textCategory : styles.textCategorySm
  const cardContainerStyle = width < 350 && styles.cardContainerSm
  return (
    <Pressable onPress={() => navigation.navigate('ItemListCategory', {category: item})}>
      <Card additionalStyle={ cardContainerStyle }>
        <Text style={textCategoryStyle}>{item}</Text>
      </Card>
    </Pressable>
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