import { Modal, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const ModalAddTask = ({ modalAddTaskVisible, setModalAddTaskVisible, input, setInput, onAddTask }) => {
  return (
    <Modal
      animationType='slide'
      transparent={true}
      visible={modalAddTaskVisible}
      onRequestClose={() => {
        setModalAddTaskVisible(!modalAddTaskVisible)
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <TextInput
            style={styles.input}
            placeholder='Escribe una tarea...'
            value={input}
            onChangeText={setInput}
          />
          <Pressable
            style={[styles.button, styles.buttonAdd]}
            onPress={() => {
              console.log(input)
              onAddTask()
              setModalAddTaskVisible(!modalAddTaskVisible)
            }}
          >
            <Text style={styles.buttonText}>Agregar Tarea</Text>
          </Pressable>
        </View>

      </View>
    </Modal>
  )
}

export default ModalAddTask

const styles = StyleSheet.create({
  input: {
    width: 150,
    borderBottomColor: 'dodgerblue',
    borderBottomWidth: 3,
    marginBottom: 8
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 7
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonAdd: {
    backgroundColor: '#FFD966',
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: 'bold'
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
})