/**
 * @providesModule MainStack
 */

 import React from 'react';
 import { Button, ScrollView } from 'react-native';
 import { StackNavigator } from 'react-navigation';

 import StyleguideScreen from 'StyleguideScreen';

 const MainStack = StackNavigator({
   Styleguide: {
     screen: StyleguideScreen,
     navigationOptions: ({navigation}) => ({
       title: 'Styleguide'
     }),
     path: '/styleguide'
   }
 }, {
   headerMode: 'none'
 });

 export default MainStack
