/**
 * @providesModule StyleguideScreen
 */

import React, { Component } from 'react';
import {
 StyleSheet,
 View,
 Text,
 StatusBar
} from 'react-native';

import poses from 'PosesData';
import colors from 'Colors';
import TopNav from 'TopNav';
import Icon from 'MyIcon';
import LargeText from 'LargeText';

class StyleguideScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Kelley"
    };
    console.log('poses', poses)
  }

  render() {
    return (
      <View>
      <StatusBar
         barStyle="light-content"
       />
        <TopNav />
        <LargeText
          bold={true}>Yoga Pronounce Sanskrit</LargeText>
        <Icon name="ardha-pincha-mayurasana" size={50} color={colors.ypsDark} />
      </View>
    )
  }
}

export default StyleguideScreen
