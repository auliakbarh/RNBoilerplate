import {createStore} from 'redux';
import {combineReducers} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

// import collection of reducers
import rootReducer from './reducers';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: [],
  whitelist: ['auth'],
  debug: true, //to get useful logging
};

const reducers = combineReducers(rootReducer);

const persistedReducer = persistReducer(persistConfig, reducers);

export default () => {
  let store = createStore(persistedReducer);
  let persistor = persistStore(store);
  return {store, persistor};
};
