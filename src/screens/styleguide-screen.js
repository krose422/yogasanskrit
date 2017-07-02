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
        <Text>HELLO WORLD</Text>
        <Icon name="ardha-pincha-mayurasana" size={50} color="#000000" />
      </View>
    )
  }
}

export default StyleguideScreen
