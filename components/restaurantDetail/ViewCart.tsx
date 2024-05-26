import {View, Text, TouchableOpacity, StyleSheet, Modal} from 'react-native';
import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import OrderItem from './OrderItem';
import firestore from '@react-native-firebase/firestore';
import LottieView from 'lottie-react-native';

export default function ViewCart({navigation}: any) {
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);

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

  const addOrderToFireBase = () => {
    setLoading(true);
    firestore()
      .collection('orders')
      .add({
        items: items,
        restaurantName: restaurantName,
        createdAt: firestore.FieldValue.serverTimestamp(),
      })
      .then(() => {
        setTimeout(() => {
          setLoading(false);
          navigation.navigate('OrderCompleted');
        }, 2500);
      });
  };

  const checkoutModalContent = () => {
    return (
      <>
        <View style={styles.modalContainer}>
          <View style={styles.modalCheckoutContainer}>
            <Text style={styles.restaurantName}>{restaurantName}</Text>
            {items.map((item: string, index: number) => (
              <OrderItem key={index} item={item} />
            ))}
            <View style={styles.subtotalContainer}>
              <Text style={styles.subtotalText}>Subtotal</Text>
              <Text>{totalUSD}</Text>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
              <TouchableOpacity
                style={{
                  marginTop: 20,
                  backgroundColor: 'black',
                  alignItems: 'center',
                  padding: 13,
                  borderRadius: 30,
                  width: 300,
                  position: 'relative',
                }}
                onPress={() => {
                  addOrderToFireBase();
                  setModalVisible(false);
                }}>
                <Text style={{color: 'white', fontSize: 20}}>Checkout</Text>
                <Text
                  style={{
                    position: 'absolute',
                    right: 20,
                    color: 'white',
                    fontSize: 15,
                    top: 17,
                  }}>
                  {total ? totalUSD : ''}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </>
    );
  };

  return (
    <>
      <Modal
        animationType="slide"
        visible={modalVisible}
        transparent={true}
        onRequestClose={() => setModalVisible(false)}>
        {checkoutModalContent()}
      </Modal>
      {total ? (
        <View style={styles.mainContainer}>
          <View style={styles.layoutContainer}>
            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={() => setModalVisible(true)}>
              <Text style={styles.textContainer}>View Cart</Text>
              <Text style={{color: 'white', fontSize: 20}}>{totalUSD}</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <></>
      )}
      {loading ? (
        <View
          style={{
            backgroundColor: 'black',
            position: 'absolute',
            opacity: 0.6,
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            width: '100%',
          }}>
          <LottieView
            style={{height: 200}}
            source={require('../../assets/animations/scanner.json')}
            autoPlay
            speed={3}
          />
        </View>
      ) : (
        <></>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 20,
    backgroundColor: 'black',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 15,
    borderRadius: 30,
    width: 300,
    position: 'relative',
  },
  textContainer: {
    color: 'white',
    fontSize: 20,
    marginRight: 30,
  },
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    position: 'absolute',
    bottom: 130,
    zIndex: 999,
  },
  layoutContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  modalCheckoutContainer: {
    backgroundColor: 'white',
    padding: 16,
    height: 500,
    borderWidth: 1,
  },
  restaurantName: {
    textAlign: 'center',
    fontWeight: '600',
    color: 'black',
    fontSize: 18,
    marginBottom: 10,
  },
  subtotalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  subtotalText: {
    textAlign: 'left',
    fontWeight: '600',
    fontSize: 15,
    marginBottom: 10,
    color: 'black',
  },
});
