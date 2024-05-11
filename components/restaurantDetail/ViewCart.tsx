import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';

export default function ViewCart() {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.layoutContainer}>
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.textContainer}>ViewCart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 20,
    backgroundColor: 'black',
    alignItems: 'center',
    padding: 13,
    borderRadius: 30,
    width: 300,
    position: 'relative',
  },
  textContainer: {
    color: 'white',
    fontSize: 20,
  },
  mainContainer: {
    flex: 1,
    alignItems: 'center',
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
});
