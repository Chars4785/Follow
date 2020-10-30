import React, {useEffect} from 'react'
import { View, Text } from 'react-native'

const FollwerMarker = () => {
    useEffect(() => {
        const unsubscribe = navigation.addListener('tabPress', e => {
          // Prevent default behavior
    
          alert('마이페이지 기도편지');
          // Do something manually
          // ...
        });
        return unsubscribe;
      }, [navigation]);
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>FollwerMarker</Text>
        </View>
    )
}

export default FollwerMarker
