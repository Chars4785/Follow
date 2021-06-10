import React,{useEffect} from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScene from '../../../scene/HomeScene';
import PrayerLetterScene from '../../../scene/PrayerLetter';
import FollowMark from '../../../scene/FollowMark';
import CalendarScene from '../../../scene/CalendarScene';
import Daily from '../../../scene/Daily';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import images from '@assets/images';
import { getWidthScaledValue as wsv, getHeightScaledValue as hsv } from '../../../api/util';
import MyPage from '../../../scene/MyPage';
import InitTabComponet from '../../../components/InitTabComponet'
import { inject } from 'mobx-react';

const Tab = createBottomTabNavigator();

const TabNavigator =inject('rootStore')(({ navigation, rootStore }) => {
  console.log(rootStore)
  
  
  return (
      <Tab.Navigator 
        initialRouteName="CALENDAR"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            if( route.name === 'HOME' ){
                return focused ? <Image style={styles.homeIcon} source={images.iconHomeAble} />
                  : <Image style={styles.homeIcon} source={images.iconHomeUnAble} />
                }else if( route.name === 'CALENDAR' ){
                  return focused ? <Image style={styles.calendarIcon} source={images.iconScheduleAble} /> 
                  : <Image style={styles.calendarIcon} source={images.iconScheduleUnAble} />
                }else if( route.name === 'DAYIL' ){
                  return focused ? <Image  style={styles.dailyIcon} source={images.iconDailyAble} /> 
                  : <Image style={styles.dailyIcon}  source={images.iconDailyUnAble} />
                }else if( route.name === 'PRAYERLETTER' ){
                  return focused ? <Image style={styles.prayIcon} source={images.iconLetterAble} /> 
                  : <Image style={styles.prayIcon} source={images.iconLetterUnAble} />
                }else if( route.name === 'MYPAGE' ){
                  return focused ? <Image style={styles.mypageIcon} source={images.iconMypageAble} /> 
                  : <Image style={styles.mypageIcon} source={images.iconMypageUnAble} />
                }
          },
        })}
        tabBarOptions={{
          activeTintColor: 'black',
          inactiveTintColor: 'gray',
          showLabel: false,
          style:{
            backgroundColor:'white',
            paddingTop: wsv(23)
          }
        }}
        >
        <Tab.Screen name="HOME" component={HomeScene}  />
        <Tab.Screen name="CALENDAR" children={(props) => InitTabComponet({ component: CalendarScene, rootStore, ...props })} />
        <Tab.Screen name="DAYIL" children={(props) => InitTabComponet({ component: Daily, rootStore, ...props })} />
        <Tab.Screen name="PRAYERLETTER" component={PrayerLetterScene} />
        <Tab.Screen name="MYPAGE" component={MyPage} />
      </Tab.Navigator>
  );
})

export default TabNavigator

const styles = StyleSheet.create({
  homeIcon:{
    width:wsv(39),
    height: wsv(75)
  },
  calendarIcon:{
    width:wsv(42),
    height: wsv(75)
  },
  dailyIcon:{
    width:wsv(74),
    height:wsv(77)
  },
  prayIcon:{
    width:wsv(74),
    height: wsv(72)
  },
  mypageIcon:{
    width:wsv(93),
    height: wsv(77)
  }
})