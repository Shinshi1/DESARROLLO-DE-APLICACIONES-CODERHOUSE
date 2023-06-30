import { StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import TopBar from '../components/TopBar';
import TaskList from '../components/TaskList';
import ModalTask from '../components/Modal';

const MainScreen = ({ taskList }) => {

  const [list, setList] = useState(taskList);
  const [input, setInput] = useState("")
  const [modalVisible, setModalVisible] = useState(false)
  const [taskActive, setTaskActive] = useState({})

  const onAddTask = () => {
    console.log('Se agregó una task')
    setList([
      ...list,
      {
        id: list.length + 1,
        task: input,
        completed: false,
      }
    ])
  }

  const onPressTask = (task) => {
    console.log(task)
    setTaskActive(task)
    setModalVisible(!modalVisible)
  };

  return (
    <View style={styles.container}>
      <TopBar
        input={input}
        setInput={setInput}
        onAddTask={onAddTask}
      />

      <TaskList
        list={list}
        onPressTask={onPressTask}
      />

      <ModalTask
        modalVisible={modalVisible}
        taskActive={taskActive}
        setModalVisible={setModalVisible}
      />

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
  }
})