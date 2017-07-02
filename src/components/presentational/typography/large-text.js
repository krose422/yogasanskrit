/**
 * @providesModule LargeText
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text
} from 'react-native';
import textStyles from 'TextStyles'
import colors from 'Colors'

class LargeText extends React.Component {
  render() {
    return (
      <Text
        {...this.props}
        style={[
          this.props.bold == true ? textStyles.largeTextSemibold : textStyles.largeText,
          {color: this.props.color},
          this.props.style
        ]}>
        {this.props.children}
      </Text>
    )
  }
}

LargeText.defaultProps = {
  color: '#333333',
  bold: false
}

export default LargeText
