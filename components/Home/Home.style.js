import { StyleSheet, useWindowDimensions } from "react-native";

import { COLORS, FONT, SIZES } from "../../constants";
import { withLayoutContext } from "expo-router";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
  },
  loginContainer: {
    width: "100%",
    alignItems: "center",
    paddingTop: 30,
    paddingLeft: 10,
    paddingRight: 10
  },
  logo: {
    width: "70%",
    maxWidth: 500,
    maxHeight: 500
  },
  searchBtn: {
    width: 150,
    height: 30,
    backgroundColor: COLORS.blueLogin,
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
    textShadowColor: "white",
    padding:15,
    fontWeight: 'bold',
    color: 'white'

  }
});

export default styles;
