import React, {useEffect, useReducer, useState} from 'react';
import {Button, Image, Text, TouchableOpacity, View} from 'react-native';
import {logger} from 'react-native-logs';
import {initialState, reducer} from '../../store/store';
import Radio from '../../components/forms/Radio';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import PopUp from '../../components/modals/PopUp';
import {pageStyles} from './login-style';

const log = logger.createLogger();
function Login({navigation}) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const [isSelect, setSelect] = useState(false);
  const [visible, setVisible] = useState(false);

  const {userInfo} = state;
  const fetchApi = async () => {
    try {
      // ip地址 112.10.207.249:3000
      // http://192.168.10.189:3000
      const res = await fetch('http://192.168.10.189:3000/list', {
        method: 'GET',
      }).then(response => response.json());
      log.info(1111, res);
    } catch (e) {
      log.error(2, e);
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);

  const loginHandler = () => {
    log.info(isSelect);
    if (!isSelect) {
      log.error('请阅读并同意一下条款');
      setVisible(true);
      return;
    }
    log.info('调起登录');
  };

  return (
    <SafeAreaProvider>
      <View style={pageStyles.page}>
        <Text style={pageStyles.help}>帮助</Text>
        <View style={pageStyles.header}>
          <Image
            style={pageStyles.logo}
            source={require('../../assets/images/logo.png')}
          />
          <Text style={pageStyles.headerTitle}>多喜乐，常安宁</Text>
        </View>
        <Image style={pageStyles.userPhoto} source={userInfo.photo} />
        <Text style={pageStyles.userName}>{userInfo.name}</Text>
        <TouchableOpacity style={pageStyles.loginBtn} activeOpacity={0.5}>
          <Button title="登录此账号" color="#fff" onPress={loginHandler} />
        </TouchableOpacity>
        <Text>其他登录方式 {'>'}</Text>
        <View style={pageStyles.instrBox}>
          <Radio
            selected={isSelect}
            selecteChanged={(status: boolean) => setSelect(status)}
            color={'#f00'}
            size={12}
          />
          <Text style={pageStyles.instrCont}>我已阅读并同意</Text>
          <Text
            style={pageStyles.instrLink}
            onPress={() => navigation.navigate('Instr')}>
            《用户协议》
          </Text>
        </View>
      </View>
      <PopUp visible={visible} onClose={() => setVisible(false)}>
        <View style={pageStyles.popupContent}>
          <Text style={pageStyles.subTitle}>请阅读并同意以下条款</Text>
          <View style={pageStyles.instrs}>
            <Text
              style={pageStyles.instrLink}
              onPress={() => {
                if (visible) {
                  setVisible(false);
                }
                navigation.navigate('Instr');
              }}>
              《用户协议》
            </Text>
          </View>
          <TouchableOpacity style={pageStyles.loginBtn} activeOpacity={0.5}>
            <Button
              title="同意并继续"
              color="#fff"
              onPress={() => {
                log.info('调起登录');
              }}
            />
          </TouchableOpacity>
        </View>
      </PopUp>
    </SafeAreaProvider>
  );
}

export default Login;
