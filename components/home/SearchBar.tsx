import {StyleSheet, View, Text} from 'react-native';
import React from 'react';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function SearchBar() {
  return (
    <View style={styles.searchContainer}>
      <GooglePlacesAutocomplete
        placeholder={'Search'}
        query={{language: 'en'}} /** {key: ''} */
        styles={{
          textInput: {
            backgroundColor: '#eee',
            borderRadius: 20,
            fontWeight: '700',
            marginTop: 7,
          },
          textInputContainer: {
            backgroundColor: '#eee',
            borderRadius: 50,
            flexDirection: 'row',
            alignItems: 'center',
            marginRight: 10,
          },
        }}
        renderLeftButton={() => (
          <View style={styles.leftMargin}>
            <Ionicons name="location-sharp" size={24} color={'black'} />
          </View>
        )}
        renderRightButton={() => (
          <View style={styles.rightButtonContainer}>
            <AntDesign
              name="clockcircle"
              size={11}
              style={styles.rightMargin}
              color={'black'}
            />
            <Text>Search</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  searchContainer: {marginTop: 15, flexDirection: 'row'},
  rightButtonContainer: {
    flexDirection: 'row',
    marginRight: 8,
    backgroundColor: 'white',
    padding: 9,
    borderRadius: 30,
    alignItems: 'center',
  },
  leftMargin: {marginLeft: 10},
  rightMargin: {marginRight: 6},
});
