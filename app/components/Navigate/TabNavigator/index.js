import React from 'react'
import { View, Text, Image } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../../scene/Home';
import MyPrayerLetter from '../../../scene/MyPrayerLetter';
import FollowMark from '../../../scene/FollowMark';
import Calendar from '../../../scene/Calendar';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import images from '@assets/images';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
      <Tab.Navigator 
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if( route.name === 'Home' ){
                iconName = focused ? 'home' :'home-outline'
              }else if( route.name === 'FollowMark' ){1
                return focused ? <Image style={{width:30, height: 30}} source={images.imgFollow} /> : <Image style={{width:30, height: 30}} source={images.imgFollowDark} />
              }else if( route.name === 'MyPrayerLetter' ){
                iconName = focused ? 'email' :'email-outline'
              }else if( route.name === 'Calendar' ){
                iconName = focused ? 'calendar-month' :'calendar-month-outline'
              }

            // You can return any component that you like here!
            return <Icon name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
          showLabel: false,
        }}
        >
        <Tab.Screen name="Home" component={Home}  />
        <Tab.Screen name="Calendar" component={Calendar} />
        <Tab.Screen name="MyPrayerLetter" component={MyPrayerLetter} />
        <Tab.Screen name="FollowMark" component={FollowMark} />
      </Tab.Navigator>
  );
}

export default TabNavigator
