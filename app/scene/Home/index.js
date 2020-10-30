import React, {useEffect,useState} from 'react'
import { View, Text, TouchableOpacity, StyleSheet,ScrollView,Image,Linking,AppState, SafeAreaView } from 'react-native'
import { getWidthScaledValue as wsv, getHeightScaledValue as hsv } from '../../api/util';
import Images from '@assets/images'
import textStyles from '../../assets/styles/textStyles'
import moment from 'moment';
import { inject } from 'mobx-react';
import images from '../../assets/images';
import Swiper from 'react-native-swiper'

const sarangURL = 'https://www.sarang.org/';
const SNS_URL = 'https://www.instagram.com/follow_univ8/'
const YOUTUB_URL = 'https://www.youtube.com/channel/UCO5cYdn0sDFVowC8mV-gHBw';
const mainMessage = 
`예수님을 따르는 제자가 되어,
세상을 따르지 않고,
세상이 예수님을 따르게 하는 팔로우`

const Home = inject("rootStore")(({ navigation, rootStore }) => {

  useEffect(() => {
    const unsubscribe = navigation.addListener('tabPress', e => {
      // Prevent default behavior

      alert('마이페이지 기도편지');
      // Do something manually
      // ...
    });
  }, [navigation]);
  //test
  const [ test, setTest ] = useState(false);
  const [ test2, setTest2 ] = useState(false);

  const onPressMypage = () =>{
    navigation.navigate({
      name:'MyPage'
    })
  }

  const onPressFollowNews = () =>{
    navigation.navigate({
      name:'FollowNews'
    })
  }

  const onPressPrayerLetter = () =>{
    setTest2(true);
    // navigation.navigate({
    //   name:'PrayerLetter'
    // })
  }

  const onPressMyGBS = () =>{
    setTest(true)
    AppState.removeEventListener('change',checkAppState)
    // navigation.navigate({
    //   name:'MyGBS'
    // })
  }

  const onPressLeader = () =>{
    navigation.navigate({
      name:'LeaderGBS'
    })
  }

  const onPressUrl = (url) =>{
    Linking.canOpenURL(url)
      .then((supported) => {
        if (!supported) {
          console.log("Can't handle url: " + url);
        } else {
          return Linking.openURL(url);
        }
    })
    .catch((err) => console.error('An error occurred', err));
  }
  const checkAppState = (nextAppState) =>{
      if( nextAppState === 'background' ){
        console.log("GO_background")
      }
  
      if( nextAppState === 'active' || AppState.currentState ==='active' ){
        console.log("GO_forground")
      }
    }

  useEffect( ()=>{
    console.log("test",test);
    // console.log("test2",test2)
    // if( test  ){
    //   console.log("remove")
    //   return ()=>{
    //     AppState.removeEventListener('change',checkAppState)
    //   } 
    // }
    

    AppState.addEventListener('change',checkAppState);
    return () =>{
      AppState.removeEventListener('change',checkAppState)
    } 
  },[ ])

  return (
    <SafeAreaView style={{ flex: 1,  justifyContent: 'center' }}>
      <View style={styles.safeAreaStyle} />
      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.messageWrapper}>
            <Image source={images.imgFollow} />
            <Text>"</Text>
            {/* 서버에서 받도록 */}
              <Text style={styles.messageText}>{mainMessage}</Text>
            <Text>"</Text>
        </View>
        <View style={styles.contentWrapper}>
          <TouchableOpacity style={[styles.contentStyle,{backgroundColor:'#e93b3b'}]}>
            <Image style={styles.contentImage} source={images.iconYoutubeHome} />
            <Text style={styles.contentText}>유튜브</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.contentStyle,{backgroundColor:'#ff9c1b'}]}>
            <Image style={styles.contentImage} source={images.iconInstagramHome} />
            <Text style={styles.contentText}>인스타그램</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.contentStyle,{backgroundColor:'#3b7be5'}]}>
            <Image style={styles.contentImage} source={images.iconPrayHome} />
            <Text style={styles.contentText}>중보기도함</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.contentStyle,{backgroundColor:'#0ab7ca'}]}>
            <Image style={styles.contentImage} source={images.iconMypageHome} />
            <Text style={styles.contentText}>마이페이지</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.swiperWrapper}>
          <Swiper 
            style={styles.swiperWrapper} 
            showsButtons={false}
            activeDotStyle={{ backgroundColor:'#e63258' }}
            dotStyle={{ backgroundColor:'#e2e2e2', borderColor:'#acacac' }}
            paginationStyle={{
              bottom: -23,
            }}
          >
            <Image resizeMode="contain" style={{height:wsv(424), width:wsv(750)}} source={require('../../../testFile/page1.jpeg')} />
            <Image resizeMode="contain" style={{height:wsv(424), width:wsv(750)}} source={require('../../../testFile/page2.jpeg')} />
            <Image resizeMode="contain" style={{height:wsv(424), width:wsv(750)}} source={require('../../../testFile/page3.jpeg')} />
          </Swiper>
        </View>
        <View style={styles.worshipWrapper}>
          <View style={styles.worshipContainer}>
            <Text style={styles.worshipText}>사랑의교회 예배시간 안내 바로가기</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
})

export default Home

const styles = StyleSheet.create({
  safeAreaStyle:{
    ...StyleSheet.absoluteFillObject,
    top:0,
    height:wsv(100),
    backgroundColor:'white'
  },
  messageWrapper:{
    height:wsv(359),
    backgroundColor:'white',
    justifyContent:'center',
    alignItems:'center'
  },
  messageText:{
    fontSize: wsv(36),
    textAlign:'center',
  },
  contentWrapper:{
    flexDirection:'row',
    height:wsv(625),
    flexWrap:'wrap',
    justifyContent:'center',
    alignContent:'center'
  },
  contentStyle:{
    alignItems:'center',
    height: wsv(227),
    width: wsv(298),
    margin: wsv(11),
  },
  contentImage:{
    marginTop:wsv(35),
    width:wsv(112),
    height:wsv(112)
  },
  contentText:{
    ...textStyles.mediumText,
    marginTop: wsv(24),
    color: 'white',
    fontSize:wsv(30)
  },
  swiperWrapper:{
    height:wsv(424),
  },
  worshipWrapper:{
    height:wsv(285),
    justifyContent:'center',
    alignItems:'center'
  },
  worshipContainer:{
    width:wsv(616),
    height:wsv(109),
    backgroundColor:'#e63258',
    justifyContent:'center',
    alignItems:'center'
  },
  worshipText:{
    ...textStyles.boldText,
    fontSize: wsv(30),
    color:'white',
  }
})
