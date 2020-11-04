import React, { useEffect } from 'react'
import { View, Text } from 'react-native'

const PrayerLetterScene = ({navigation}) => {
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
            <Text>PrayerLetterScene</Text>
        </View>
    )
}

export default PrayerLetterScene
