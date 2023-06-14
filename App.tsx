import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Button from './src/Component/Button/Button';
import Navigation from './src/Navigation/Navigation';
import SkeletonScreen from './src/Screens/SkeletonScreen';
import RefreshPull from './src/Screens/RefreshPull';
import SkeletonScreenNormal from './src/Screens/SkeletonScreenNormal';
import RefreshPullAnimation from './src/Screens/RefreshPullAnimation';
import RefreshExample from './src/Screens/RefreshExample';
import ForwordMessage from './src/Screens/ForwordMessage';

export default function App({navigation}: any) {
  // const handlePress = () => {
  //   console.log('Button pressed!');
  // };

  return (
    <View>
      <ForwordMessage />
      {/* <RefreshExample /> */}
      {/* <RefreshPullAnimation /> */}
      {/* <SkeletonScreen /> */}
      {/* <SkeletonScreenNormal /> */}
      {/* <RefreshPull /> */}
      {/* <Navigation />
      <View
        style={{
          // flex: 1,
          justifyContent: 'space-evenly',
          alignItems: 'center',
          marginVertical: 50,
          height: 200,
        }}>
        <Button
          title="Skeleton Screen"
          onPress={() => navigation.navigate('SkeletonScreen')}
        />
        <Button
          title="RefreshPull Screen"
          onPress={() => navigation.navigate('RefreshPull')}
        />
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({});
