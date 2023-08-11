import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { useSelector } from 'react-redux';

import OrderItem from '../Components/OrderItem'


const Order = () => {
  const OrderData = useSelector(state => state.orderReducer.value.Orders)

  return (
    <View>
      <FlatList
        data={OrderData}
        keyExtractor={orderItem => orderItem.id}
        renderItem={({ item }) => <OrderItem order={item} />}

      />
    </View>
  )
}

export default Order

const styles = StyleSheet.create({})