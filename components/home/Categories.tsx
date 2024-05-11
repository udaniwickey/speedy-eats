import {
  View,
  Image,
  StyleSheet,
  ImageSourcePropType,
  Text,
  ScrollView,
} from 'react-native';
import React from 'react';

interface Item {
  image: ImageSourcePropType;
  text: string;
}

const items: Item[] = [
  {
    image: require('../../assets/images/shopping-bag.png'),
    text: 'Pick-up',
  },
  {
    image: require('../../assets/images/soft-drink.png'),
    text: 'Soft Drinks',
  },
  {
    image: require('../../assets/images/bread.png'),
    text: 'Bakery Items',
  },
  {
    image: require('../../assets/images/food-truck.png'),
    text: 'Fast Foods',
  },
  {
    image: require('../../assets/images/hot-deal.png'),
    text: 'Deals',
  },
  {
    image: require('../../assets/images/coffee.png'),
    text: 'Coffee & Tea',
  },
  {
    image: require('../../assets/images/cake.png'),
    text: 'Desserts',
  },
];

const Categories: React.FC = () => {
  return (
    <View style={styles.viewStripeContainer}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {items.map((item, index) => (
          <View key={index} style={styles.viewBoxContainer}>
            <Image source={item.image} style={styles.imageContainer} />
            <Text style={styles.textContainer}>{item.text}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {width: 50, height: 40, resizeMode: 'contain'},
  textContainer: {fontSize: 13, fontWeight: '900', color: 'black'},
  viewBoxContainer: {alignItems: 'center', marginRight: 30},
  viewStripeContainer: {
    marginTop: 5,
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingLeft: 20,
  },
});

export default Categories;
