import {createStore, applyMiddleware, compose} from 'redux';
import {persistStore, persistCombineReducers} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import createSagaMiddleware from 'redux-saga';

// import collection of reducers
import rootReducer from './reducers';

// import saga watchers
import sagas from './sagas';

// create the saga middleware
const middleware = [];
const sagaMiddleware = createSagaMiddleware();
middleware.push(sagaMiddleware);
const enhancers = [applyMiddleware(...middleware)];

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: [],
  whitelist: ['auth'],
  debug: true, //to get useful logging
};

const reducers = persistCombineReducers(persistConfig, rootReducer);

const config: any = {enhancers};

let store = createStore(reducers, undefined, compose(...enhancers));
let persistor = persistStore(store, config, () => {
  // console.log('store/index', store.getState());
});

// then run the saga
sagaMiddleware.run(sagas);

export default () => {
  return {store, persistor};
};
