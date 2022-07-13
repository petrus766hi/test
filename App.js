/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { LogBox, Image } from 'react-native';
import Login from './src/page/Login';
import List from './src/page/List';
import Dashboard from './src/page/Dashboard';
import IconBack from './src/component/IconBack'
import IconFilter from './src/component/IconFilter'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSelector } from 'react-redux';
import token from './src/config/token';



const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
LogBox.ignoreAllLogs();

function MyTabs() {
  return (
    <Tab.Navigator 
    initialRouteName='Dashboard'
    screenOptions={{
      headerShown: false,
      tabBarStyle:{
        backgroundColor:'#000000',
      }
    }}
    >
      <Tab.Screen 
        name='List' 
        component={List} 
        options= {{
          tabBarShowLabel: false,
          tabBarIcon : ({focused}) => 
            focused ? 
            (<Image source={require('./src/assets/grafikactive.png')} /> )
            :
            (<Image source={require('./src/assets/grafiknoactive.png')} /> )
          
        }}
      />
      <Tab.Screen 
        name='Dashboard' 
        component={Dashboard} 
        options= {{
          tabBarShowLabel: false,
          tabBarIcon : ({focused}) => 
            focused ? 
            (<Image source={require('./src/assets/dashboardactive.png')} /> )
            :
            (<Image source={require('./src/assets/dashboardnonactive.png')} /> )
          
        }}
      />
    </Tab.Navigator>
  );
}

const App = () => {
  const tokens = useSelector((state) => state.authReducer.userTokenInfo)
  return (
    <NavigationContainer>
      <Stack.Navigator 
      initialRouteName={'Login'}
        screenOptions={{
          headerShown: false
        }}
      >
      {tokens ?
        <Stack.Screen  name='Tabs' component={MyTabs}  />
        :  
        <Stack.Screen name='Login' component={Login}  />
      }
        
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;
