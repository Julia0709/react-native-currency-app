import React, { Component } from 'react';
import * as firebase from 'firebase';
import { StackNavigator, TabNavigator } from 'react-navigation';

import { config } from '../config';
import Home from './components/Home';
import Settings from './components/Settings';
import Search from './components/Search';
import Login from './components/Login';

firebase.initializeApp(config);

const App = () => {
  <AppNavigator />;
};

const TabNavigation = TabNavigator({
  Home: { screen: Home },
  Settings: { screen: Settings },
  Search: { screen: Search },
});

const AppNavigator = StackNavigator({
  Login: { screen: Login },
  Home: { screen: TabNavigation },
});

export default App;
