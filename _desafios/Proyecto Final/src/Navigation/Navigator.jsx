import React, { useEffect } from 'react'
import { Platform, SafeAreaView, StatusBar, StyleSheet, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux';

import TabNavigator from './TabNavigator'
import AuthStack from './Stack/AuthStack';

import { getSession } from '../SQLite';
import { setUser } from '../Features/User/userSlice';


const Navigator = () => {
  const { email } = useSelector(state => state.userReducer.value)

  const dispatch = useDispatch()

  // Get stored sessions
  useEffect(() => {
    (async () => {
      try {
        const session = await getSession()
        if (session?.rows.length) {
          const user = session.rows._array[0]
          dispatch(setUser(user))
        }
      } catch (error) {
        console.log(error.message)
      }
    })()
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        {
          email ?
            <TabNavigator />
            : <AuthStack />
        }
      </NavigationContainer>
    </SafeAreaView>
  )
}

export default Navigator

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  }
});
