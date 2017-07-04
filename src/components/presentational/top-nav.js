/**
* @providesModule TopNav
*/

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Platform,
  Image
} from 'react-native';

import colors from 'Colors';
import constants from 'Constants';
import images from 'Images';

class TopNav extends React.Component {

  render() {
    return(
      <View style={styles.navBar}>
        <View style={styles.navIconWrapper}>
          <Image
            style={constants.baseImageStyle}
            source={images.logo2x}
            resizeMode='contain' />
        </View>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  navBar: {
    width: '100%',
    paddingTop: Platform.OS === 'ios' ? 20 : 0,
    backgroundColor: colors.ypsDark,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    height: constants.headerHeight
  },
  navIconWrapper: {
    height: 32,
    width: 47
  }
});

export default TopNav;
