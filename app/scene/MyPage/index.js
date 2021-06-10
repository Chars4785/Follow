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

const MyPage = () => {
    return (
        <SafeAreaView style={styles.root}>
            <View style={styles.infoFristWrapper}>
                <View style={styles.infoBoxStyle}>
                    <View style={styles.infoTitleStyle}>
                        <Text style={styles.infoTitleText}>이름</Text>
                    </View>
                    <View style={styles.infoContentStyle}>
                        <Text style={styles.infoContentText}>박지원</Text>
                    </View>
                </View>
                <View style={styles.infoBoxStyle}>
                    <View style={styles.infoTitleStyle}>
                        <Text style={styles.infoTitleText}>생년월일</Text>
                    </View>
                    <View style={styles.infoContentStyle}>
                        <Text style={styles.infoContentText}>94/12/23</Text>
                    </View>
                </View>
                <View style={styles.infoBoxStyle}>
                    <View style={styles.infoTitleStyle}>
                        <Text style={styles.infoTitleText}>휴대폰 번호</Text>
                    </View>
                    <View style={styles.infoContentStyle}>
                        <Text style={styles.infoContentText}>010 9074 0000</Text>
                    </View>
                </View>
                <View style={styles.infoBoxStyle}>
                    <View style={styles.infoTitleStyle}>
                        <Text style={styles.infoTitleText}>아이디</Text>
                    </View>
                    <View style={styles.infoContentStyle}>
                        <Text style={styles.infoContentText}>jiwon park</Text>
                    </View>
                </View>
            </View>
            <View style={styles.infoSecondWrapper}>
                <View style={styles.infoBoxStyle}>
                    <View style={styles.infoTitleStyle}>
                        <Text style={styles.infoTitleText}>리더</Text>
                    </View>
                    <View style={styles.infoContentStyle}>
                        <Text style={styles.infoContentText}>이순종</Text>
                    </View>
                </View>
                <View style={styles.infoBoxStyle}>
                    <View style={styles.infoTitleStyle}>
                        <Text style={styles.infoTitleText}>코디조</Text>
                    </View>
                    <View style={styles.infoContentStyle}>
                        <Text style={styles.infoContentText}>박요한</Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default MyPage

const styles = StyleSheet.create({
    root:{

    },
    infoFristWrapper:{
        marginTop:wsv(340),
    },
    infoBoxStyle:{
        flexDirection:'row',
        backgroundColor:'white',
        height:wsv(109),
        width:'100%'
    },
    infoTitleStyle:{
        width:wsv(248),
        justifyContent:'center',
        alignItems:'center'
    },
    infoTitleText:{
        color:'#757575',
        fontSize:wsv(30)
    },
    infoContentStyle:{
        justifyContent:'center',
        alignItems:'center'
    },
    infoContentText:{
        ...textStyles.mediumText,
        fontSize:wsv(34)
    },
    infoSecondWrapper:{
        marginTop:wsv(47)
    }
})
