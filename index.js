/**
 * @format
 */
 import * as React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {Store, Persistor} from './src/store/store';

export default function Main() {
    return (
      <Provider store={Store}>
        <PersistGate loading={null} persistor={Persistor}>
        <App />
        </PersistGate>
      </Provider>
    );
}

AppRegistry.registerComponent(appName, () => Main);
