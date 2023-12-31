import { View, Text, TextInput } from "react-native-web";
import styles from "./CustomInput.style";

const CustomInput = ({value, setValue, placeholder, secureTextEntry}) => {

    return (
        <View style = {styles.container}>
            <TextInput 
            value = {value}
            onChangeText = {setValue}
            placeholder={placeholder} 
            style = {styles.input}
            secureTextEntry = {secureTextEntry}
            />
        </View>
    )

}

export default CustomInput