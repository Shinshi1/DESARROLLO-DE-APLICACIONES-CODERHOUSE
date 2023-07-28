import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import OrderItem from '../Components/OrderItem'
import OrderData from '../Data/orders.json';

const Order = () => {
  return (
    <View>
      <FlatList
        data={OrderData}
        keyExtractor={orderItem => orderItem.id}
        renderItem={({item}) => <OrderItem order={item}/>}

      />
    </View>
  )
}

export default Order

const styles = StyleSheet.create({})