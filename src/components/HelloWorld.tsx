import React from 'react';
import {Button, Text, View} from 'react-native';
import Login from '../views/login/Login';

export default function HelloWorld({navigation}) {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Index"
        onPress={() =>
          navigation.navigate('Index', {
            id: 86,
            otherParam: 'anything you wangt',
          })
        }
      />
      <Button title="Go to List" onPress={() => navigation.navigate('List')} />
      <Login />
    </View>
  );
}
