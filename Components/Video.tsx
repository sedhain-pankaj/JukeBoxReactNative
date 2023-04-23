/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Dimensions, View} from 'react-native';

function Video() {
  return (
    <View
      style={{
        backgroundColor: 'black',
        width: getDeviceWidth() - 15,
        height: getDeviceHeight() / 3,
        alignSelf: 'center',
        borderRadius: 10,
      }}
    />
  );
}

function getDeviceWidth() {
  return Dimensions.get('window').width;
}

function getDeviceHeight() {
  return Dimensions.get('window').height;
}

export default Video;
