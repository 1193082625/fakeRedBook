import React, {useEffect, useReducer} from 'react';
import {Button, Image, StyleSheet, Text, View} from 'react-native';
import {commonStyles} from '../assets/styles';
import {initialState, reducer, storeActions} from '../store/store';
import {logger} from 'react-native-logs';

const log = logger.createLogger();

export default function Loading({navigation}) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const {isAuthed} = state;
  useEffect(() => {
    log.info(isAuthed);
  }, [isAuthed]);
  setTimeout(() => {
    log.info('路由跳转');
    // navigation.replace('Index', {
    //   id: 86,
    //   otherParam: 'anything you wangt',
    // })
    isAuthed ? navigation.replace('Login') : navigation.replace('Login');
  }, 3000);
  return (
    <View style={commonStyles.bgColorWhite}>
      <View style={commonStyles.conCenter}>
        <Image
          source={require('../assets/images/logo.png')}
          style={loadStyles.img}
        />
        <Text style={loadStyles.title}>多喜</Text>
      </View>
    </View>
  );
}

const loadStyles = StyleSheet.create({
  img: {
    width: 120,
    height: 120,
    marginTop: -50,
  },
  title: {
    fontSize: 30,
    color: '#f00',
    fontWeight: '900',
    marginTop: 20,
  },
});
