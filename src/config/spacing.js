/**
* @providesModule Spacing
*/

import { StyleSheet, Platform } from 'react-native';
import constants from 'Constants';
import colors from 'Colors';

let defaultSpacer = constants.defaultSpacer;
let positions = ['Top', 'Right', 'Left', 'Bottom'];

const spacing = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    padding: constants.viewPadding,
    backgroundColor: colors.white,
    justifyContent: 'space-between',
    height: constants.viewHeight
  },
  containerFullWidth: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: colors.white,
    justifyContent: 'space-between',
    height: constants.viewHeight,
    width: '100%'
  },
  scrollContainer: {
    backgroundColor: colors.white,
    flex: 0,
    minHeight: constants.viewHeight
  },
  scrollContainerWithFooter: {
    backgroundColor: colors.white,
    flex: 0,
    minHeight: constants.viewHeight,
    paddingBottom: constants.footerHeight
  },
  innerContainer: {
    width: '100%',
    display: 'flex',
    alignItems: 'center'
  },
  lastItemInScrollView: {
    marginBottom: 60
  },
  viewPadding: {
    padding: constants.viewPadding
  },
  viewPaddingHorizontal: {
    paddingLeft: constants.viewPadding,
    paddingRight: constants.viewPadding
  },
  viewPaddingVertical: {
    paddingTop: constants.viewPadding,
    paddingBottom: constants.viewPadding
  },
  removeHorizontalMargin: {
    marginLeft: 0,
    marginRight: 0
  },
  twoItemsInlineSeparate: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  inlineItems: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
});

positions.forEach((position) => {
  var paddingString = ('padding' + position)
  var marginString = ('margin' + position)

  spacing['addPadding' + position] = {
    [paddingString]: defaultSpacer
  }
  spacing['addMargin' + position] = {
    [marginString]: defaultSpacer
  }
});

export default spacing;
