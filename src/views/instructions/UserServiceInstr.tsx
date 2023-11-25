import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {commonStyles} from '../../assets/styles';

export default function UserServiceInstr() {
  return (
    <View style={[commonStyles.bgColorWhite, pageStyles.content]}>
      <Text style={pageStyles.title}>多喜用户服务协议</Text>
      <Text style={pageStyles.time}>更新日期：2023年07月15日</Text>
      <Text style={pageStyles.time}>生效日期：2023年07月22日</Text>
      <Text style={pageStyles.subTitle}>特别提示</Text>
      <Text style={pageStyles.textSty}>
        {'\t'}
        欢迎使用多喜平台。请您务必审慎阅读、充分理解一下内容，特别是免除或限制本平台责任的条款、对用户权利进行限制的条款、约定法律适用与管辖的条款等。
      </Text>
      <Text style={pageStyles.textSty}>
        {'\t'}
        如您未满18周岁，或存在其他不具备与用户行为相适应的民事行为能力的情形，请您在法定监护人的陪同、指导下阅读本协议。
      </Text>
    </View>
  );
}

const pageStyles = StyleSheet.create({
  content: {
    padding: 24,
  },
  title: {
    fontSize: 26,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 20,
  },
  time: {
    fontWeight: '500',
    marginTop: 15,
  },
  subTitle: {
    fontSize: 18,
    fontWeight: '500',
    marginTop: 25,
  },
  textSty: {
    lineHeight: 24,
    marginTop: 20,
  },
});
