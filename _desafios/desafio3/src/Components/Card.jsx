import { StyleSheet, View } from 'react-native'
import React from 'react'
import { colors } from '../Global/Colors'

const Card = ({children}) => {
  return (
    <View style={styles.cardContainer}>
      {children}
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
  cardContainer: {
    height: 50,
    width: 250,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderWidth: 2,
    borderColor: "#000",
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.secondary,
    marginVertical: 10,
    borderRadius: 8
  }
})