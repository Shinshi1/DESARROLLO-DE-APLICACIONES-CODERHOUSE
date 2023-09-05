import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { useSelector } from 'react-redux';

import OrderItem from '../Components/OrderItem'
import { useGetOrdersQuery } from '../Services/shopServices';


const Order = () => {
  const {data: OrderData, isLoading, isError } = useGetOrdersQuery()
  // const OrderData = useSelector(state => state.orderReducer.value.Orders)

  // console.log(OrderData)
  const ordersArray = Object.values(OrderData)
  // console.log('ordersArray', ordersArray)

  return (
    <View>
      <FlatList
        data={ordersArray}
        keyExtractor={orderItem => Object.values(orderItem)}
        renderItem={({ item }) => <OrderItem order={item} />}

      />
    </View>
  )
}

export default Order

const styles = StyleSheet.create({})