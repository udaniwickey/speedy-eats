import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import React from "react";
import { Divider } from "react-native-elements";

const foods = [
  {
    title: "Mushroom Hor Mok",
    description:
      "Red-curry paste lends earthy flavor and mellow heat to this savory baked coconut-milk custard studded with meaty sautéed mushrooms.",
    price: "$19.90",
    image:
      "https://static01.nyt.com/images/2017/04/05/dining/05COOKING-BROWNRICEBELLPEPPERS2/05COOKING-BROWNRICEBELLPEPPERS2-articleLarge.jpg",
  },
  {
    title: "BBQ River Prawns",
    description:
      "A local delicacy that everyone must try. A savoury eggplant dish, spicy, with a wonderful zest of flavour.",
    price: "$29.90",
    image:
      "https://www.unileverfoodsolutions.co.th/dam/global-ufs/mcos/SEA/calcmenu/recipes/TH-recipes/fish-&-other-seafood-dishes/%E0%B8%A2%E0%B8%B3%E0%B8%A1%E0%B8%B0%E0%B9%80%E0%B8%82%E0%B8%B7%E0%B8%AD%E0%B8%A2%E0%B8%B2%E0%B8%A7%E0%B8%81%E0%B8%B1%E0%B8%9A%E0%B8%81%E0%B8%B8%E0%B9%89%E0%B8%87%E0%B9%81%E0%B8%A1%E0%B9%88%E0%B8%99%E0%B9%89%E0%B8%B3/main-header.jpg",
  },
  {
    title: "Beef Noodle Soup Pho",
    description:
      "Pho (properly made) is a deeply spiced and aromatic soup of a clear broth and rice noodles, topped with different cuts and textures of meats and fresh herbs.",
    price: "$12.90",
    image:
      "https://iamafoodblog.b-cdn.net/wp-content/uploads/2017/11/authentic-instant-pot-pho-recipe-1959w.jpg",
  },
  {
    title: "Stir Fried Vermicelli",
    description:
      "Easy rice noodles recipe stir-fried with chicken, bean sprouts and scallion.",
    price: "$17.90",
    image:
      "https://rasamalaysia.com/wp-content/uploads/2021/02/fried-vermicelli3-730x1095.jpg",
  },
  {
    title: "Thai Omelette",
    description:
      "Thai food is becoming more readily available here in the UK. This recipe is both healthy and quick to make - a perfect way to start the day!",
    price: "$17.90",
    image:
      "https://www.kwoklynwan.com/_webedit/cached-images/257-0-0-3163-10000-6673-722.png",
  },
  {
    title: "Stir Fried Baby Kailan with Roasted Pork",
    description:
      "Kailan can be cooked in many ways, much prefer this version of stir fry.",
    price: "$19.90",
    image:
      "https://2.bp.blogspot.com/-W1bMIXF_qFA/WK_2hDIyidI/AAAAAAAAZBE/3swVsbUfdhEbmoMH7kAlIyW4DfYAV0K9ACLcB/s1600/15.jpg",
  },
];

const styles = StyleSheet.create({
  menuItemStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 20,
  },

  titleStyle: {
    fontSize: 19,
    fontWeight: "600",
  },
});

export default function MenuItems() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {foods.map((food, index) => (
        <View key={index}>
          <View style={styles.menuItemStyle}>
            <FoodInfo food={food} />
            <FoodImage food={food} />
          </View>
          <Divider width={0.5} orientation="vertical" />
        </View>
      ))}
    </ScrollView>
  );
}

const FoodInfo = (props) => (
  <View
    style={{
      width: 240,
      justifyContent: "space-evenly",
    }}
  >
    <Text style={styles.titleStyle}>{props.food.title}</Text>
    <Text>{props.food.description}</Text>
    <Text>{props.food.price}</Text>
  </View>
);

const FoodImage = (props) => (
    <View>
        <Image source={{ uri: props.food.image }}
               style={{
                  width: 100, 
                  height: 100,
                  borderRadius: 8
               }}    
        />
    </View>
);
