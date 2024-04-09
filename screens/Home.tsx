import {SafeAreaView, StyleSheet, View, ScrollView} from 'react-native';
import React from 'react';
import HeaderTabs from '../components/HeaderTabs';
import SearchBar from '../components/SearchBar';
import Categories from '../components/Categories';
import RestaurantItem from '../components/RestaurantItem';

export default function Home() {
  return (
    <SafeAreaView style={styles.homeContainer}>
      <View style={styles.homeSection}>
        <HeaderTabs />
        <SearchBar />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItem />
      </ScrollView>
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
