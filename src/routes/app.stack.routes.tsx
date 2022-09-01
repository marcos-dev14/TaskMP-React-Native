import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Welcome } from '../screens/Welcome';
import { SignIn } from '../screens/SignIn';
import { SignUp } from '../screens/SignUp';
import { Confirmation } from '../screens/Confirmation';
import { Home } from '../screens/Home';
import { AppTabRoutes } from './app.tab.routes';

const { Navigator, Screen } = createStackNavigator();

export function AppStackRoutes() {
  return (
    <Navigator
      initialRouteName="welcome"
      screenOptions={{
        headerShown: false
      }}
    >
      <Screen 
        name="welcome"
        component={Welcome}
      />
      <Screen 
        name="signIn"
        component={SignIn}
      />
      <Screen 
        name="signUp"
        component={SignUp}
      />
      <Screen 
        name="confirmation"
        component={Confirmation}
      />
      <Screen 
        name="home"
        component={AppTabRoutes}
      />
    </Navigator>
  );
}