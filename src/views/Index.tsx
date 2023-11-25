import React from 'react';
import {Text, View} from 'react-native';
import {commonStyles} from '../assets/styles';

export default function Index({route, navigation}): JSX.Element {
  const {id, otherParam} = route.params;
  return (
    <View style={commonStyles.conCenter}>
      <Text>我是主页</Text>
      <Text>
        我是路由参数id: {id}, otherParam: {otherParam}
      </Text>
    </View>
  );
}
