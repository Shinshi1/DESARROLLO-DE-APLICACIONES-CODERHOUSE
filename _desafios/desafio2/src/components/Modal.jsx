import { StyleSheet, Text, View, Modal, Pressable } from 'react-native'
import React from 'react'

const ModalTask = ({ modalVisible, taskActive, setModalVisible, list, setList }) => {

  const doneTask = () => {
    console.log('tarea hecha', taskActive)
    return taskActive.completed = true
  }
  const removeTask = () => {
    console.log('tarea borrada', taskActive)
    const updatedTaskList = list.filter(task => task.id !== taskActive.id)
    setList(updatedTaskList)
  }

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>{taskActive.task}</Text>
          <View style={styles.buttonContainer} >
            <Pressable
              style={[styles.button, styles.buttonDone]}
              onPress={() => {
                // marcar como hecho
                doneTask()
                setModalVisible(!modalVisible)
              }}>
              <Text style={styles.textStyle}>Done</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonRemove]}
              onPress={() => {
                // eliminar
                removeTask()
                setModalVisible(!modalVisible)
              }}>
              <Text style={styles.textStyle}>Remove</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonCancel]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Cancel</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  )
}

export default ModalTask

const styles = StyleSheet.create({
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
  buttonDone: {
    backgroundColor: '#008f39',
  },
  buttonRemove: {
    backgroundColor: '#F00000',
  },
  buttonCancel: {
    backgroundColor: '#808080',
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