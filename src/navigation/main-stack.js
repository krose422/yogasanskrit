/**
 * @providesModule MainStack
 */

 import React from 'react';
 import { Button, ScrollView } from 'react-native';
 import { StackNavigator } from 'react-navigation';

 import StyleguideScreen from 'StyleguideScreen';
 import PosesScreen from 'PosesScreen';

 const MainStack = StackNavigator({
   Poses: {
     screen: PosesScreen,
     navigationOptions: ({navigation}) => ({
       title: 'Poses'
     }),
     path: '/poses'
   }
 }, {
   headerMode: 'none'
 });

 export default MainStack
