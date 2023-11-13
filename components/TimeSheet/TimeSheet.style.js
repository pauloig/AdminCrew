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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: "#051C60",
    margin: 10,
  }
  
});

export default styles;
