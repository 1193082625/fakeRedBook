import React, {PureComponent} from 'react';
import {RefreshControl, ScrollView, StyleSheet, Text, View} from 'react-native';
import WaterfallList, {WaterfallListProps} from './WaterFallList';
import {logger} from 'react-native-logs';

type IData = {
  id: string;
  height: number;
  color: string;
};

const COLORS = ['green', 'blue', 'red'];
const DATA: Array<IData> = Array.from({length: 200}).map((_, i) => ({
  id: `item_${i}`,
  height: Math.round(Math.random() * 100 + 50),
  color: COLORS[i % COLORS.length],
}));

class Waterfall extends React.Component {
  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.state = {
      isRefreshing: false,
    };
  }

  _refreshRequest = () => {
    this.setState({isRefreshing: true});
    setTimeout(() => {
      this.setState({isRefreshing: false});
    }, 1000);
  };

  render() {
    return (
      <View>
        <WaterfallList<IData>
          onRefresh={this._refreshRequest}
          refreshing={(this.state as any).isRefreshing}
          data={DATA}
          renderItem={({item}: any) => <Cell item={item} />}
          getHeightForItem={({item}) => item.height + 2}
          numColumns={3}
          keyExtractor={item => item.id}
          renderScrollComponent={(props: WaterfallListProps) => {
            if (props.onRefresh && props.refreshing != null) {
              return (
                <ScrollView
                  {...props}
                  nestedScrollEnabled
                  refreshControl={
                    <RefreshControl
                      refreshing={props.refreshing}
                      onRefresh={props.onRefresh}
                    />
                  }
                />
              );
            }
            return <ScrollView {...props} />;
          }}
        />
      </View>
    );
  }
}

export default Waterfall;

const log = logger.createLogger();
class Cell extends PureComponent<{
  item: {id: string; height: number; color: string};
}> {
  render() {
    const {item} = this.props;
    log.info(item);
    return (
      <View
        style={[
          styles.cell,
          {height: item.height, backgroundColor: item.color},
        ]}>
        <Text>{item.id}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cell: {
    margin: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
