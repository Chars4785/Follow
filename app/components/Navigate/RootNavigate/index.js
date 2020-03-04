import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScene from '../../../scene/SplashScene';
import LoginScene from '../../../scene/LoginScene';
import FollowNews from '../../../scene/FollowNews';
import PrayerLetter from '../../../scene/PrayerLetter';
import MyGBS from '../../../scene/MyGBS';
import MyPage from '../../../scene/MyPage';
import TabNavigator from '../TabNavigator'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
const Stack = createStackNavigator();

function RootNavigate() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash"
        screenOptions={{
            headerStyle:{ backgroundColor: 'white'},
            headerRight:()=> {
                return(<Icon name={'bell-outline'} size={32} />)
            }
        }}>
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
                headerShown:false
            }}
        />
        <Stack.Screen
            name="FollowNews"
            component={FollowNews}
        />
        <Stack.Screen
            name="PrayerLetter"
            component={PrayerLetter}
        />
        <Stack.Screen
            name="MyGBS"
            component={MyGBS}
        />
        <Stack.Screen
            name="MyPage"
            component={MyPage}
        />
        <Stack.Screen
            name="TabNavigator"
            component={TabNavigator}
        />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

export default RootNavigate;
