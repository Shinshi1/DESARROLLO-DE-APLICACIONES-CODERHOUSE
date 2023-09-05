import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useSelector } from 'react-redux'
import AddButton from '../Components/AddButton'
import AddressItem from '../Components/AddressItem'
import { font } from '../Global/theme'
import { useGetUserLocationQuery } from '../Services/shopServices'

const ListAddress = ({ navigation }) => {
  const { location, localId } = useSelector((state) => state.userReducer.value)
  const {data: userLocationQuery, isError, isLoading} = useGetUserLocationQuery(localId)

  return location?.latitude  || userLocationQuery ? (
    <AddressItem location={location.latitude ? location : userLocationQuery } navigation={navigation} />
  ) : (
    <View style={styles.container}>
      <Text style={styles.text}>No location set</Text>
      <AddButton
        title='Set location' 
        onPress={() => navigation.navigate('Location Selector')}
        />
    </View>
  )
}

export default ListAddress

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  text: {
    paddingVertical: 20,
    fontFamily: font.paragraphFont,
    fontSize: 18
  }
})