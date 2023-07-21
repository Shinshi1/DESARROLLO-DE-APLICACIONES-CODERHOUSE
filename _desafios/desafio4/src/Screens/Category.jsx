import { FlatList, Pressable, StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import React from 'react'
import categories from '../Data/categories.json'
import CategoryItem from '../Components/CategoryItem'
import { colors } from '../Global/theme'
import { AntDesign } from '@expo/vector-icons'



const Category = ({
  navigation
}) => {

  const { width, height } = useWindowDimensions()
  const iconSize = width > 350 ? 24 : 16

  return (
    <View style={styles.container}>
      <View style={styles.menuNavigation}>
        <Pressable onPress={() => navigation.goBack()} >
          <AntDesign name="arrowleft" size={iconSize} color={"black"} />
        </Pressable >
      </View>
      <FlatList
        data={categories}
        keyExtractor={category => category}
        renderItem={({ item }) => <CategoryItem item={item} navigation={navigation} />}
        showsVerticalScrollIndicator={false}
      />
    </View>


  )
}

export default Category

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.quaternary,
    alignItems: 'center',
  },
  menuNavigation: {
    paddingVertical: 15,
    width: '90%'
  }
})