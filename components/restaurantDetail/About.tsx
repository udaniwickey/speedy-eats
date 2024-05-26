import {View, Text, Image} from 'react-native';
import React from 'react';
import {StyleSheet} from 'react-native';

const restaurantInfo = {
  name: 'Black Bowl Thai Cuisine',
  image:
    'https://images.unsplash.com/photo-1571115177229-7fe05d608e77?q=80&w=1665&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  price: '$$',
  reviews: 1500,
  rating: 4.5,
  categories: [{title: 'Thai'}, {title: 'Comfort Food'}],
};

export default function About(props: any) {
  const {name, image, price, reviews, rating, categories} = props.route.params;

  const formattedCategories = categories
    .map((cat: string) => cat.title)
    .join(' • ');

  const description = `${formattedCategories} ${
    price ? ' • ' + price : ''
  } • 🎫 • ${rating} ⭐ (${reviews}+)`;
  return (
    <View>
      <RestaurantImage image={image} />
      <RestaurantName name={name} />
      <RestaurantDescription description={description} />
    </View>
  );
}

const RestaurantImage = (props: {image: string}) => (
  <Image source={{uri: props.image}} style={styles.imageAboutContainer} />
);

const RestaurantName = (props: {name: string}) => (
  <Text style={styles.titleAboutContainer}>{props.name}</Text>
);

const RestaurantDescription = (props: {description: string}) => (
  <Text style={styles.descriptionAboutContainer}>{props.description}</Text>
);

const styles = StyleSheet.create({
  imageAboutContainer: {
    width: '100%',
    height: 180,
  },
  titleAboutContainer: {
    fontSize: 29,
    fontWeight: '600',
    marginTop: 10,
    marginHorizontal: 15,
    color: 'black',
  },
  descriptionAboutContainer: {
    marginTop: 10,
    marginHorizontal: 15,
    fontWeight: '400',
    fontSize: 15.5,
    color: 'black',
  },
});
