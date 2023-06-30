import { StyleSheet, View, FlatList, Pressable, Modal, Text, TextInput } from 'react-native'
import React, { useState } from 'react'
import RenderItemTask from './RenderItemTask'
import { Ionicons } from '@expo/vector-icons';
import ModalAddTask from './ModalAddTask';

const TaskList = ({ list, onPressTask, input, setInput, onAddTask}) => {

  const [modalAddTaskVisible, setModalAddTaskVisible] = useState(false)

  const addTask = () => {
    console.log('abrir modal')
    setModalAddTaskVisible(!modalAddTaskVisible)
  }

  return (
    <View style={styles.view2} >
      <FlatList
        data={list}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <RenderItemTask item={item} onPressTask={onPressTask} />}
      />

      <Pressable onPress={addTask}>
        <Ionicons name='md-add-circle' size={60} color='#FFD966' />
      </Pressable>

      <ModalAddTask
        input={input}
        setInput={setInput}
        modalAddTaskVisible={modalAddTaskVisible}
        setModalAddTaskVisible={setModalAddTaskVisible}
        onAddTask={onAddTask}
      />
    </View>
  )
}

export default TaskList

const styles = StyleSheet.create({
  view2: {
    flex: 7,
    backgroundColor: "#4472C4",
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingVertical: 15
  },
})