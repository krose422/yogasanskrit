/**
 * @providesModule DrawerStack
 */

import React from 'react';
import { StyleSheet, View, TouchableOpacity, Dimensions, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import { DrawerNavigator, DrawerItems } from 'react-navigation';

import MainStack from 'MainStack';

const contentComponent = (props) => (
  <View>
    <TouchableOpacity
      activeOpacity={.8}
      onPress={() => props.navigation.navigate('StyleguideScreen')}>
      <Text>Styleguide</Text>
      </TouchableOpacity>
  </View>
);

const DrawerStack = DrawerNavigator({
  Home: {
    screen: MainStack
  }
},
{
  drawerWidth: Dimensions.get('window').width * .9,
  contentComponent: contentComponent,
  contentOptions: {
    activeTintColor: '#000000',
    activeBackgroundColor: '#FFFFFF',
    style: {
      backgroundColor: '#CCCCCC'
    },
    labelStyle: {
      color: '#001AFF'
    }
  }
});

export default DrawerStack
