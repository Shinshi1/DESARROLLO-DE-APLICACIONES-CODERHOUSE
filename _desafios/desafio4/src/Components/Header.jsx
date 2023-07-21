import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors, font } from '../Global/theme'

const Header = ({title}) => {
  console.log(title)
  return (
    <View style={styles.containerHeader}>
      <Text style={styles.text}>{title}</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  containerHeader: {
    backgroundColor: colors.secondary,
    justifyContent:'center',
    alignItems: 'center',
    paddingVertical: 15
  },
  text: {
    fontSize: 25,
    color: colors.quaternary,
    fontFamily: font.headerFont1,
  }
})