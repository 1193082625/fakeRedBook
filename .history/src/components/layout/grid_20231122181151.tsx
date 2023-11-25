import React from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  SectionList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

// 获取屏幕宽高
const {width} = Dimensions.get('window');
const numColumns = 4;

const GridkeyExtractor = (item: any) => {
  return item.key;
};

const GridListHeaderComponent = () => {
  return (
    <TouchableOpacity activeOpacity={0.7} style={gridStyles.header}>
      <View style={gridStyles.headerUser}>
        <Image
          source={require('../../assets/images/photo.jpg')}
          style={{width: 50, height: 50}}
        />
        <Text style={{marginHorizontal: 10}}>百思不得姐</Text>
        <Image
          source={require('../../assets/images/photo.jpg')}
          style={{width: 36, height: 15}}
        />
      </View>
      <Image
        source={require('../../assets/images/photo.jpg')}
        style={{width: 7, height: 2}}
      />
    </TouchableOpacity>
  );
};

const renderItem = ({item}) => {
  return (
    <TouchableOpacity activeOpacity={0.7} style={gridStyles.item}>
      <Image source={item.icon} style={gridStyles.itemImage} />
      <Text style={gridStyles.itemText}>{item.title}</Text>
    </TouchableOpacity>
  );
};

const renderSectionItem = ({section}) => {
  return (
    <FlatList
      data={section.data[0].content}
      numColumns={numColumns}
      renderItem={renderItem}
      style={{backgroundColor: '#fff'}}
      scrollEnabled={false}
    />
  );
};

const GridListFooterComponent = () => {
  return (
    <TouchableOpacity activeOpacity={0.7} style={gridStyles.footer}>
      <Text>好友动态</Text>
      <Image
        source={require('../../assets/images/photo.jpg')}
        style={{width: 7, height: 12}}
      />
    </TouchableOpacity>
  );
};

export default function Grid() {
  const data = [
    {
      content: [
        {icon: require('../../assets/images/photo.jpg'), title: '排行榜'},
        {icon: require('../../assets/images/photo.jpg'), title: '审帖'},
        {icon: require('../../assets/images/photo.jpg'), title: '漫画'},
        {icon: require('../../assets/images/photo.jpg'), title: '我的收藏'},
        {icon: require('../../assets/images/photo.jpg'), title: '附近'},
        {icon: require('../../assets/images/photo.jpg'), title: '随机穿越'},
        {icon: require('../../assets/images/photo.jpg'), title: '意见反馈'},
        {icon: require('../../assets/images/photo.jpg'), title: '更多'},
      ],
      key: 'content',
    },
  ];
  return (
    // <Text>grid</Text>
    // <SafeAreaView style={gridStyles.container}>
    <SectionList
      sections={[{data}]}
      renderItem={renderSectionItem}
      ListHeaderComponent={GridListHeaderComponent}
      ListFooterComponent={GridListFooterComponent}
      keyExtractor={GridkeyExtractor}
    />
    // </SafeAreaView>
  );
}

const gridStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 100,
    backgroundColor: '#fff',
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  headerUser: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  footer: {
    height: 50,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    marginTop: 10,
  },
  item: {
    backgroundColor: '#fff',
    width: width / numColumns,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemImage: {
    width: 40,
    height: 40,
    marginBottom: 5,
  },
  itemText: {
    fontSize: 12,
  },
});
