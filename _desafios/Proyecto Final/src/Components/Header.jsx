import { Pressable, StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import React from 'react'
import { AntDesign, SimpleLineIcons } from '@expo/vector-icons'

import { colors, font } from '../Global/theme'
import { useDispatch, useSelector } from 'react-redux'
import { signOut } from '../Features/User/userSlice'
import { deleteSession } from '../SQLite'

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
                  route.name === 'My Profile' ? title = 'Profile' :
                    route.name === 'Image Selector' ? title = 'Select Image' :
                      title = 'Header'

  const dispatch = useDispatch()
  const { email, localId } = useSelector(state => state.userReducer.value)
  const notGoBack = ['Signup', 'Home', 'CartScreen', 'OrderScreen', 'Login', 'My Profile']

  const onSignout = async () => {
    try {
      console.log('Deleting session...')
      const response = await deleteSession(localId)
      console.log('Session deleted: ')
      console.log(response)
      dispatch(signOut())
    } catch (error) {
      console.error('Error while trying to signout')
      console.error(error.message)
    }

  }

  return (
    <View style={styles.containerHeader}>
      <>
        {
          notGoBack.includes(route.name) ?
            null
            :
            <Pressable style={styles.pressable} onPress={navigation.goBack} >
              <AntDesign name="arrowleft" size={iconSize} color="#000" />
            </Pressable >
        }
        <Text style={styles.text}>{title}</Text>
        {
          email ?
            <Pressable style={styles.pressableSignOut} onPress={onSignout} >
              <SimpleLineIcons name="logout" size={iconSize} color="#000" />
            </Pressable >
            : null
        }
      </>
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
  },
  pressableSignOut: {
    position: 'absolute',
    right: 25
  }
})