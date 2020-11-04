import React, {useEffect} from 'react'
import { View, Text } from 'react-native'
import { inject } from 'mobx-react';

const Calendar = inject("rootStore")(({ navigation, rootStore }) => {
    const { userStore } = rootStore;
    useEffect(() => {
        console.log(userStore);
        const result = userStore.getCheckLogin();
        console.log(result);
        userStore.setChekcLogin(true);
    }, [])

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Calendar</Text>
        </View>
    )
})

export default Calendar
