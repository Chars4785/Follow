import React,{useEffect} from 'react'
import { View, Text, Image } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../../scene/Home';
import MyPrayerLetter from '../../../scene/MyPrayerLetter';
import FollowMark from '../../../scene/FollowMark';
import Calendar from '../../../scene/Calendar';
import Daily from '../../../scene/Daily';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import images from '@assets/images';

const Tab = createBottomTabNavigator();

const TabNavigator = ({ navigation }) => {
  
  return (
      <Tab.Navigator 
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if( route.name === 'Home' ){
                return focused ? <Image source={images.iconHomeAble} /> : <Image source={images.iconHomeAble} />
              }else if( route.name === 'FollowMark' ){
                return focused ? <Image source={images.iconMypageAble} /> : <Image source={images.iconMypageAble} />
              }else if( route.name === 'Daily' ){
                return focused ? <Image source={images.iconDailyAble} /> : <Image source={images.iconDailyAble} />
              }else if( route.name === 'MyPrayerLetter' ){
                return focused ? <Image source={images.iconLetterAble} /> : <Image source={images.iconLetterAble} />
              }else if( route.name === 'Calendar' ){
                return focused ? <Image source={images.iconScheduleAble} /> : <Image source={images.iconScheduleAble} />
              }
          },
        })}
        tabBarOptions={{
          activeTintColor: 'black',
          inactiveTintColor: 'gray',
          showLabel: true,
        }}
        >
        <Tab.Screen name="Home" component={Home}  />
        <Tab.Screen name="Calendar" component={Calendar} />
        <Tab.Screen name="Daily" component={Daily} />
        <Tab.Screen name="MyPrayerLetter" component={MyPrayerLetter} />
        <Tab.Screen name="FollowMark" component={FollowMark} />
      </Tab.Navigator>
  );
}

export default TabNavigator
