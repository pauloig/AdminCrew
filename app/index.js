import { useState } from 'react';
import { View, ScrollView, SafeAreaView } from 'react-native';
import { Stack, useRouter } from 'expo-router';


import { SignIn } from '../components';
import { COLORS, SIZES } from '../constants/theme';

const Home = () => {

    const router = useRouter();
    const [searchTerm, setSearchTerm] = useState("") 

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>     
         

            <ScrollView showsVerticalScrollIndicator={false}>
                <View 
                    style={{
                        flex : 1,
                        padding: SIZES.medium
                    }}>

                        
                        
                                    
                    <SignIn/>
                   
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home;
