import { View, Text, TextInput, Pressable } from "react-native-web";
import styles from "./CustomButton.style";


const CustomButton = ({onPress, text, type="PRIMARY", bgColor, fgColor}) => {

    return (
        <Pressable onPress={onPress} 
            style = {[styles.container, 
            styles[`container_${type}`],
            bgColor ? {backgroundColor: bgColor} : {},
        ]} >
            <Text 
            style={[styles.text, 
            styles[`text_${type}`],
            fgColor ? {color: fgColor} : {},
            ]}>
                {text}
            </Text>
        </Pressable>
    )

}

export default CustomButton