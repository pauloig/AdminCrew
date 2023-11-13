import { useState } from 'react'
import { 
  View, 
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList, 
  useWindowDimensions
} from 'react-native'
import { useRouter } from 'expo-router';


import styles from './TimeSheet.style';
import { icons, SIZES } from '../../constants';
import Logo from '../../assets/images/control-job.jpg'
import CustomInput from '../CustomInput/CustomInput';
import CustomButton from '../CustomButton/CustomButton';
import { useAnimatedGestureHandler } from 'react-native-reanimated';


const TimeSheet = ( ) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const {height} = useWindowDimensions();

  const onSignInPressed = ()=>{
    alert('Create Account');
  }

  return (
      <View style = {styles.container}>
          <Text style={styles.title}> 
            Time Sheet
          </Text>
            
            
            <View  style = {styles.loginContainer}>
              <CustomInput 
                placeholder="username"
                value={username}
                setValue={setUsername}
                />
              
              <CustomInput
              placeholder="password"
              value={password}
              setValue={setPassword}
              secureTextEntry = {true}
              />
                
            </View>
            
            <CustomButton onPress={onSignInPressed} text="Sign In"/>                       
      </View>
  )
}

export default TimeSheet