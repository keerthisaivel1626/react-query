import React from 'react'
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Parent from '../screens/Parent';
import Home from '../screens/Home';
const Stack = createStackNavigator();
const RootNavigation = props => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Parent" component={Parent} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigation