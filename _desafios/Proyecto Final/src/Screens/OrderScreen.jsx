import React from 'react'
import { FlatList, View } from 'react-native'
import { useSelector } from 'react-redux';

import OrderItem from '../Components/OrderItem'
import { useGetOrdersQuery } from '../Services/shopServices';


const Order = () => {
  const { data: OrderData, isLoading, isError } = useGetOrdersQuery()
  // const OrderData = useSelector(state => state.orderReducer.value.Orders)
  console.log('OrderDB', OrderData)
  const orders = Object.values(OrderData)

  //   if (isLoading || !isError && !Object.values(OrderData))  <View style={styles.loading}>Loading...</View>


  return (
    <View>
      <FlatList
        data={orders}
        keyExtractor={orderItem => orderItem.id}
        renderItem={({ item }) => <OrderItem order={item} />}

      />
    </View>
  )
}

export default Order
