import React, {useReducer} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Index from './src/views/Index';
import List from './src/views/List';
import Loading from './src/views/Loading';
import Login from './src/views/login/Login';
import {initialState, reducer} from './src/store/store';
import UserServiceInstr from './src/views/instructions/UserServiceInstr';
import Discover from './src/views/Discovert';

const Stack = createNativeStackNavigator();
function App(): JSX.Element {
  const [state] = useReducer(reducer, initialState);
  const {isAuthed} = state;

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Loading"
        screenOptions={{headerShown: false}}>
        {isAuthed ? (
          <>
            <Stack.Screen name="Loading" component={Loading} />
            <Stack.Screen name="Index" component={Index} />
            <Stack.Screen name="List" component={List} />
            <Stack.Screen name="Discover" component={Discover} />
          </>
        ) : (
          <>
            <Stack.Screen name="Loading" component={Loading} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Instr" component={UserServiceInstr} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
