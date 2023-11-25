import React, {useEffect, useReducer} from 'react';
import {actionCreators, initialState, reducer} from '../store/postsReducer';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {logger} from 'react-native-logs';

const log = logger.createLogger();

export default function List() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/posts',
        );
        const posts = await response.json();
        dispatch(actionCreators.success(posts));
      } catch (e) {
        dispatch(actionCreators.failure());
      }
    }
    fetchPosts();
  }, []);

  const {posts, loading, error} = state;
  log.info(1, posts);
  if (loading) {
    return (
      <View style={listStyles.center}>
        <ActivityIndicator animating={true} />
      </View>
    );
  }
  if (error) {
    return (
      <View style={listStyles.center}>
        <Text>Failed to load posts!</Text>
      </View>
    );
  }
  return (
    <FlatList
      style={listStyles.container}
      keyExtractor={post => post.id}
      data={posts}
      renderItem={({item: {id, title, body}, index}) => (
        <View key={id} style={listStyles.post}>
          <Text style={listStyles.title}>
            {index}, {title}
          </Text>
          <Text style={listStyles.body}>{body}</Text>
        </View>
      )}
    />
  );
}

const listStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1ACDA5',
  },
  post: {
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    paddingVertical: 20,
    paddingRight: 20,
    marginLeft: 20,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white',
  },
  body: {
    marginTop: 10,
    fontSize: 14,
    color: '#F8F8F8',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
