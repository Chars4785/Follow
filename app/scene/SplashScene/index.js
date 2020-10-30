import React, { useEffect } from 'react'
import { View, Text,Image,StyleSheet, ActivityIndicator,SafeAreaView} from 'react-native'
import Images from '@assets/images';
import { getWidthScaledValue as wsv, getHeightScaledValue as hsv } from '../../api/util';
import DeviceInfo from 'react-native-device-info';
import { inject } from 'mobx-react';

const description = `
예수님을 따르는 제자가 되어
세상을 따르지 않고
세상이 예수님을 따르게 하는 공동체
대학 8부 Follow
`

const SplashScene = ({ navigation }) => {
    useEffect(()=>{
        setTimeout(()=>{
            // navigation.replace('Login')
            navigation.replace('TabNavigator')
        },2000)
    },[])
    
    return (
        <SafeAreaView style={styles.splashImage}>
            <View style={styles.splashWrapper}>
                <Image source={Images.imgSplash}/>
                <Text style={styles.descriptionStyle}>
                    {description}
                </Text>
                <ActivityIndicator size="small" color="#6B9FE8" />
            </View>
            <View style={styles.versionView}>
                <Text> {DeviceInfo.getVersion()} </Text>
            </View>
        </SafeAreaView>
    )
}

export default SplashScene


const styles = StyleSheet.create({
    splashWrapper:{
        flex:5,
        justifyContent:'center',
        alignItems:'center'
    },  
    splashImage:{
        flex: 1, 
        alignItems:'center',
        backgroundColor:'white',
        justifyContent: 'space-between'
    },
    descriptionStyle:{
        textAlign:'center',
        justifyContent:'center',
        alignItems:'center',
        lineHeight:hsv(20),
    },
    versionView:{
        flex:1,
        justifyContent:'flex-end'
    }
})