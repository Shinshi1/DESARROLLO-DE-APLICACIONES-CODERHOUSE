import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import AddButton from '../Components/AddButton'
// import * as ImagePicker from 'expo-image-picker'
import { useSelector } from 'react-redux'
import { useGetProfileImageQuery } from '../Services/shopServices'

const MyProfile = ({ navigation }) => {
  // const {profileImage, imageCamera} = useSelector(state => state.authReducer.value)

  const { localId, profileImage } = useSelector(state => state.userReducer.value)

  const {data: image} = useGetProfileImageQuery(localId)
  const cameraImage = image?.image

  const launchCamera = async () => {
    navigation.navigate('Image Selector')
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