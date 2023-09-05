import React from 'react'
import { StyleSheet, Text, Pressable, View } from 'react-native'
import { colors, font } from '../Global/theme'
import { Entypo } from '@expo/vector-icons'

const CartItem = ({ cartItem }) => {
  return (
    <View style={styles.card} onPress={() => { }}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{cartItem.title} ({cartItem.quantity})</Text>
        <Text style={styles.text2}>{cartItem.brand}</Text>
        <Text style={styles.text2}>${cartItem.price}</Text>
      </View>
      <Entypo name='trash' size={30} color={colors.primary} />
    </View>
  )
}

export default CartItem

const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: 100,
    backgroundColor: colors.secondary,
    padding: 10,
    margin: 10,
    borderWidth: 2,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textContainer: {
    width: '70%',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  text:{
    fontFamily: font.paragraphFont,
    fontSize: 19,
    color: colors.quaternary
  },
  text2: {
    fontFamily: font.paragraphFont,
    fontSize: 14,
    color: colors.quaternary
  }
})