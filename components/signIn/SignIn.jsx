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


import styles from './SignIn.style';
import { icons, SIZES } from '../../constants';
import Logo from '../../assets/images/control-job.jpg'
import CustomInput from '../CustomInput/CustomInput';
import CustomButton from '../CustomButton/CustomButton';
import { useAnimatedGestureHandler } from 'react-native-reanimated';


const SignIn = ( ) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const {height} = useWindowDimensions();

  const onSignInPressed = ()=>{
    console.warn("Sign In");
    console.log("Sign In");
    alert("Sign In");
  };

  const onForgotPasswordPressed = ()=>{
    console.warn("forgot Password");
    console.log("forgot Password");
    alert("forgot Password");
  };

  const onSignInFacebook = ()=>{
    console.warn("forgot Password");
    console.log("forgot Password");
    alert("Facebook");
  };

  const onSignInGoogle = ()=>{
    console.warn("forgot Password");
    console.log("forgot Password");
    alert("Google");
  };

  const onCreateAccount = ()=>{
    alert('Create Account');
  }

  return (
      <View style = {styles.container}>
          <Image
            source = {Logo}
            resizeMode = "contain"
            style = {[styles.logo, , {height: height * 0.3}]}
          />
            
            
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
            
            <CustomButton 
              onPress={onForgotPasswordPressed} 
              text="Forgot Password" 
              type="TERTIARY"
              
            />
            
            <CustomButton 
              onPress={onSignInFacebook} 
              text="Sign In wiht Facebook" 
              type="PRIMARY"
              bgColor="#E7EAF4"    
              fgColor="#4765A9"
            />
            <CustomButton 
              onPress={onSignInGoogle} 
              text="Sign In wiht Google" 
              type="PRIMARY"
              bgColor="#FAE9EA"    
              fgColor="#DD4D44"/>
            
            <CustomButton 
              onPress={onCreateAccount} 
              text="Create Account" 
              type="TERTIARY"
              fgColor="#4765A9"
            />
            
      </View>
  )
}

export default SignIn