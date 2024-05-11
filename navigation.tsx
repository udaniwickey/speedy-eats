import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './screens/Home';
import RestaurantDetail from './screens/RestaurantDetail';

export default function RootNavigation() {
  type RootStackParamList = {
    Home: any;
    RestaurantDetail: {name: string};
  };

  const RootStack = createStackNavigator<RootStackParamList>();

  const screenOptions = {
    headerShown: false,
  };

  return (
    <NavigationContainer>
      <RootStack.Navigator
        initialRouteName="Home"
        screenOptions={screenOptions}>
        <RootStack.Screen name="Home" component={Home} />
        <RootStack.Screen
          name="RestaurantDetail"
          component={RestaurantDetail}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
