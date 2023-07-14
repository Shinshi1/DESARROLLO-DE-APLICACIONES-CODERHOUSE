import { Pressable, StyleSheet, Text, TextInput, View, useWindowDimensions } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import React, { useState } from 'react'
import { colors } from '../Global/Colors'

const Search = ({
  onSearch,
  error = "",
  goBack
}) => {
  const [keyword, setKeyword] = useState("")
  const { width, height } = useWindowDimensions()

  const searchContainerStyle = width > 350 ? styles.searchContainer : styles.searchContainerSm
  const inputStyle = width > 350 ? styles.input : styles.inputSm
  const iconSize = width > 350 ? 24 : 16

  return (
    <View style={styles.container}>
      <View style={searchContainerStyle}>
        <Pressable onPress={goBack} >
          <AntDesign name="arrowleft" size={iconSize} color={"black"} />
        </Pressable >
        <TextInput
          style={inputStyle}
          placeholder='Search...'
          value={keyword}
          onChangeText={setKeyword}
        />
        <Pressable onPress={() => onSearch(keyword)}>
          <AntDesign name="search1" size={iconSize} color="black" />
        </Pressable>
        <Pressable onPress={() => setKeyword("")}>
          <AntDesign name="close" size={iconSize} color="black" />
        </Pressable>
      </View>
      <View style={styles.errorContainer}>
        {error ?
          <Text style={styles.keywordError}>
            {error}
          </Text>
          : <Text style={styles.keywordError}></Text>}
      </View>
    </View>
  )
}

export default Search

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 10,
    gap: 10,
  },
  searchContainerSm: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 18,
  },
  input: {
    width: 250,
    padding: 8,
    fontSize: 18,
    backgroundColor: colors.tertiary,
    borderRadius: 10,
  },
  inputSm: {
    width: 170,
    paddingHorizontal: 4,
    fontSize: 14,
    backgroundColor: colors.tertiary,
    borderRadius: 5,
  },
  keywordError: {
    color: 'red',
    fontSize: 12
  },
  errorContainer: {
    alignSelf: 'center',
  }
})