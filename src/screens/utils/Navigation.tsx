import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// screens
import Main from '../Main';
import Service from '../Service';
import Category from '../Category';
import AboutProvider from '../AboutProvider';
import FavoriteServices from '../FavoriteServices';
import FavoriteProviders from '../FavoriteProviders';
import EditProfile from '../EditProfile';
import MyReviews from '../MyReviews';
import Settings from '../Settings';
import ChangePassword from '../ChangePassword';
import Notifications from '../Notifications';

type StackScreenParamsList = {
    Main: undefined,
    Service: undefined,
    Category: undefined,
    AboutProvider: undefined,
    FavoriteServices: undefined,
    FavoriteProviders: undefined,
    EditProfile: undefined,
    MyReviews: undefined,
    Settings: undefined,
    ChangePassword: undefined,
    Notifications: undefined
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
                <StackScreen.Screen name="AboutProvider" component={AboutProvider} />
                <StackScreen.Screen name='FavoriteServices' component={FavoriteServices} />
                <StackScreen.Screen name='FavoriteProviders' component={FavoriteProviders} />
                <StackScreen.Screen name='EditProfile' component={EditProfile} />
                <StackScreen.Screen name='MyReviews' component={MyReviews} />
                <StackScreen.Screen name='Settings' component={Settings} />
                <StackScreen.Screen name='ChangePassword' component={ChangePassword} />
                <StackScreen.Screen name='Notifications' component={Notifications} />
            </StackScreen.Navigator>
        </NavigationContainer>
    )
}