import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { colors, font } from '../Global/theme'

const SubmitButton = ({ onPress, title }) => {
  return (
    <Pressable onPress={onPress} style={styles.button}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  )
}

export default SubmitButton

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    width: '60%',
  },
  text: {
    color: colors.quaternary,
    fontFamily: font.buttonFont,
    fontSize: 22
  }
})