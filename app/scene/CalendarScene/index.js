import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native'
import { inject } from 'mobx-react';
import {Calendar, CalendarList, Agenda, LocaleConfig} from 'react-native-calendars';
import { getWidthScaledValue as wsv, getHeightScaledValue as hsv } from '../../api/util';
import moment from 'moment';
import textStyles from '../../assets/styles/textStyles';

LocaleConfig.locales['ko'] = {
  monthNames: ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'],
  monthNamesShort: ['Janv.','Févr.','Mars','Avril','Mai','Juin','Juil.','Août','Sept.','Oct.','Nov.','Déc.'],
  dayNames: ['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'],
  dayNamesShort: ['일','월','화','수','목','금','토'],
  today: 'Aujourd\'hui'
};
LocaleConfig.defaultLocale = 'ko';
const TODAY = moment();
const CalendarScene = inject("rootStore")(({ navigation, rootStore }) => {
    const { userStore } = rootStore;
    const [ today, setToday ] = useState(TODAY);
    useEffect(() => {
        console.log(userStore);
        const result = userStore.getCheckLogin();
        console.log(result);
        userStore.setChekcLogin(true);
    }, [])
    const onDayPress = () =>{}
    return (
        <SafeAreaView style={{justifyContent:'center'}} >
            <View style={styles.calendarWrapper}>
                <Calendar
                    current={today.format('YYYY-MM-DD')}
                    style={styles.calendar}
                    theme={{
                        calendarBackground: '#f0f0f0',
                        textSectionTitleColor: '#b6c1cd',
                        textSectionTitleDisabledColor: '#d9e1e8',
                        selectedDayBackgroundColor: '#00adf5',
                        selectedDayTextColor: '#ffffff',
                        todayTextColor: '#00adf5',
                        dayTextColor: '#2d4150',
                        textDisabledColor: '#d9e1e8',
                        dotColor: '#00adf5',
                        selectedDotColor: '#ffffff',
                        disabledArrowColor: '#d9e1e8',
                        monthTextColor: 'white',
                        indicatorColor: 'blue',
                        textDayFontWeight: '300',
                        textMonthFontWeight: 'bold',
                        textDayHeaderFontWeight: '300',
                        textDayFontSize: 16,
                        textMonthFontSize: wsv(34),
                        textDayHeaderFontSize: 16
                    }}
                    monthFormat={'yyyy년 MM월'}
                    onDayPress={onDayPress}
                    renderArrow={(direction) => {
                        let arrowText
                        if( direction === 'right' ) arrowText = today.clone().add(1, 'month')
                        if( direction === 'left' ) arrowText = today.clone().subtract(1, 'month')
                        return(
                        <View style={styles.calendarArrow}>
                            <Text style={styles.calendarArrowText}>{arrowText.format('YYYY년 MM월')}</Text>
                        </View>)
                    }}
                />
            </View>
            <View style={{ height:wsv(811) }}>
                <ScrollView style={styles.calendarScheduleWrapper}>
                    <View style={[styles.calendarSchedule,{backgroundColor:'#0ab7ca'}]}>
                        <View style={styles.calendarScheduleTitleWrapper}>
                            <Text style={styles.calendarScheduleTitle}>12일</Text>
                        </View>
                        <View style={styles.calendarScheduleContainer}>
                            <Text style={styles.calendarScheduleContent}>2020-첫 LT</Text>
                        </View>
                    </View>
                    <View style={[styles.calendarSchedule,{backgroundColor:'#e63258'}]}>
                        <View style={styles.calendarScheduleTitleWrapper}>
                            <Text style={styles.calendarScheduleTitle}>13일</Text>
                        </View>
                        <View style={styles.calendarScheduleContainer}>
                            <Text style={styles.calendarScheduleContent}>새 텀 시작</Text>
                            <Text style={styles.calendarScheduleContent}>선한 사마리아 후원금 보고</Text>
                            <Text style={styles.calendarScheduleContent}>홈 GBS</Text>
                        </View>
                    </View>
                    <View style={[styles.calendarSchedule,{backgroundColor:'#ff9c1b'}]}>
                        <View style={styles.calendarScheduleTitleWrapper}>
                            <Text style={styles.calendarScheduleTitle}>18일</Text>
                        </View>
                        <View style={styles.calendarScheduleContainer}>
                            <Text style={styles.calendarScheduleContent}>갈멜산 기도회</Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    )
})

export default CalendarScene

const styles = StyleSheet.create({
    calendarWrapper:{
    },
    calendar: {
      marginBottom: 10,
      backgroundColor:'#6a6a6a'
    },
    calendarArrow:{
    },
    calendarArrowText:{
        fontSize:wsv(30),
        color:'rgba( 255, 255, 255, 0.5)'
    },
    calendarScheduleWrapper:{
        flex:1,
    },
    calendarSchedule:{
        flexDirection:'row',
        paddingVertical:wsv(41),
        paddingLeft:wsv(72)
    },
    calendarScheduleTitleWrapper:{
        marginRight:wsv(10)
    },
    calendarScheduleTitle:{
        ...textStyles.mediumText,
        fontSize:wsv(28),
        color:'rgba( 255, 255, 255, 0.5)'
    },
    calendarScheduleContainer:{

    },
    calendarScheduleContent:{
        ...textStyles.boldText,
        fontSize:wsv(32),
        color:'white'
    }
    
})