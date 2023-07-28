import React, { useState, useEffect } from 'react'
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'

import CartItem from '../Components/CartItem'

import allCartItems from '../Data/cart.json'
import { colors, font } from '../Global/theme'
import { useSelector } from 'react-redux'

const Cart = () => {
  const [cartItems, setCartItems] = useState([])
  const [total, setTotal] = useState(0)

  const allCartItems = useSelector(state => state.cartReducer.value.Cart)

  useEffect(() => {
    const total = allCartItems.reduce((acc, currentItem) =>  acc += currentItem.quantity * currentItem.price, 0 );
    setCartItems(allCartItems)
    setTotal(total)
  }, [allCartItems])

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={cartItems}
        keyExtractor={(cartItem) => cartItem.id}
        renderItem={({ item }) => <CartItem cartItem={item} />}
      />
      <View style={styles.confirmContainer}>
        <Pressable>
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