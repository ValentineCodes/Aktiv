import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, View } from 'native-base'
import React from 'react'
import Ionicons from "react-native-vector-icons/dist/Ionicons"

import { WINDOW_WIDTH } from '../../utils/dimensions';

// screens
import Home from './Tab/Home';
import Bookings from './Tab/Bookings';
import Categories from './Tab/Categories';
import Chat from './Tab/Chat';
import Profile from './Tab/Profile';

type Props = {}

const Tab = createBottomTabNavigator();

export default function Main({ }: Props) {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: '#fff',
                    borderTopWidth: 0,
                    paddingBottom: 0
                },
                headerShown: false,
                tabBarItemStyle: { marginVertical: 5 },
            }}>
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Ionicons
                            name="home-outline"
                            color={focused ? 'blue' : 'grey'}
                            size={WINDOW_WIDTH * 0.06}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Bookings"
                component={Bookings}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Ionicons
                            name="home-outline"
                            color={focused ? 'blue' : 'grey'}
                            size={WINDOW_WIDTH * 0.06}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Categories"
                component={Categories}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Ionicons
                            name="home-outline"
                            color={focused ? 'blue' : 'grey'}
                            size={WINDOW_WIDTH * 0.06}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Chat"
                component={Chat}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Ionicons
                            name="home-outline"
                            color={focused ? 'blue' : 'grey'}
                            size={WINDOW_WIDTH * 0.06}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Ionicons
                            name="person-outline"
                            color={focused ? 'blue' : 'grey'}
                            size={WINDOW_WIDTH * 0.06}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}