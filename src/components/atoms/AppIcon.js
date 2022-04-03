import React from "react";
import { StyleSheet, Image } from "react-native";

// CONSTANTS
import { wp } from "../../theme/responsiveness";

const AppIcon = ({
  style,
  size,
  source,
  url,
  borderRadius,
  tintColor,
  ...props
}) => {
  return (
    <Image
      {...props}
      tintColor={tintColor ? tintColor : undefined} //works on android only
      source={source ? source : { uri: url }}
      style={[
        styles.container,
        style,
        {
          tintColor: tintColor, //ios
          borderRadius: borderRadius ? borderRadius : undefined,
        },
        size && { width: size, height: size },
      ]}
    />
  );
};
export default React.memo(AppIcon);

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    width: wp(5),
    height: wp(5),
  },
});
