/**
 * @providesModule StyleguideScreen
 */

import React, { Component } from 'react';
import {
 StyleSheet,
 View,
 Text
} from 'react-native';

class StyleguideScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Kelley"
    };
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
