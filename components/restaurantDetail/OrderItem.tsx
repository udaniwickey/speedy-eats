import {View, Text} from 'react-native';
import React from 'react';

export default function OrderItem({item}: any) {
  const {title, price} = item;
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#999',
      }}>
      <Text style={{fontWeight: '600', fontSize: 16, color: 'black'}}>
        {title}
      </Text>
      <Text style={{opacity: 0.7, fontSize: 16, color: 'black'}}>{price}</Text>
    </View>
  );
}
