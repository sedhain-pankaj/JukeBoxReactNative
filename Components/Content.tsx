/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Dimensions, ScrollView} from 'react-native';

function Content() {
  return (
    <ScrollView
      id="content_song"
      style={{
        width: getDeviceWidth() - 10,
        // height: fill the rest of the screen
        height: getDeviceHeight() / 2.1,
        alignSelf: 'center',
        borderRadius: 10,
        padding: 10,
        borderColor: 'black',
        borderWidth: 2,
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

export default Content;
