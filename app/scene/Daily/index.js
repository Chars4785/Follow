import { inject } from 'mobx-react'
import React, {useEffect} from 'react'
import { View, Text } from 'react-native'

const Daily = (props) => {
  console.log(props)
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Daily</Text>
        </View>
    )
}

export default Daily
