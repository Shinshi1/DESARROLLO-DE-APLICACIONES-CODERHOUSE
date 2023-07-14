import { FlatList, StyleSheet, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import productsRaw from '../Data/products.json'
import Search from '../Components/Search'
import { colors } from '../Global/Colors'
import ProductItem from '../Components/ProductItem'

const ItemListCategory = ({
  navigation,
  route
}) => {
  const {category} = route.params
  console.log(category)

  const [products, setProducts] = useState([])
  const [keyword, setKeyword] = useState("")
  const [keywordError, setKeywordError] = useState("")

  useEffect(() => {
    const productsFiltered = productsRaw.filter(product => product.category === category && product.title.toLocaleLowerCase().includes(keyword.toLowerCase()))
    setProducts(productsFiltered)
  }, [category, keyword])

  const onSearch = (input) => {
    const expression = /^[a-zA-Z0-9\s]*$/
    const evaluation = expression.test(input)

    if (evaluation) {
      setKeyword(input)
      setKeywordError("")
    } else {
      setKeywordError("Solo letras y números")
    }
  }

  return (
    <View style={styles.container}>
      <Search
        onSearch={onSearch}
        error={keywordError}
        goBack={() => navigation.goBack()}
      />
      {products ?
        <FlatList
          data={products}
          keyExtractor={product => product.id}
          renderItem={({ item }) => <ProductItem item={item} navigation={navigation} />}
          showsVerticalScrollIndicator={false}
        /> :
        null
      }

    </View>
  )
}

export default ItemListCategory

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: colors.quaternary,
    alignItems: 'center',
  },
})