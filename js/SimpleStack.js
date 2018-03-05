/**
 * @flow
 */

import React from 'react';
import { Button, ScrollView, StatusBar } from 'react-native';
import { StackNavigator, SafeAreaView } from 'react-navigation';
import SampleText from './SampleText';

const MyNavScreen = ({ navigation, banner }) => (
  <SafeAreaView>
    <SampleText>{banner}</SampleText>
    <Button
      onPress={() => navigation.navigate('Profile', { name: 'Jane' })}
      title="Go to a profile screen"
    />
    <Button
      onPress={() => navigation.navigate('Downloads', { name: 'Jane' })}
      title="Go to a Downloads screen"
    />
    <Button onPress={() => navigation.goBack(null)} title="Go back" />
    <StatusBar barStyle="default" />
  </SafeAreaView>
);

const MyHomeScreen = ({ navigation }) => (
  <MyNavScreen banner="Home Screen" navigation={navigation} />
);
MyHomeScreen.navigationOptions = {
  title: 'Welcome to Massa',
};

const MyDownloadsScreen = ({ navigation }) => (
  <MyNavScreen
    banner={`${navigation.state.params.name}'s Downloads`}
    navigation={navigation}
  />
);
MyDownloadsScreen.navigationOptions = {
  title: 'Downloads',
};

const MyProfileScreen = ({ navigation }) => (
  <MyNavScreen
    banner={`${navigation.state.params.mode === 'edit'
      ? 'Now Editing '
      : ''}${navigation.state.params.name}'s Profile`}
    navigation={navigation}
  />
);

MyProfileScreen.navigationOptions = props => {
  const { navigation } = props;
  const { state, setParams } = navigation;
  const { params } = state;
  return {
    headerTitle: `${params.name}'s Profile!`,
    // Render a button on the right side of the header.
    // When pressed switches the screen to edit mode.
    headerRight: (
      <Button
        title={params.mode === 'edit' ? 'Done' : 'Edit'}
        onPress={() =>
          setParams({ mode: params.mode === 'edit' ? '' : 'edit' })}
      />
    ),
  };
};

const SimpleStack = StackNavigator({
  Home: {
    screen: MyHomeScreen,
  },
  Profile: {
    path: 'people/:name',
    screen: MyProfileScreen,
  },
  Downloads: {
    path: 'Downloads/:name',
    screen: MyDownloadsScreen,
  },
});

export default SimpleStack;
