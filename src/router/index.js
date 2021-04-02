import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import { Login, Register, Splash } from '../pages'

const Stack = createStackNavigator()

export const Router = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name='Splash' component={Splash} />
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='Register' component={Register} />
        </Stack.Navigator>
    )
}