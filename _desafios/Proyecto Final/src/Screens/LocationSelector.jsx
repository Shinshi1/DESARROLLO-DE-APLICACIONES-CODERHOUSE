import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import * as Location from 'expo-location'

import AddButton from '../Components/AddButton'
import { useDispatch, useSelector } from 'react-redux'
import { setUserLocation } from '../Features/User/userSlice'
import { colors, font } from '../Global/theme'
import MapPreview from '../Components/MapPreview'
import { google_maps_api_key } from '../Database/firebaseConfig'
import { usePostUserLocationMutation } from '../Services/shopServices'


const LocationSelector = ({ navigation }) => {
  const [location, setLocation] = useState({ latitude: '', longitude: '' })
  const [error, setError] = useState('')

  const [address, setAddress] = useState(null)

  const [triggerPostUserLocation, resultPostUserLocation] = usePostUserLocationMutation()
  const { localId } = useSelector(state => state.userReducer.value)
  const dispatch = useDispatch()

  const onConfirmAddress = () => {

    const locationFormatted = {
      latitude: location.latitude,
      longitude: location.longitude,
      address
    }

    dispatch(setUserLocation(locationFormatted))

    triggerPostUserLocation({ location: locationFormatted, localId })

    navigation.goBack()
  }
  // Location requested on mount
  useEffect(() => {
    (async () => {
      try {
        let { status } = await Location.requestForegroundPermissionsAsync()
        if (status !== 'granted') {
          setError('Permission to access location was denied')
          return
        }

        let location = await Location.getCurrentPositionAsync({})
        setLocation({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        })

      } catch (error) {
        console.log(error.message)
        setError(error.message)
      }
    })()
  }, [])

  // Reverse geocoding

  useEffect(() => {
    (async () => {
      try {
        if (location.latitude) {
          const url_reverse_geocode = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.latitude},${location.longitude}&key=${google_maps_api_key}`
          const response = await fetch(url_reverse_geocode)
          const data = await response.json()
          console.dir(data)
          setAddress(data.results[0].formatted_address)
        }
      } catch (error) {
        setError(error.message)
      }
    })()
  }, [location])

  return (
    <View style={styles.container}>
      <Text style={styles.text}>My Address</Text>
      {/* Flatlist con las directions */}
      {location ? (
        <>
          <Text style={styles.text}> Lat: {location.latitude}, long: {location.longitude}.</Text>
          <MapPreview location={location} />
          <Text style={styles.address}>
            Formatted address: {address}
          </Text>
          <AddButton
            onPress={onConfirmAddress}
            title='Confirm address'
          />
        </>
      ) : (
        <>
          <View style={styles.noLocationContainer}>
            <Text>{error}</Text>
          </View>
        </>
      )}
    </View>
  )
}

export default LocationSelector

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  text: {
    paddingTop: 20,
    fontFamily: font.paragraphFont,
    fontSize: 18
  },
  noLocationContainer: {
    width: 200,
    height: 200,
    borderWidth: 2,
    borderColor: colors.tertiary,
    padding: 10,
    justifyContent: 'center',
    alignContent: 'center',
  },
  address: {
    padding: 10,
    fontFamily: font.navFont,
    fontSize: 16,
  },
})