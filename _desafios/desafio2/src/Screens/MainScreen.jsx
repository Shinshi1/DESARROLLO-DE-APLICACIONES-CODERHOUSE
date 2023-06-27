import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

const MainScreen = ({ taskList }) => {
  console.log(taskList)
  return (
    <View style={styles.container}>
      <View style={styles.view1} >
        <TextInput style={styles.input} />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Agregar Tarea</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.view2} >
        {taskList.map(item =>
          <View style={styles.task} key={item.id}>
            <Text>
              {item.task}
            </Text>
          </View>
        )}
      </View>
    </View>
  )
}

export default MainScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  view1: {
    flex: 3,
    paddingVertical: 20,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "azure",
    width: '100%'
  },
  view2: {
    flex: 7,
    backgroundColor: "#4472C4",
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingVertical: 15
  },
  input: {
    width: 150,
    borderBottomColor: 'dodgerblue',
    borderBottomWidth: 3,
    marginBottom: 8
  },
  button: {
    width: 150,
    backgroundColor: '#FFD966',
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 3,
    padding: 5
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: 'bold'
  },
  task: {
    width: '80%',
    backgroundColor: "azure",
    padding: 10,
    marginVertical: 10
  }
})