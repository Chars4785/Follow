import React, {useEffect} from 'react'
import { View, Text } from 'react-native'

const Daily = ({navigation}) => {
    useEffect(() => {
        const unsubscribe = navigation.addListener('tabPress', e => {
          // Prevent default behavior
    
          alert('로그인 양육일기');
          // Do something manually
          // ...
        });
        return unsubscribe;
      }, [navigation]);


    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Daily</Text>
        </View>
    )
}

export default Daily
