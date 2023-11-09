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




const SignIn = ( ) => {

  const {height} = useWindowDimensions();

  return (
      <View style = {styles.container}>
          <Image
            source = {Logo}
            resizeMode = "contain"
            style = {[styles.logo, , {height: height * 0.3}]}
          />
            <Text>Hello Paulo!!! </Text>
            
            
            <TextInput style={styles.usernameContainer}
            placeholder = "username"/>
      </View>
  )
}

export default SignIn