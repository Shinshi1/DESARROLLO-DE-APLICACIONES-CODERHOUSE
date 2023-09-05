import React from 'react'
import { StyleSheet, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Entypo, Ionicons, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';

import ShopStack from './Stack/ShopStack'
import CartStack from './Stack/CartStack'
import OrderStack from './Stack/OrderStack';
import MyProfileStack from './Stack/MyProfileStack';

import { colors } from '../Global/theme'

const Tab = createBottomTabNavigator()

const TabNavigator = () => {
  return (
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
  )
}

export default TabNavigator

const styles = StyleSheet.create({
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
})