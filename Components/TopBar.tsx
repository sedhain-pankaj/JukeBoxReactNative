/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {TextInput, Image, View} from 'react-native';

function TopBar() {
  return (
    <View
      testID="TopBar"
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
      <Image
        source={require('../assets/icons/menu-bar.png')}
        style={{width: 50, height: 50}}
      />

      <View id="Search" style={{flexDirection: 'row', alignItems: 'center'}}>
        <TextInput
          style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 3,
            width: 200,
            borderRadius: 20,
            right: 0,
            shadowOpacity: 0.4,
            fontSize: 20,
            textAlign: 'center',
          }}
          placeholder="Search for Songs"
        />

        <Image
          source={require('../assets/icons/search.png')}
          style={{width: 50, height: 50}}
        />
      </View>

      {/* <Text style={{fontSize: 30, fontWeight: 'bold'}}>Search</Text> */}
    </View>
  );
}

export default TopBar;
