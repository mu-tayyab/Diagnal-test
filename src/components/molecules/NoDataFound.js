import React from 'react';
import {StyleSheet, View} from 'react-native';
import {wp} from '../../theme/responsiveness';
import AppText from '../atoms/AppText';
import colors from '../../theme/color';

const NoDataFound = ({message}) => {
  return (
    <View style={styles.noDataFound}>
      <AppText fontSize={wp(2.8)} color={colors.primary}>
        {message}
      </AppText>
    </View>
  );
};

export default NoDataFound;

const styles = StyleSheet.create({
  noDataFound: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
