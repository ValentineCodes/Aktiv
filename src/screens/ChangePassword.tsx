import { Text, View, Pressable, ScrollView, VStack } from 'native-base'
import React from 'react'
import Ionicons from "react-native-vector-icons/dist/Ionicons"
import { WINDOW_WIDTH } from '../utils/dimensions'
import { useNavigation } from '@react-navigation/native'
import Button from '../components/Button'
import PasswordInput from '../components/forms/PasswordInput'

type Props = {}

export default function ChangePassword({ }: Props) {
    const navigation = useNavigation()

    return (
        <View flex={1} bgColor="white">
            {/* header */}
            <View bgColor="cyan.300" px="6" pt="12" pb="4" flexDirection="row" alignItems="center">
                <Pressable onPress={() => navigation.goBack()}>
                    <Ionicons
                        name="chevron-back"
                        color="white"
                        size={WINDOW_WIDTH * 0.07}
                    />
                </Pressable>

                <Text ml="8" fontSize="md" fontWeight="semibold" color="white">Change Password</Text>
            </View>

            <ScrollView flex={"1"} px={5}>
                <VStack space={"4"} mt={"4"}>
                    <PasswordInput placeholder='Old Password' onChange={value => console.log(value)} />

                    <PasswordInput placeholder='New Password' onChange={value => console.log(value)} />

                    <PasswordInput placeholder='Re-enter Password' onChange={value => console.log(value)} />

                    <Button
                        title='Confirm'
                        onPress={() => console.log("Changing Password...")}
                    />
                </VStack>
            </ScrollView>
        </View>
    )
}