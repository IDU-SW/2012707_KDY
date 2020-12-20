/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import MovieHomeScreen from "./MovieHomeScreen";
import MovieDetailScreen from "./MovieDetailScreen";
import MovieTicket from "./MovieTicket";

const movies = require('./movies');

const MoviesStack = createStackNavigator();

const MoviesNavigator = () => (
  <MoviesStack.Navigator>
      <MoviesStack.Screen name='Home' component={MovieHomeScreen} initialParams={movies}/>
  </MoviesStack.Navigator>
)
const MoviesNavigator2 = () => (
  <MoviesStack.Navigator>
      <MoviesStack.Screen name='Detail' component={MovieDetailScreen} initialParams={movies}/>
  </MoviesStack.Navigator>
)
const MoviesNavigator3 = () => (
  <MoviesStack.Navigator>
      <MoviesStack.Screen name='Ticket' component={MovieTicket} initialParams={movies}/>
  </MoviesStack.Navigator>
)
const Tab = createBottomTabNavigator();

const App = () => {
  let [favorite, setFavorite] = useState([]);
  return (
      <NavigationContainer>
          <Tab.Navigator>
                <Tab.Screen
                    name="Movies"
                    component={MoviesNavigator}
                />
                <Tab.Screen
                    name="Movie Detail"
                    component={MoviesNavigator2}
                />
                <Tab.Screen
                    name="Movie Ticket"
                    component={MoviesNavigator3}
                />
            </Tab.Navigator>
      </NavigationContainer>
  );
};

export default App;