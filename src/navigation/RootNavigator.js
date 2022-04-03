import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

// constants
import screenRouteName from '../constants/RouteName';
import HomeListingScreen from '../screens/HomeStack/Stack/HomeListingScreen';

const Stack = createNativeStackNavigator();

const RootNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName={screenRouteName.ALL_PRODUCTS}>
      <Stack.Screen
        name={screenRouteName.HOME_LISTING}
        component={HomeListingScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default RootNavigator;
