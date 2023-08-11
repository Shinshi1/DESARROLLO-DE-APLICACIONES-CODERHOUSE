import { Pressable, StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'

import { colors, font } from '../Global/theme'

const Header = ({ route, navigation }) => {
  
  const { width, height } = useWindowDimensions()
  const iconSize = width > 350 ? 24 : 16

  let title
  route.name === 'Home' ? title = 'Home' : 
  route.name === 'Categories' ? title = 'Categories' : 
  route.name === 'ItemListCategory' ? title = route.params.category :
  route.name === 'Detail' ? title = 'Detail' : 
  route.name === 'CartScreen' ? title = 'Cart' :
  route.name === 'OrderScreen' ? title = 'Orders' :
  route.name === 'Signup' ? title = 'Signup' :
  route.name === 'Login' ? title = 'Login' :
  title = 'Header'
  return (
    <View style={styles.containerHeader}>
      {route.name !== 'Home' && route.name !== 'CartScreen' && route.name !== 'OrderScreen' ?
        <Pressable style={styles.pressable} onPress={navigation.goBack} >
          <AntDesign name="arrowleft" size={iconSize} color={"black"} />
        </Pressable >
        : null
      }
      <Text style={styles.text}>{title}</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  containerHeader: {
    flexDirection: 'row',
    backgroundColor: colors.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,
    position: 'relative'
  },
  text: {
    fontSize: 25,
    color: colors.quaternary,
    fontFamily: font.headerFont1,
  },
  pressable: {
    position: 'absolute',
    left: 25
  }
})