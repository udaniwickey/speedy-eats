import React from 'react';
import {View} from 'react-native';
import About from '../components/restaurantDetail/About';
import MenuItems from '../components/restaurantDetail/MenuItem';
import ViewCart from '../components/restaurantDetail/ViewCart';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';

type RootStackParamList = {
  RestaurantDetail: {name: string};
  About: {name: string};
  ViewCart: {name: string};
};

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'ViewCart'
>;

type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'RestaurantDetail'>;

// type props = {
//   navigation: ProfileScreenNavigationProp;
//   route: ProfileScreenRouteProp;
// };

export default function RestaurantDetail({route, navigation}: props) {
  return (
    <View>
      <About route={route} />
      <MenuItems />
      <ViewCart navigation={navigation} />
    </View>
  );
}