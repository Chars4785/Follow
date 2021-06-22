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
                return focused ?
                    <View style={styles.iconWrapper}>
                        <Image style={styles.homeIcon} source={images.iconHomeAble} />
                        <Text style={styles.iconAbleText}>홈</Text>
                    </View>
                  : <View style={styles.iconWrapper}>
                      <Image style={styles.homeUnIcon} source={images.iconHomeAble} />
                      <Text style={styles.iconUnAbleText}>홈</Text>
                    </View>
                }else if( route.name === 'CALENDAR' ){
                  return focused ?
                    <View style={styles.iconWrapper}>
                      <Image style={styles.calendarIcon} source={images.iconScheduleAble} /> 
                      <Text style={styles.iconAbleText}>일정</Text>
                    </View>
                  : <View style={styles.iconWrapper}>
                      <Image style={styles.calendarUnIcon} source={images.iconScheduleAble} />
                      <Text style={styles.iconUnAbleText}>일정</Text>
                    </View>
                }else if( route.name === 'DAYIL' ){
                  return focused ?
                    <View style={styles.iconWrapper}>
                      <Image  style={styles.dailyIcon} source={images.iconDailyAble} /> 
                      <Text style={styles.iconAbleText}>부서</Text>
                    </View>
                  : <View style={styles.iconWrapper}>
                      <Image style={styles.dailyUnIcon}  source={images.iconDailyAble} />
                      <Text style={styles.iconUnAbleText}>부서</Text>
                    </View>
                }else if( route.name === 'PRAYERLETTER' ){
                  return focused ?
                    <View style={styles.iconWrapper}>
                      <Image style={styles.prayIcon} source={images.iconLetterAble} /> 
                      <Text style={styles.iconAbleText}>기도 편지</Text>
                    </View>
                  : <View style={styles.iconWrapper}>
                      <Image style={styles.prayUnIcon} source={images.iconLetterAble} />
                      <Text style={styles.iconUnAbleText}>기도 편지</Text>
                    </View>
                }else if( route.name === 'MYPAGE' ){
                  return focused ?
                    <View style={styles.iconWrapper}>
                      <Image style={styles.mypageIcon} source={images.iconMypageAble} /> 
                      <Text style={styles.iconAbleText}>My</Text>
                    </View>
                  : <View style={styles.iconWrapper}>
                      <Image style={styles.mypageUnIcon} source={images.iconMypageAble} />
                      <Text style={styles.iconUnAbleText}>My</Text>
                    </View>
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
  iconWrapper:{
    justifyContent:'center',
    alignItems:'center'
  },
  iconAbleText:{
    fontSize:wsv(20),
    marginTop:wsv(10)
  },
  iconUnAbleText:{
    fontSize:wsv(20),
    marginTop:wsv(10),
    opacity:0.5
  },
  homeIcon:{
    width:wsv(45),
    height:wsv(49)
  },
  calendarIcon:{
    width:wsv(45),
    height:wsv(49)
  },
  dailyIcon:{
    width:wsv(45),
    height:wsv(49)
  },
  prayIcon:{
    width:wsv(45),
    height:wsv(49)
  },
  mypageIcon:{
    width:wsv(45),
    height:wsv(49)
  },
  homeUnIcon:{
    width:wsv(45),
    height:wsv(49),
    opacity: 0.5
  },
  calendarUnIcon:{
    width:wsv(45),
    height:wsv(49),
    opacity: 0.5,
  },
  dailyUnIcon:{
    width:wsv(45),
    height:wsv(49),
    opacity: 0.5,
  },
  prayUnIcon:{
    width:wsv(45),
    height:wsv(49),
    opacity: 0.5,
  },
  mypageUnIcon:{
    width:wsv(45),
    height:wsv(49),
    opacity: 0.5,
  },
})