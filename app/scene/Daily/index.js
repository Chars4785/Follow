import React, {useEffect,useState} from 'react'
import { View, Text, TouchableOpacity, StyleSheet,ScrollView,Image,Linking,AppState, SafeAreaView, TextInput } from 'react-native'
import { getWidthScaledValue as wsv, getHeightScaledValue as hsv } from '../../api/util';
import Images from '@assets/images'
import textStyles from '../../assets/styles/textStyles'
import moment from 'moment';
import { inject } from 'mobx-react';
import images from '../../assets/images';
import Swiper from 'react-native-swiper'
import { useFocusEffect, useIsFocused } from '@react-navigation/native';
const loginPageTitle =
`
이곳은 팔로우 공동체
지체들의 공간입니다.
`
const Daily = (props) => {
    return (    
        <SafeAreaView style={styles.loginRoot}>
            <Image style={styles.loginPageLogoStyle} source={Images.loginPageLogo} />
            <View style={styles.loginPageTitleStyle}>
                <Text style={styles.loginTitleText}>{loginPageTitle}</Text>
            </View>
            <View style={styles.loginViewWrapper}>
                <Text style={styles.loginInputTitleText}>username</Text>
                <TextInput 
                    style={styles.loginTextInputStyle}
                />
            </View>
            <View style={styles.loginViewWrapper}>
                <Text style={styles.loginInputTitleText}>password</Text>
                <TextInput
                    style={styles.loginTextInputStyle}
                />
            </View>
            <View style={styles.loginButton}>
                <Text style={styles.loginButtonText}>로그인 하기</Text>
            </View>
        </SafeAreaView>
    )
}

export default Daily

const styles = StyleSheet.create({
    loginRoot:{
        justifyContent:'center',
        alignItems:'center',
        paddingHorizontal:wsv(82)
    },
    loginPageLogoStyle:{
        marginTop:wsv(110),
        width:wsv(189),
        height:wsv(189)
    },
    loginPageTitleStyle:{

    },
    loginTitleText:{
        ...textStyles.mediumText,
        fontSize:wsv(36)
    },
    loginViewWrapper:{
        marginTop:wsv(36)
    },
    loginInputTitleText:{
        fontSize:wsv(26)
    },
    loginTextInputStyle:{
        marginTop:wsv(15),
        width:wsv(582),
        height:wsv(90),
        backgroundColor:'white'
    },
    loginButton:{
        height:wsv(113),
        width:wsv(582),
        marginTop:wsv(66),
        backgroundColor:'#e63258',
        justifyContent:'center',
        alignItems:'center'
    },
    loginButtonText:{
        ...textStyles.boldText,
        fontSize:wsv(30),
        color:'white'
    }
})