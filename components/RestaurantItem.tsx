import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface Restaurant {
  name: string;
  image_url: string;
  rating: number;
}

export const localRestaurants: Restaurant[] = [
  {
    name: 'Beachside Bar',
    image_url:
      'https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg',
    categories: ['Cafe', 'Bar'],
    price: '$$',
    reviews: 1244,
    rating: 4.5,
    city: 'San Francisco',
  },
  {
    name: 'Benihana',
    image_url:
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
    categories: ['Cafe', 'Bar'],
    price: '$$',
    reviews: 1244,
    rating: 3.7,
    city: 'California',
  },
  {
    name: "India's Grill",
    image_url:
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
    categories: ['Indian', 'Bar'],
    price: '$$',
    reviews: 700,
    rating: 4.9,
    city: 'San Francisco',
  },
];

interface RestaurantItemProps {}

const RestaurantItem: React.FC<RestaurantItemProps> = () => {
  return (
    <TouchableOpacity
      activeOpacity={1}
      style={styles.restaurantItemTouchableContainer}>
      {localRestaurants.map((restaurant, index) => (
        <View key={index} style={styles.restaurantItemContainer}>
          <RestaurantImage image={restaurant.image_url} />
          <RestaurantInfo name={restaurant.name} rating={restaurant.rating} />
        </View>
      ))}
    </TouchableOpacity>
  );
}

interface RestaurantImageProps {
  image: string;
}

const RestaurantImage: React.FC<RestaurantImageProps> = props => (
  <>
    <Image
      source={{
        uri: props.image,
      }}
      style={styles.restaurantImageContainer}
    />
    <TouchableOpacity style={styles.iconContainer}>
      <MaterialCommunityIcons name="heart-outline" size={25} color="#ffffff" />
    </TouchableOpacity>
  </>
);

interface RestaurantInfoProps {
  name: string;
  rating: number;
}

const RestaurantInfo: React.FC<RestaurantInfoProps> = props => (
  <View style={styles.restaurantInfoContainer}>
    <View>
      <Text style={styles.restaurantInfoNameContainer}>{props.name}</Text>
      <Text style={styles.restaurantInfoTimeContainer}>30-45 • min</Text>
    </View>
    <View style={styles.restaurantInfoRateContainer}>
      <Text>{props.rating}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  restaurantImageContainer: {width: '100%', height: 180},
  iconContainer: {position: 'absolute', right: 20, top: 20},
  restaurantInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  restaurantInfoNameContainer: {fontSize: 15, fontWeight: 'bold'},
  restaurantInfoTimeContainer: {fontSize: 13, color: 'grey'},
  restaurantInfoRateContainer: {
    backgroundColor: '#eee',
    height: 30,
    width: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },
  restaurantItemContainer: {
    marginTop: 10,
    padding: 15,
    backgroundColor: 'white',
  },
  restaurantItemTouchableContainer: {marginBottom: 30},
});

export default RestaurantItem;
