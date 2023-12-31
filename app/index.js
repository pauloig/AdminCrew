import { useState } from 'react';
import { View, ScrollView, SafeAreaView } from 'react-native';
import { Stack, useRouter } from 'expo-router';


import { SignIn } from '../components';
import { TimeSheet} from '../components';
import { COLORS, SIZES } from '../constants/theme';

const Home = () => {

    const router = useRouter();
    const [searchTerm, setSearchTerm] = useState("") 

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>     
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: COLORS.lightWhite },
                    headerShadowVisible: false,
                   
                    headerTitle: "",
                }}
            />


            <ScrollView showsVerticalScrollIndicator={false}>
                <View 
                    style={{
                        flex : 1,
                        padding: SIZES.medium
                    }}>
                    
                   <TimeSheet/>
                   
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home;
