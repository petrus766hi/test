/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { LogBox } from 'react-native';
import Home from './src/page/Home';
import IconBack from './src/component/IconBack'
import IconFilter from './src/component/IconFilter'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
LogBox.ignoreAllLogs();


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Shoes" component={Home}  
        options={{
          
          headerLeft : props => <IconBack {...props} />,
          headerRight : props => <IconFilter {...props} />,
          headerStyle: {
            backgroundColor: '#F7F7F7',
          },
          headerTintColor: '#131B39',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 25,
          },
          headerShadowVisible: false,
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;
