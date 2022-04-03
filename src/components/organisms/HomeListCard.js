import React from 'react';
import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';

import AppText from '../atoms/AppText';
import {hp, wp} from '../../theme/responsiveness';
import colors from '../../theme/color';
import {fonts} from '../../utils/fonts';

const HomeListCard = ({item, onCardPress, navigation, ...props}) => {
  return (
    <TouchableOpacity
      onPress={onCardPress ? onCardPress : () => null}
      style={styles.card}>
      <Image
        resizeMode="cover"
        style={styles.imageStyle}
        source={item['poster-image']}
      />
      <View style={{marginTop: 7}}>
        <AppText
          fontSize={wp(4)}
          color={colors.primary}
          numberOfLines={1}
          fontFamily={fonts.titilliumWeb.Light}>
          {item.name}
        </AppText>
      </View>
    </TouchableOpacity>
  );
};

export default HomeListCard;

const styles = StyleSheet.create({
  card: {
    height: hp(25),
    width: '30.5%',
    marginRight: wp(4),
    marginBottom: 35,
  },
  imageStyle: {
    width: '100%',
    height: '85%',
  },
});
