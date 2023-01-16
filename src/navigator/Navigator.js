import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthStack from '../stacks/AuthStack';
import {useSelector} from 'react-redux';
import AppStack from '../stacks/AppStack/AppStack';

const Stack = createNativeStackNavigator();

export default function Navigator() {
  const user = useSelector(state => state.user);

  return (
    <Stack.Navigator screenOptions={{header: () => null}}>
      {user?.loggedIn ? (
        <Stack.Screen name="App" component={AppStack} />
      ) : (
        <Stack.Screen name="Auth" component={AuthStack} />
      )}
    </Stack.Navigator>
  );
}
