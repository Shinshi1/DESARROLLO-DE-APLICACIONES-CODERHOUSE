import { FlatList, StyleSheet, View } from 'react-native'
import React from 'react'
// import categories from '../Data/categories.json'
import CategoryItem from '../Components/CategoryItem'
import { colors } from '../Global/theme'
import { useSelector } from 'react-redux'



const Category = ({
  navigation
}) => {
  const categories = useSelector(state => state.shopReducer.value.allCategories)

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