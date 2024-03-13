import { Image, Pressable, Text, View } from 'native-base'
import React from 'react'
import { WINDOW_WIDTH } from '../utils/dimensions'
import { useNavigation } from '@react-navigation/native'
import Ionicons from "react-native-vector-icons/dist/Ionicons"

type Props = {}

export default function EditProfile({ }: Props) {
    const navigation = useNavigation()

    return (
        <View flex={1} bgColor="gray.100">
            {/* header */}
            <View bgColor="cyan.300" px="6" pt="12" pb="4" flexDirection="row" alignItems="center">
                <Pressable onPress={() => navigation.goBack()}>
                    <Ionicons
                        name="chevron-back"
                        color="white"
                        size={WINDOW_WIDTH * 0.07}
                    />
                </Pressable>

                <Text ml="8" fontSize="lg" fontWeight="semibold" color="white">Edit Profile</Text>
            </View>

            <View alignSelf={"center"} my={"4"} borderWidth={3} borderRadius={"full"} borderColor={"cyan.300"}>
                <Image source={require("../assets/images/profile0.jpeg")} alt="Service" w={WINDOW_WIDTH * 0.25} h={WINDOW_WIDTH * 0.25} borderRadius="full" borderWidth={3} borderColor={"black"} />

                <View position={"absolute"} bottom={0} right={-5} bgColor={"cyan.300"} borderRadius={"full"} borderWidth={2} borderColor={"black"} p={2}>
                    <Ionicons
                        name="camera-outline"
                        color="white"
                        size={WINDOW_WIDTH * 0.05}
                    />
                </View>
            </View>
        </View>
    )
}