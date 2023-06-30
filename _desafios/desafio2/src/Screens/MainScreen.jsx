import { StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import TopBar from '../components/TopBar';
import TaskList from '../components/TaskList';
import ModalTask from '../components/Modal';
import idGenerator from '../utils/idGenerator.js';

const MainScreen = ({ taskList }) => {

  const [list, setList] = useState(taskList);
  const [input, setInput] = useState("")
  const [modalVisible, setModalVisible] = useState(false)
  const [taskActive, setTaskActive] = useState({})

  console.log(list)

  const onAddTask = () => {
    console.log('Se agregó una task')
    setList([
      ...list,
      {
        id: idGenerator(10),
        task: input,
        completed: false,
      }
    ])
  }

  const onPressTask = (task) => {
    setTaskActive(task)
    setModalVisible(!modalVisible)
  };

  return (
    <View style={styles.container}>
      <TopBar/>

      <TaskList
        list={list}
        onPressTask={onPressTask}
        input={input}
        setInput={setInput}
        onAddTask={onAddTask}
      />

      <ModalTask
        modalVisible={modalVisible}
        taskActive={taskActive}
        setModalVisible={setModalVisible}
        list={list}
        setList={setList}
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