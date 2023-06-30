import { StyleSheet, View, FlatList } from 'react-native'
import React from 'react'
import RenderItemTask from './RenderItemTask'

const TaskList = ({list, onPressTask}) => {
  return (
    <View style={styles.view2} >
      <FlatList
        data={list}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <RenderItemTask item={item} onPressTask={onPressTask} />}
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