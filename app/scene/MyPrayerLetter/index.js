import React, { useEffect } from 'react'
import { View, Text } from 'react-native'

const MyPrayerLetter = ({navigation}) => {
    useEffect(() => {
        const unsubscribe = navigation.addListener('tabPress', e => {
          // Prevent default behavior
    
          alert('로그인 기도편지');
          // Do something manually
          // ...
        });
        return unsubscribe;
      }, [navigation]);
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>MyPrayerLetter</Text>
        </View>
    )
}

export default MyPrayerLetter
