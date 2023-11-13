import { StyleSheet, useWindowDimensions } from "react-native";

import { COLORS, FONT, SIZES } from "../../constants";
import { withLayoutContext } from "expo-router";

const styles = StyleSheet.create({

    container: {
        backgroundColor: 'white',
        width: '100%',   
        borderRadius: 10,
        borderColor: '#e8e8e8',
        borderWidth: 1,                
        marginVertical: 5
    },
    input: {},

});

export default styles;