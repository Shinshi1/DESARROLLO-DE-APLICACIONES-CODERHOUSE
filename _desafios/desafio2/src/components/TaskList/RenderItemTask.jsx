import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const RenderItemTask = ({ item, onPressTask }) => {
  return (
    <Pressable onPress={() => onPressTask(item)}>
      <View style={styles.task} key={item.id}>
        <Text style={item.completed ? styles.completedTaskText : ""}>
          {item.task}
        </Text>
      </View>
    </Pressable>
  )
};

export default RenderItemTask

const styles = StyleSheet.create({
  task: {
    width: 200,
    backgroundColor: "azure",
    padding: 10,
    marginVertical: 10
  },
  taskText: {
    textDecorationLine: 'none'
  },
  completedTaskText: {
    textDecorationLine: 'line-through',
  }
})