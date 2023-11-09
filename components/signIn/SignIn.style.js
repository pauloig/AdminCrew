import { StyleSheet, useWindowDimensions } from "react-native";

import { COLORS, FONT, SIZES } from "../../constants";
import { withLayoutContext } from "expo-router";

const styles = StyleSheet.create({



  container: {
    width: "100%",
    alignItems: "center",
    padding: 20,
  },
  logo: {
    width: "70%",
    maxWidth: 500,
    maxHeight: 500
  },
  usernameContainer: {
    backgroundColor: 'white',
    width: '100%',
    borderColor: "#e8e8e8",
    borderWidth: 1,
    borderRadius: 5
  }
});

export default styles;
