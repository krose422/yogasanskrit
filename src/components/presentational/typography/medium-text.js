/**
 * @providesModule MediumText
 */


import React, { Component } from 'react';
import {
 StyleSheet,
 Text
} from 'react-native';
import textStyles from 'TextStyles';
import colors from 'Colors';

class MediumText extends React.Component {
 render() {
   return (
     <Text
       {...this.props}
       style={[
         this.props.bold == true ? textStyles.mediumTextSemibold : textStyles.mediumText,
         {color: this.props.color},
         this.props.style
       ]}>
       {this.props.children}
     </Text>
   )
 }
};

MediumText.defaultProps = {
 color: colors.night,
 bold: false
};

export default MediumText;
