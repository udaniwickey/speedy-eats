import {Divider} from '@rneui/base';
import React from 'react';
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {useDispatch, useSelector} from 'react-redux';

type Food = {
  title: string;
  description: string;
  price: string;
  image: string;
};

type MenuItemProps = {
  restaurantName: string;
  foods: Food[];
  hideCheckbox?: boolean;
  marginLeft?: number;
};

export default function MenuItem({
  restaurantName,
  foods,
  hideCheckbox,
  marginLeft,
}: MenuItemProps) {
  const dispatch = useDispatch();

  const selectItem = (item: Food, checkboxValue: boolean) =>
    dispatch({
      type: 'ADD_TO_CART',
      payload: {
        ...item,
        restaurantName: restaurantName,
        checkboxValue: checkboxValue,
      },
    });

  const cartItems = useSelector(
    (state: any) => state.cartReducer.selectedItems.items,
  );

  const isFoodInCart = (food: Food, cartItems: Food[]) =>
    Boolean(cartItems.find((item: Food) => item.title === food.title));

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {foods.map((food, index) => (
        <View key={index}>
          <View style={styles.menuItemContainer}>
            {hideCheckbox ? (
              <></>
            ) : (
              <BouncyCheckbox
                iconStyle={styles.checkBoxContainer}
                fillColor="green"
                onPress={(checkboxValue: boolean) =>
                  selectItem(food, checkboxValue)
                }
                isChecked={isFoodInCart(food, cartItems)}
              />
            )}
            <FoodInfo food={food} />
            <FoodImage food={food} marginLeft={marginLeft ? marginLeft : 0} />
          </View>
          <Divider
            width={0.5}
            orientation="vertical"
            style={{marginHorizontal: 20}}
          />
        </View>
      ))}
    </ScrollView>
  );
}

const FoodInfo = ({food}: {food: Food}) => (
  <View style={styles.infoContainer}>
    <Text style={styles.titleContainer}>{food.title}</Text>
    <Text>{food.description}</Text>
    <Text>{food.price}</Text>
  </View>
);

const FoodImage = ({food, marginLeft}: {food: Food; marginLeft: number}) => (
  <View>
    <Image
      source={{uri: food.image}}
      style={{width: 100, height: 100, borderRadius: 8, marginLeft: marginLeft}}
    />
  </View>
);

const styles = StyleSheet.create({
  menuItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
  },
  infoContainer: {
    width: 240,
    justifyContent: 'space-evenly',
  },
  titleContainer: {
    fontSize: 19,
    fontWeight: '600',
    color: 'black',
  },
  foodImageContainer: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  checkBoxContainer: {
    borderColor: 'lightgray',
    borderRadius: 0,
  },
});
