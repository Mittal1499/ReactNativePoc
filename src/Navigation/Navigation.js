import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SkeletonScreen from '../Screens/SkeletonScreen';
import RefreshPull from '../Screens/RefreshPull';
import RefreshPullAnimation from '../Screens/RefreshPullAnimation';

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SkeletonScreen" component={SkeletonScreen} />
        <Stack.Screen name="RefreshPull" component={RefreshPull} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
