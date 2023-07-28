import { FlatList, StyleSheet, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Search from '../Components/Search'
import { colors } from '../Global/theme'
import ProductItem from '../Components/ProductItem'
import { useSelector } from 'react-redux'

const ItemListCategory = ({
  navigation,
  // route
}) => {
  const productsSelected = useSelector(state => state.shopReducer.value.productsSelected)

  const [products, setProducts] = useState([])
  const [keyword, setKeyword] = useState("")
  const [keywordError, setKeywordError] = useState("")

  useEffect(() => {
    const productsFiltered = productsSelected.filter(product => product.title.toLocaleLowerCase().includes(keyword.toLowerCase()))
    setProducts(productsFiltered)
  }, [productsSelected, keyword])

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
    height: '86%',
    backgroundColor: colors.quaternary,
    alignItems: 'center',
  },
})