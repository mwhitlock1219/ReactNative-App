import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from '../screens/HomeScreen';
import ProductCategoriesScreen from '../screens/ProductCategoriesScreen';
import AllProductsScreen from '../screens/AllProductsScreen';


//This file handles the Navigation of the app. When a new screen/view needs to be displayed one can add that
//view to this file. One can also add the logic for a tabBar Navigator here.
const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: true}}
        initialRouteName='Home'
      >
        <Stack.Screen name="Home"component={HomeScreen}/> 
        <Stack.Screen name="Product Categories" component={ProductCategoriesScreen}/>
        <Stack.Screen name="All Products" component={AllProductsScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
