import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// import screen names
import * as screenNames from './screenNames';

// import screens component
import MainScreen from '../screens/index/index';

const Stack = createStackNavigator();

export default function AppNavigator(props) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={screenNames.INDEX_SCREEN} component={MainScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}