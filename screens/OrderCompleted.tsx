import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {SafeAreaView} from 'react-native-safe-area-context';
import LottieView from 'lottie-react-native';
import firestore from '@react-native-firebase/firestore';
import MenuItem from '../components/restaurantDetail/MenuItem';
import {ScrollView} from 'react-native-gesture-handler';

export default function OrderCompleted() {
  const [lastOrder, setLastOrder] = useState({
    items: [
      {
        title: 'BBQ River Prawns',
        description:
          'A local delicacy that everyone must try. A savoury eggplant dish, spicy, with a wonderful zest of flavour.',
        price: '$29.90',
        image:
          'https://www.unileverfoodsolutions.co.th/dam/global-ufs/mcos/SEA/calcmenu/recipes/TH-recipes/fish-&-other-seafood-dishes/%E0%B8%A2%E0%B8%B3%E0%B8%A1%E0%B8%B0%E0%B9%80%E0%B8%82%E0%B8%B7%E0%B8%AD%E0%B8%A2%E0%B8%B2%E0%B8%A7%E0%B8%81%E0%B8%B1%E0%B8%9A%E0%B8%81%E0%B8%B8%E0%B9%89%E0%B8%87%E0%B9%81%E0%B8%A1%E0%B9%88%E0%B8%99%E0%B9%89%E0%B8%B3/main-header.jpg',
      },
    ],
  });
  const {items, restaurantName} = useSelector(
    (state: any) => state.cartReducer.selectedItems,
  );
  const total = items
    .map((item: {price: string}) => Number(item.price.replace('$', '')))
    .reduce((prev: number, curr: number) => prev + curr, 0);

  const totalUSD = total.toLocaleString('en', {
    style: 'currency',
    currency: 'USD',
  });

  useEffect(() => {
    const unsubsribe = firestore()
      .collection('orders')
      .orderBy('createdAt', 'desc')
      .limit(1)
      .onSnapshot(snapshot => {
        snapshot.docs.map((doc: any) => {
          setLastOrder(doc.data());
        });
      });

    return () => unsubsribe();
  }, []);

  return (
    <SafeAreaView style={styles.mainContainer}>
      {/* green checkmark */}
      <View style={{margin: 15, alignItems: 'center', height: '100%'}}>
        <LottieView
          style={styles.animationCheckBoxContainer}
          source={require('../assets/animations/check-mark.json')}
          autoPlay
          speed={0.5}
          loop={false}
        />
        <Text style={styles.textContainer}>
          Your order at {restaurantName} has been placed for {totalUSD}
        </Text>
        <ScrollView>
          <MenuItem
            foods={lastOrder.items}
            hideCheckbox={true}
            restaurantName={''}
            marginLeft={10}
          />
          <LottieView
            style={styles.animationCookingContainer}
            source={require('../assets/animations/cooking.json')}
            autoPlay
            speed={0.5}
            loop={false}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {flex: 1, backgroundColor: 'white'},
  textContainer: {color: 'black', fontSize: 20, fontWeight: '700'},
  animationCheckBoxContainer: {
    height: 100,
    alignSelf: 'center',
    marginBottom: 30,
  },
  animationCookingContainer: {
    height: 100,
    alignSelf: 'center',
  },
});
