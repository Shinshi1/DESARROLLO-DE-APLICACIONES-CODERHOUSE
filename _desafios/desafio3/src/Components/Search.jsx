import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import React, { useState } from 'react'
import { colors } from '../Global/Colors'

const Search = ({
  onSearch,
  error = "",
  goBack
}) => {
  const [keyword, setKeyword] = useState("")

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Pressable onPress={goBack} >
          <AntDesign name="arrowleft" size={24} color={"black"} />
        </Pressable >
        <TextInput
          style={styles.input}
          placeholder='Search...'
          value={keyword}
          onChangeText={setKeyword}
        />
        <Pressable onPress={() => onSearch(keyword)}>
          <AntDesign name="search1" size={24} color="black" />
        </Pressable>
        <Pressable onPress={() => setKeyword("")}>
          <AntDesign name="close" size={24} color="black" />
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
    height: '15%',
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
  keywordError: {
    color: 'red',
  },
  errorContainer: {
    alignSelf: 'center',
  }
})