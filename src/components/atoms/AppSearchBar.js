import React, {useRef} from 'react';
import {StyleSheet, View, TextInput, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

//UI Components
import AppIcon from './AppIcon';

// CONSTANTS
import colors from '../../theme/color';
import {hp, wp} from '../../theme/responsiveness';
import {LayoutSizes} from '../../theme/standardSizes';
import {fonts} from '../../utils/fonts';

const AppSearchBar = ({
  onChangeText,
  textInputRef,
  style,
  onSearch,
  navigation,
  ...props
}) => {
  return (
    <View style={[styles.searchSection, style]}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <AppIcon
          size={LayoutSizes.headerIconSize}
          source={require('../../assets/icons/Back.png')}
        />
      </TouchableOpacity>
      <TextInput
        ref={textInputRef ? textInputRef : null}
        {...props}
        editable={props.editable}
        style={[styles.Input]}
        placeholderTextColor={colors.grey1}
        onChangeText={
          onChangeText
            ? txt => {
                onChangeText(txt);
              }
            : null
        }
      />
      <TouchableOpacity onPress={onSearch}>
        <AppIcon source={require('../../assets/icons/search.png')} />
      </TouchableOpacity>
    </View>
  );
};

export default AppSearchBar;

const styles = StyleSheet.create({
  Input: {
    flex: 1,
    paddingRight: 15,
    fontFamily: fonts.titilliumWeb.Bold,
    fontSize: LayoutSizes.TextInputFontSize,
    
    color: colors.primary,
    marginLeft: 15,
    backgroundColor: colors.secondary,
  },
  searchSection: {
    backgroundColor: colors.secondary,

    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: LayoutSizes.DefaultTextInputHeight,

    shadowOffset: {width: 1, height: 10},
    shadowRadius: 9.11,

    shadowColor: '#000000',
    shadowOpacity: 1,
    elevation: 10,
    zIndex: 100,
  },
});
