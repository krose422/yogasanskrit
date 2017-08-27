/**
 * @providesModule PosesScreen
 */

import React, { Component } from 'react';
import {
 StyleSheet,
 View,
 ScrollView,
 Text,
 StatusBar
} from 'react-native';

import api from 'Api';
import colors from 'Colors';
import spacing from 'Spacing';
import TopNav from 'TopNav';
import Icon from 'MyIcon';
import LargeText from 'LargeText';
import MediumText from 'MediumText';

class PosesScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      poses: []
    };

    this.getPoses();
  }

  componentDidMount() {
    this.getPoses();
  }

  getPoses() {
    api.fetchPoses()
      .then((responseJson) => {
        this.setState({
          poses: responseJson
        });
      });
  }

  render() {
    return (
      <View>
      <StatusBar
         barStyle="light-content"
       />
        <TopNav />
        <ScrollView
          contentContainerStyle={spacing.scrollContainerWithFooter}
          keyboardShouldPersistTaps='always'>
          {this.state.poses.map(pose =>
            <View key={pose._id}>
              <Icon
                name={`${pose.sanskritName.replace(/\s+/g, '-').toLowerCase()}`}
                size={85}
                color={colors.ypsDark} />
              <LargeText
                color={colors.ypsDark}
                bold={true}>{pose.sanskritName}</LargeText>
              <MediumText
                color={colors.ypsDark}>{pose.englishName}</MediumText>
            </View>
          )}
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({

});

export default PosesScreen
