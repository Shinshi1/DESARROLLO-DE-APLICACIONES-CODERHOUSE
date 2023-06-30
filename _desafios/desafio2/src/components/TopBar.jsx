import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const TopBar = () => {
  return (
    <View style={styles.view1} >
      <Text style={styles.titleText}>TaskList APP</Text>
    </View>
  )
}

export default TopBar

const styles = StyleSheet.create({
  view1: {
    flex: 1.5,
    paddingVertical: 20,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "azure",
    width: '100%'
  },
  titleText: {
    fontSize: 45,
    fontWeight: 'bold',
  }
})