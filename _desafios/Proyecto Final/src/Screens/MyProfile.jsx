import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import AddButton from '../Components/AddButton'
import { useSelector } from 'react-redux'
import { useGetProfileImageQuery } from '../Services/shopServices'

const MyProfile = ({ navigation }) => {
  const { localId, profileImage } = useSelector(state => state.userReducer.value)

  const {data: image} = useGetProfileImageQuery(localId)
  const cameraImage = image?.image

  const launchCamera = async () => {
    navigation.navigate('Image Selector')
  }
  const launchLocation = async () => {
    navigation.navigate('List Address')
  }

  return (
    <View style={styles.container}>
      <Image
        source={
          profileImage || cameraImage ?
            { uri: profileImage || cameraImage }
            : require('../assets/Images/defaultProfile.png')
        }
        style={styles.image}
        resizeMode='cover'
      />
      <AddButton onPress={launchCamera} title='Add profile picture' />
      <AddButton onPress={launchLocation} title='My address' />
    </View>
  )
}

export default MyProfile

const styles = StyleSheet.create({
  container: {
    padding: 10,
    gap: 15,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  }
})