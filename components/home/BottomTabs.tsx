import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {StyleSheet} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function BottomTabs() {
  return (
    <View style={styles.bottomIconContainer}>
      <Icon icon="home" text="Home" />
      <Icon icon="search" text="Browse" />
      <Icon icon="shopping-bag" text="Grocery" />
      <Icon icon="receipt" text="Orders" />
      <Icon icon="user" text="Account" />
    </View>
  );
}

const Icon = (props: {icon: string; text: string}) => (
  <TouchableOpacity>
    <View>
      <FontAwesome5
        name={props.icon}
        color={'black'}
        size={25}
        style={styles.iconStyleContainer}
      />
      <Text style={{color: 'black'}}>{props.text}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  bottomIconContainer: {
    flexDirection: 'row',
    margin: 10,
    marginHorizontal: 30,
    justifyContent: 'space-between',
  },
  iconStyleContainer: {
    marginBottom: 3,
    alignSelf: 'center',
  },
});
