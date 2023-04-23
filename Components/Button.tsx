/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Button, Platform, Text, Alert} from 'react-native';

function Content() {
  return (
    <View
      id="content_title"
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: Platform.OS === 'android' ? 10 : 5,
      }}>
      <Button
        title="Songs Category"
        onPress={() => {
          Alert.alert('Songs Category');
        }}
        color="#0f9171"
      />

      <Text> ||| </Text>

      <Button
        title="Queued Songs"
        onPress={() => {
          Alert.alert('Queued Songs');
        }}
        color="#4100f4"
      />
    </View>
  );
}

export default Content;
