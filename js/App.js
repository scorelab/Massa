/* @flow */

import React from 'react';
import { Constants, ScreenOrientation , Permissions, Notifications} from 'expo';
ScreenOrientation.allow(ScreenOrientation.Orientation.ALL);

import {
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Text,
  StatusBar,
  View,
} from 'react-native';
import { SafeAreaView, StackNavigator } from 'react-navigation';

import Banner from './Banner';
import SimpleStack from './SimpleStack';
import SimpleTabs from './SimpleTabs';
import TabAnimations from './TabAnimations';

const ExampleRoutes = {
  SimpleStack: {
    name: 'Massa Login',
    description: 'Select to Login to Massa',
    screen: SimpleStack,
  }, TabAnimations: {
    name: 'Invite Friends',
    description: 'Click here to add friends to share downloads',
    screen: TabAnimations,
  },SimpleTabs: {
    name: 'Manage Friends and Downloads',
    description: 'To see invited friends and their download progress as well as chat with them',
    screen: SimpleTabs,
  }};

  
class MainScreen extends React.Component<*> {
  constructor(props) {
    super(props);
    
  }
   componentDidMount = () => {
    this.getGCMToken();
   }
  getGCMToken = async() => {
    const { status: existingStatus } = await Permissions.getAsync(
      Permissions.NOTIFICATIONS
    );
    let finalStatus = existingStatus;
  
    // only ask if permissions have not already been determined, because
    // iOS won't necessarily prompt the user a second time.
    if (existingStatus !== "granted") {
      // Android remote notification permissions are granted during the app
      // install, so this will only ask on iOS
      const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      finalStatus = status;
    }
  
    // Stop here if the user did not grant permissions
    if (finalStatus !== "granted") {
      return;
    }
  
    // Get the token that uniquely identifies this device
    let token = await Notifications.getExpoPushTokenAsync();
    
  }
  render() {
    const { navigation } = this.props;

    return (
      
      <View style={{ flex: 1 }}>
      <StatusBar hidden />
        <ScrollView style={{ flex: 1 }}>
          <Banner />
          {Object.keys(ExampleRoutes).map((routeName: string) => (
            <TouchableOpacity
              key={routeName}
              onPress={() => {
                const { path, params, screen } = ExampleRoutes[routeName];
                const { router } = screen;
                const action =
                  path && router.getActionForPathAndParams(path, params);
                navigation.navigate(routeName, {}, action);
              }}
            >
              <SafeAreaView
                style={styles.itemContainer}
                forceInset={{ vertical: 'never' }}
              >
                <View style={styles.item}>
                  <Text style={styles.title}>
                    {ExampleRoutes[routeName].name}
                  </Text>
                  <Text style={styles.description}>
                    {ExampleRoutes[routeName].description}
                  </Text>
                </View>
              </SafeAreaView>
            </TouchableOpacity>
          ))}
        </ScrollView>
        <StatusBar barStyle="light-content" />
        <View style={styles.statusBarUnderlay} />
      </View>
    );
  }
}

const AppNavigator = StackNavigator(
  {
    ...ExampleRoutes,
    Index: {
      screen: MainScreen,
    },
  },
  {
    initialRouteName: 'Index',
    headerMode: 'none',

    /*
   * Use modal on iOS because the card mode comes from the right,
   * which conflicts with the drawer example gesture
   */
    mode: Platform.OS === 'ios' ? 'modal' : 'card',
  }
);

export default () => <AppNavigator />;

const styles = StyleSheet.create({
  item: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  itemContainer: {
    backgroundColor: '#fff',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#ddd',
  },
  image: {
    width: 120,
    height: 120,
    alignSelf: 'center',
    marginBottom: 20,
    resizeMode: 'contain',
  },
  statusBarUnderlay: {
    backgroundColor: '#673ab7',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: Constants.statusBarHeight,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#444',
  },
  description: {
    fontSize: 13,
    color: '#999',
  },
});
