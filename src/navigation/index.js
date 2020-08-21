import React from 'react';
import {ActivityIndicator} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

// import store
import configureStore from '../store';
const {persistor, store} = configureStore();

// import screen names
import * as screenNames from './screenNames';

// import screens component
import MainScreen from '../screens/index/index';

const Stack = createStackNavigator();

export default function AppNavigator(props) {
  return (
    <Provider store={store}>
      <PersistGate loading={<ActivityIndicator />} persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name={screenNames.INDEX_SCREEN}
              component={MainScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
