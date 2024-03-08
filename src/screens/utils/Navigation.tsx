import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// screens
import Main from '../Main';
import Service from '../Service';
import Category from '../Category';

type StackScreenParamsList = {
    Main: undefined,
    Service: undefined,
    Category: undefined
};

const StackScreen = createNativeStackNavigator<StackScreenParamsList>();

export default function Navigation() {
    return (
        <NavigationContainer>
            <StackScreen.Navigator
                screenOptions={{
                    headerShown: false,
                    animation: 'slide_from_right',
                }}>
                <StackScreen.Screen name="Main" component={Main} />
                <StackScreen.Screen name="Service" component={Service} />
                <StackScreen.Screen name="Category" component={Category} />
            </StackScreen.Navigator>
        </NavigationContainer>
    )
}