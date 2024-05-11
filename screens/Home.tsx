import {SafeAreaView, StyleSheet, View, ScrollView} from 'react-native';
import React from 'react';
import HeaderTabs from '../components/home/HeaderTabs';
import SearchBar from '../components/home/SearchBar';
import Categories from '../components/home/Categories';
import RestaurantItem from '../components/home/RestaurantItem';
import BottomTabs from '../components/home/BottomTabs';
import {StackNavigationProp} from '@react-navigation/stack';
import {Divider} from '@rneui/base';

type RootStackParamList = {
  Home: undefined;
};

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Home'
>;

type Props = {
  navigation: ProfileScreenNavigationProp;
};

export default function Home({navigation}: Props) {
  return (
    <SafeAreaView style={styles.homeContainer}>
      <View style={styles.homeSection}>
        <HeaderTabs />
        <SearchBar />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItem navigation={navigation} />
      </ScrollView>
      <Divider width={1} />
      <BottomTabs />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  homeContainer: {
    backgroundColor: '#eee',
    flex: 1,
  },
  homeSection: {
    backgroundColor: 'white',
    padding: 15,
  },
});
