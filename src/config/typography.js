/**
 * @providesModule TextStyles
 */

import { StyleSheet } from 'react-native';
import colors from 'Colors';
import fonts from 'Fonts';

const textStyles = StyleSheet.create({
  largeText: {
    fontFamily: fonts.openSansRegular,
    fontSize: 16
  },
  largeTextSemibold: {
    fontFamily: fonts.openSansSemibold,
    fontSize: 16
  }
});

export default textStyles;
