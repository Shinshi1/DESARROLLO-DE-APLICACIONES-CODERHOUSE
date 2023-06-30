import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'

const TopBar = ({input, setInput, onAddTask}) => {
  return (
    <View style={styles.view1} >
      <TextInput
        style={styles.input}
        placeholder='Escribe una tarea...'
        value={input}
        onChangeText={setInput}
      />
      <TouchableOpacity
        style={[styles.button, styles.colorYellow]}
        onPress={onAddTask}
      >
        <Text style={styles.buttonText}>Agregar Tarea</Text>
      </TouchableOpacity>
    </View>
  )
}

export default TopBar

const styles = StyleSheet.create({
  view1: {
    flex: 3,
    paddingVertical: 20,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "azure",
    width: '100%'
  },
  input: {
    width: 150,
    borderBottomColor: 'dodgerblue',
    borderBottomWidth: 3,
    marginBottom: 8
  },
  colorYellow: {
    backgroundColor: '#FFD966',
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: 'bold'
  },
})