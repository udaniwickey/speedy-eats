import {View, Text, Image} from 'react-native';
import React from 'react';
import {StyleSheet} from 'react-native';
import {ImageProps} from 'react-native';

interface AboutProps {}

const image =
  'https://images.unsplash.com/photo-1571115177229-7fe05d608e77?q=80&w=1665&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

const title = 'Black Bowl Thai Cuisine';
const description = 'Thai • Comfort Food • $$ • 🎫 • 4 ⭐️ (2913+)';

const About: React.FC<AboutProps> = () => {
  return (
    <View>
      <RestaurantImage image={image} />
      <RestaurantTitle title={title} />
      <RestaurantDescription description={description} />
    </View>
  );
};

interface RestaurantImageProps extends ImageProps {
  image: string;
}

const RestaurantImage: React.FC<RestaurantImageProps> = props => (
  <Image source={{uri: props.image}} style={styles.imageAboutContainer} />
);

const RestaurantTitle: React.FC<{title: string}> = props => (
  <Text style={styles.titleAboutContainer}>{props.title}</Text>
);

const RestaurantDescription: React.FC<{description: string}> = props => (
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
  },
  descriptionAboutContainer: {
    marginTop: 10,
    marginHorizontal: 15,
    fontWeight: '400',
    fontSize: 15.5,
  },
});

export default About;
