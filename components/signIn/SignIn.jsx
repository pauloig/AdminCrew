import { useState } from 'react'
import { 
  View, 
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList, 
} from 'react-native'
import { useRouter } from 'expo-router';


import styles from './SignIn.style';
import { icons, SIZES } from '../../constants';
import Logo from '../../assets/images/control-job.jpg'




const SignIn = ( ) => {

  return (
      <View style = {styles.container}>
          <Image
            source = {Logo}
            resizeMode = "contain"
            style = {styles.logo}
          />
            <Text>Hello Paulo!!! </Text>
      </View>
  )
}

export default SignIn