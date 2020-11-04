import React, {useEffect} from 'react'
import { View, Text } from 'react-native'
import { inject } from 'mobx-react';
import { useFocusEffect, useIsFocused } from '@react-navigation/native';

const InitTabComponet = (props) => {
    const { component, rootStore } = props
    useFocusEffect(()=>{
        console.log("!")
    },[])

    return (
        React.createElement( component, { ...props } )
    );
}

export default InitTabComponet
