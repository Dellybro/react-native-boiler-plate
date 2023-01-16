import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
//Screens
import Main from '../../containers/Main/Main';
import Profile from '../../containers/Profile/Profile';
import Messages from '../../containers/Messages/Messages';

const Tab = createBottomTabNavigator();

export default function AppStack() {
  return (
    <Tab.Navigator initialRouteName="SignIn">
      <Tab.Screen name="Main" component={Main} />
      <Tab.Screen name="Messages" component={Messages} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
