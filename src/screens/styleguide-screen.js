/**
 * @providesModule StyleguideScreen
 */

import React, { Component } from 'react';
import {
 StyleSheet,
 View,
 Text
} from 'react-native';

import poses from 'PosesData';
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
        <LargeText
          bold={true}>HELLO WORLD</LargeText>
        <Icon name="ardha-pincha-mayurasana" size={50} color="#000000" />
      </View>
    )
  }
}

export default StyleguideScreen
