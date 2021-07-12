import React from 'react';
import SplashScreen from 'react-native-bootsplash';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './home';
import {LinkingOptions, NavigationContainer} from '@react-navigation/native';

const Stack = createStackNavigator();

function Root() {
  return (
    <NavigationContainer
      onReady={function () {
        SplashScreen.hide({fade: true});
      }}
      linking={linkingConfig}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Root;

const linkingConfig: LinkingOptions = {
  prefixes: [],
};
