import React from 'react';
import {View, FlatList, StyleSheet, Text, StatusBar} from 'react-native';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba1',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f632',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d723',
    title: 'Third Itemr',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba4',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f635',
    title: 'Second Itemr',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d726',
    title: 'Third Iteme',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad5dabb28ba7',
    title: 'First Itemw',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd9sa97f638',
    title: 'Second Iteme',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571d29d729',
    title: 'Third Item',
  },
];

const Item = ({title}: {title: string}) => {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default function ListCom() {
  const renderItem = ({item}: {item: {title: string}}) => (
    <Item title={item.title} />
  );

  return (
    <FlatList
      data={DATA}
      renderItem={renderItem}
      initialNumToRender={6}
      keyExtractor={item => item.id}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
