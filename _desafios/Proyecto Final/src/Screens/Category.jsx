import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'

import CategoryItem from '../Components/CategoryItem'
import { colors } from '../Global/theme'
import { useGetCategoriesQuery } from '../Services/shopServices'



const Category = ({
  navigation
}) => {
  const {data: categories, isLoading, error} = useGetCategoriesQuery()

  return (
    <View style={styles.container}>
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
    paddingBottom: 100,
    flex: 1
  }
})