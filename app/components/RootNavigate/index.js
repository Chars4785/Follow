import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScene from '../../scene/SplashScene'
import LoginScene from '../../scene/LoginScene'

// const RootStackNavigate = createStackNavigator(
//     {
//         Splash:{
//             screen:SplashScene
//         }
//     },
//     {
//         initialRouteName: 'Splash', // 여기서 앱 버전체크가 이루어짐
//     }
// );
// const RootNavigate = NavigationContainer(RootStackNavigate)
// export default RootNavigate

const Stack = createStackNavigator();

function RootNavigate() {
    return (
      <NavigationContainer>
        <Stack.Navigator 
            initialRouteName="Splash"
            headerMode="screen"
            screenOptions={{
                headerTintColor: 'white',
                headerStyle: { backgroundColor: 'tomato' },
            }
        }>
        <Stack.Screen 
            name="Splash"
            component={SplashScene}
            options={{
                headerShown:false
            }}
        />
        <Stack.Screen 
            name="Login"
            component={LoginScene}
            options={{
                headerShown:true
            }}
        />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

export default RootNavigate;
