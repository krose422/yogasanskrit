/**
 * @providesModule StyleguideScreen
 */

import React, { Component } from 'react';
import {
 StyleSheet,
 View,
 Text
} from 'react-native';
import poses from 'PosesData'

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
      </View>
    )
  }
}

export default StyleguideScreen
