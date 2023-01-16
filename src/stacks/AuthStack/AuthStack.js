import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
//Screens
// import AuthChallenge from './AuthChallenge';
import Login from '../../containers/Login/Login';
import Signup from '../../containers/Signup/Signup';

const Stack = createNativeStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{header: () => null}}
      initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
  );
}
