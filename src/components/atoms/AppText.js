import React from 'react';
import {StyleSheet, Text} from 'react-native';

// CONSTANTS
import colors from '../../theme/color';
import {wp} from '../../theme/responsiveness';
import {fonts, gotham} from '../../utils/fonts';

const AppText = ({color, fontSize, fontFamily, style, ...props}) => {
  return (
    <Text
      {...props}
      style={[
        styles.defaultStyle,
        {
          fontFamily: fontFamily ? fontFamily : styles.defaultStyle.fontFamily,
          fontSize: fontSize ? fontSize : styles.defaultStyle.fontSize,
          color: color ? color : styles.defaultStyle.color,
        },
        style,
      ]}>
      {props.children}
    </Text>
  );
};

export default React.memo(AppText);

const styles = StyleSheet.create({
  defaultStyle: {
    fontSize: wp(4),
    color: colors.black,
    fontFamily: fonts.titilliumWeb.Regular,
  },
});
