import { StyleSheet, useWindowDimensions } from "react-native";

import { COLORS, FONT, SIZES } from "../../constants";
import { withLayoutContext } from "expo-router";

const styles = StyleSheet.create({

    container: {
        
        width: '100%',   
        marginVertical: 10,
        padding: 15,
        alignItems: 'center',
        borderRadius: 10
    },
    container_PRIMARY:
    {
        backgroundColor: COLORS.blueLogin,
    },
    container_TERTIARY:
    {

    },
    text: {
        color: 'white',
        fontWeight: 'bold'
    },

    text_TERTIARY: {
        color: 'gray',
        fontWeight: 'bold'
    },

});

export default styles;