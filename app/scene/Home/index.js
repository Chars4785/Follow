import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet,ScrollView,Image,Linking } from 'react-native'
import { getWidthScaledValue as wsv, getHeightScaledValue as hsv } from '../../api/util';
import Images from '@assets/images'
import textStyles from '../../assets/styles/textStyles'
import moment from 'moment';

const sarangURL = 'https://www.sarang.org/';
const SNS_URL = 'https://www.instagram.com/follow_univ8/'
const YOUTUB_URL = 'https://www.youtube.com/channel/UCO5cYdn0sDFVowC8mV-gHBw';

const Home = ({ navigation }) => {


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
    navigation.navigate({
      name:'PrayerLetter'
    })
  }

  const onPressMyGBS = () =>{
    navigation.navigate({
      name:'MyGBS'
    })
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

  return (
    <View style={{ flex: 1,  justifyContent: 'center' }}>
      <ScrollView>
      <View style={styles.UserInfoBoxStyle}>
        <View style={styles.InfoImageStyle}>
          <Image source={Images.iconMypage} />
        </View>
        <View style={styles.InforDetailWrapper}>
          <View style={styles.InfoDetailFirst}>
            <Text style={styles.InfoDepartment}>대학 8부</Text>
            <Text style={styles.InfName}>이종민</Text>
          </View>
          <View style={styles.InfoDetailSecond}>
          <TouchableOpacity onPress={onPressMypage} >
            <Text>
                정보 보기 <Image source={Images.selectArrow}/>
            </Text>
          </TouchableOpacity>
          </View>
        </View>
      </View>
        <TouchableOpacity style={styles.AttendanceCheckStyle}>
          {/* 리더 아닌 사람들은 출석 체크 확인 할 수 있도록 만들기 */}
          <Text> 출석 체크 하기</Text> 
        </TouchableOpacity>
        <TouchableOpacity style={styles.FollowNewsStyle} onPress={onPressFollowNews}>
          <Text>{ moment().subtract(1, 'weeks').endOf('isoWeek').format('YYYY.MM.DD') }</Text>
          <Text>Follow 소식</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.PrayerLetterStyle} onPress={onPressPrayerLetter}>
          {/* 업데이트 날짜 언제 기도편지인지 또 모든 기도 편지 볼수 있으면 좋을 듯 */}
          <Text style={{fontSize:hsv(50)}}>{moment().month()+1}</Text>
          <Image source={Images.imgMonth} />
          <Text>기도 편지함</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.MyGBS_Style} onPress={onPressMyGBS}>
          {/* 업데이트 날짜 언제 기도편지인지 또 모든 기도 편지 볼수 있으면 좋을 듯 */}
          <Text> GBS </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.MyGBS_Style} onPress={onPressLeader}>
          {/* 업데이트 날짜 언제 기도편지인지 또 모든 기도 편지 볼수 있으면 좋을 듯 */}
          <Text> GBS 관리 </Text>
        </TouchableOpacity>
        <View style={styles.infoTextView}>
          <Text style={styles.InfName}>  Info. </Text>
        </View>
        <View style={styles.urlViewWrapper}>
          <TouchableOpacity style={styles.urlStyle} onPress={() =>onPressUrl(sarangURL)}>
            {/* 업데이트 날짜 언제 기도편지인지 또 모든 기도 편지 볼수 있으면 좋을 듯 */}
            <Text style={styles.urlTextStyle}> 사랑의 교회 </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.urlStyle} onPress={() =>onPressUrl(YOUTUB_URL)}>
            {/* 업데이트 날짜 언제 기도편지인지 또 모든 기도 편지 볼수 있으면 좋을 듯 */}
            <Image source={Images.iconYoutube} />
            <Text style={styles.urlTextStyle}> 대학 8부 유튜브 </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.urlStyle} onPress={() =>onPressUrl(SNS_URL)}>
            {/* 업데이트 날짜 언제 기도편지인지 또 모든 기도 편지 볼수 있으면 좋을 듯 */}
            <Image source={Images.iconInstagram} />
            <Text style={styles.urlTextStyle}> 인스타그램 </Text>
          </TouchableOpacity>      
        </View>
      </ScrollView>
    </View>
  )
}

export default Home

const defaultBoxStyle ={
  shadowOffset:{height: 0, width: 0},
  shadowColor:'gray',
  shadowRadius: 5,
  shadowOpacity:0.2,
  flex:1,
  backgroundColor:'white',
  marginHorizontal: wsv(20),
  marginVertical:hsv(15),
  height: hsv(113),
  borderRadius: 20,
}

const styles = StyleSheet.create({
  UserInfoBoxStyle:{
    flexDirection:'row',
    marginHorizontal: wsv(20),
    marginTop:hsv(10),
    flex:1,
  },
  InfoImageStyle:{
    
  },
  InforDetailWrapper:{
    flex:3,
    justifyContent:'center',
  },
  InfoDepartment:{
    fontSize: hsv(10),
    marginHorizontal:hsv(3),
  },
  InfName:{
    ...textStyles.boldText,
    fontSize:hsv(20),
  },
  InfoDetailFirst:{
    flex:1,
    justifyContent:'flex-start',
    marginHorizontal:wsv(10),
  },
  InfoDetailSecond:{
    flexDirection:'row',
    flex:1,
    alignItems:'flex-end',
    justifyContent:'flex-start',
    marginHorizontal:wsv(10),
  },
  InfoDetailSelectWrapper:{
    flex:1,
    flexDirection:'row',
    alignItems:'flex-end',
    justifyContent:'center'
  },
  AttendanceCheckStyle:{
    shadowOffset:{height: 0, width: 0},
    shadowColor:'gray',
    shadowRadius: 5,
    shadowOpacity:0.2,
    flex:1,
    backgroundColor:'white',
    marginHorizontal: wsv(20),
    marginTop:hsv(20),
    marginBottom:hsv(15),
    height: hsv(50),
    borderRadius: 20,
    alignItems:'center',
    flexDirection:'row',
  },
  FollowNewsStyle:{
    ...defaultBoxStyle,
    alignItems:'center',
    justifyContent:'center'
  },
  PrayerLetterStyle:{
    ...defaultBoxStyle,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
  },
  MyGBS_Style:{
    ...defaultBoxStyle,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
  },
  ChurchNewsStyle:{
    ...defaultBoxStyle,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
  },
  infoTextView:{
    marginHorizontal: wsv(20),
    
  },
  urlViewWrapper:{
    flex:1,
    paddingTop:hsv(10),
    borderTopWidth:1,
    borderColor:'black',
    marginHorizontal: wsv(20),
    marginVertical:hsv(15),
    height: hsv(113),
    borderRadius: 20,
  },
  urlStyle:{
    flexDirection:'row',
    alignItems:'center',
    margin:hsv(8),
  },
  urlTextStyle:{
    ...textStyles.boldText,
    marginLeft:wsv(10),
  }
})
