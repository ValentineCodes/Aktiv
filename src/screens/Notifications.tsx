import { HStack, Pressable, Text, View } from 'native-base'
import React from 'react'
import Ionicons from "react-native-vector-icons/dist/Ionicons"
import { WINDOW_WIDTH } from '../utils/dimensions'
import { useNavigation } from '@react-navigation/native'

type Props = {}

export default function Notifications({ }: Props) {
    const navigation = useNavigation()

    return (
        <View flex={1} bgColor="white">
            {/* header */}
            <View bgColor="cyan.300" px="6" pt="12" pb="4">
                <HStack alignItems={"center"} justifyContent={"space-between"}>
                    <HStack alignItems={"center"}>
                        <Pressable onPress={() => navigation.goBack()}>
                            <Ionicons
                                name="chevron-back"
                                color="white"
                                size={WINDOW_WIDTH * 0.07}
                            />
                        </Pressable>

                        <Text ml="8" fontSize="md" fontWeight="semibold" color="white">Notifications</Text>
                    </HStack>

                    <Pressable>
                        <Ionicons
                            name="filter-outline"
                            color="white"
                            size={WINDOW_WIDTH * 0.06}
                        />
                    </Pressable>
                </HStack>
            </View>
        </View>
    )
}