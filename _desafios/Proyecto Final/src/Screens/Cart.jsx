import React from 'react'
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'

import CartItem from '../Components/CartItem'

import { font } from '../Global/theme'
import { useSelector } from 'react-redux'
import { usePostCartMutation } from '../Services/shopServices'
import { idGenerator } from '../Utils/idGenerator'

const Cart = () => {
  // const allCartItems = useSelector(state => state.cartReducer.value.items)
  const { items: cartData, total, user } = useSelector(state => state.cartReducer.value)
  const [triggerPostCart, result] = usePostCartMutation()

  const updatedAt = Date.now()

  const confirmCart = () => {
    triggerPostCart({ items: cartData, total, user, updatedAt, id: idGenerator() })
  }
  console.log(result)


  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={cartData}
        keyExtractor={(cartItem) => cartItem.id}
        renderItem={({ item }) => <CartItem cartItem={item} />}
      />
      <View style={styles.confirmContainer}>
        <Pressable
          onPress={confirmCart}
        >
          <Text style={styles.confirmText}>Confirm</Text>
        </Pressable>
        <Text style={styles.confirmText}>Total: ${total}</Text>
      </View>
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 130,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  list: {
    width: '100%',
  },
  confirmContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#444',
    padding: 15,
    width: '100%'
  },
  confirmText: {
    fontFamily: font.buttonFont,
    fontSize: 18,
    color: '#fff'
  }
})