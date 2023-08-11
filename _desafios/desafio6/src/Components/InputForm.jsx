import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { colors, font } from '../Global/theme'
import { TextInput } from 'react-native-web'
import { useState } from 'react'

const InputForm = ({
  label,
  onChange,
  error = "",
  isSecure = false
}) => {
  const [input, setInput] = useState("")
  const onChangeText = (text) => {
    setInput(text)
    onChange(text)
  }
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.subtitle}>{label}</Text>
      <TextInput
        style={styles.input}
        value={input}
        onChangeText={onChangeText}
        secureTextEntry={isSecure}
      />
      {error ?
        <Text style={styles.error}>
          {error}
        </Text>
        :
        null
      }
    </View>
  )
}

export default InputForm

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%'
  },
  subtitle: {
    width: '90%',
    fontSize: 16,
    // fontFamily: font.navFont,
    fontStyle: 'italic'
  },
  error: {
    fontSize: 16,
    color: '#cb3234',
    fontFamily: font.paragraphFont,
    fontStyle: 'italic',
  },
  input: {
    width: '90%',
    borderWidth: 0,
    borderBottomWidth: 3,
    borderBottomColor: '#222',
    padding: 2,
    fontFamily: font.paragraphFont,
    fontSize: 14,
  }
})