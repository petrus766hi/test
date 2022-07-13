import AsyncStorage from '@react-native-async-storage/async-storage';
import {applyMiddleware, legacy_createStore as createStore } from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import thunk from 'redux-thunk';
import rootReducer from './reducer';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    blacklist: [],
    whitelist: ['authReducer'],
  };
  
  const persistedReducer = persistReducer(persistConfig, rootReducer);
  
  const Store = createStore(persistedReducer, applyMiddleware(thunk));
  
  const Persistor = persistStore(Store);
  
  export {Store, Persistor};