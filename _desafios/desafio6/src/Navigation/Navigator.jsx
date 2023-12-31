import React from 'react'
import { Platform, SafeAreaView, StatusBar, StyleSheet, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Entypo, Ionicons, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';


import ShopStack from './Stack/ShopStack'
import CartStack from './Stack/CartStack'

import { colors } from '../Global/theme'
import OrderStack from './Stack/OrderStack';
import AuthStack from './Stack/AuthStack';
import { useSelector } from 'react-redux';
import MyProfileStack from './Stack/MyProfileStack';

const Tab = createBottomTabNavigator()

const Navigator = () => {
  const { email } = useSelector(state => state.userReducer.value)
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        {
          email ?
            <Tab.Navigator
              initialRouteName='Shop'
              screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: styles.tabBar
              }}
            >
              <Tab.Screen
                name='Shop'
                component={ShopStack}
                options={{
                  tabBarIcon: ({ focused }) => {
                    return (
                      <View>
                        <Entypo
                          name="shop"
                          size={24}
                          color={
                            focused
                              ? colors.quaternary
                              : "#ababab"
                          }
                        />
                      </View>
                    )
                  }

                }} />
              <Tab.Screen
                name='Cart'
                component={CartStack}
                options={{
                  tabBarIcon: ({ focused }) => {
                    return (
                      <View>
                        <Ionicons
                          name="cart-outline"
                          size={24}
                          color={
                            focused
                              ? colors.quaternary
                              : "#ababab"
                          }
                        />
                      </View>
                    )
                  }

                }}
              />
              <Tab.Screen
                name='Orders'
                component={OrderStack}
                options={{
                  tabBarIcon: ({ focused }) => {
                    return (
                      <View>
                        <FontAwesome5
                          name="list"
                          size={20}
                          color={
                            focused
                              ? colors.quaternary
                              : "#ababab"
                          }
                        />
                      </View>
                    )
                  }

                }}
              />
              <Tab.Screen
                name='MyProfile'
                component={MyProfileStack}
                options={{
                  tabBarIcon: ({ focused }) => {
                    return (
                      <View>
                        <MaterialCommunityIcons
                          name="account"
                          size={20}
                          color={
                            focused
                              ? colors.quaternary
                              : "#ababab"
                          }
                        />
                      </View>
                    )
                  }

                }}
              />
            </Tab.Navigator>
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
  },
  tabBar: {
    backgroundColor: colors.primary,
    shadowColor: '#000',
    elevation: 4,
    position: 'absolute',
    bottom: 25,
    left: 20,
    right: 20,
    borderRadius: 15,
    height: 70
  }
});
