import { Text, View, Pressable, HStack, ScrollView } from 'native-base'
import React from 'react'
import Ionicons from "react-native-vector-icons/dist/Ionicons"
import { WINDOW_WIDTH } from '../utils/dimensions'
import { useNavigation } from '@react-navigation/native'

type Props = {}

type SectionProps = {
    icon: JSX.Element;
    title: string;
    onPress: () => void;
    hideArrow?: boolean;
}
const Section = ({ icon, title, onPress, hideArrow }: SectionProps) => (
    <Pressable flexDirection={"row"} alignItems={"center"} justifyContent={"space-between"} p={"4"} onPress={onPress}>
        <HStack alignItems={"center"} space={4}>
            {icon}

            <Text fontSize={"md"} fontWeight={"semibold"} color={"black"}>{title}</Text>
        </HStack>

        {!hideArrow && <Ionicons
            name="chevron-forward-outline"
            color="black"
            size={WINDOW_WIDTH * 0.05}
        />}
    </Pressable>
)

export default function Settings({ }: Props) {
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

                <Text ml="8" fontSize="md" fontWeight="semibold" color="white">App Setting</Text>
            </View>

            <ScrollView flex={"1"}>
                <Section
                    icon={<Ionicons
                        name="lock-closed-outline"
                        color="black"
                        size={WINDOW_WIDTH * 0.055}
                    />}
                    title={"Change Password"}
                    onPress={() => navigation.navigate("ChangePassword")}
                />
            </ScrollView>
        </View>
    )
}