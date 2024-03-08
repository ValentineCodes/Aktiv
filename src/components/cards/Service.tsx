import { HStack, Image, Pressable, Text, VStack, View } from 'native-base'
import React from 'react'
import { WINDOW_WIDTH } from '../../utils/dimensions'
import StarRating from 'react-native-star-rating-widget'
import { useNavigation } from '@react-navigation/native'

type Props = {}

export default function Service({ }: Props) {
    const navigation = useNavigation()

    return (
        <Pressable w={WINDOW_WIDTH * 0.7} mr={5} onPress={() => navigation.navigate("Service")}>
            <View h={WINDOW_WIDTH * 0.5}>
                <Image source={require("../../assets/images/handyman1.webp")} alt="handyman" w="full" h="full" borderTopLeftRadius={15} borderTopRightRadius={15} />

                <View position="absolute" top={3} left={3} bgColor="cyan.50" borderRadius={15} px={2} py={1}>
                    <Text fontSize={"2xs"} fontWeight={"semibold"} color={"cyan.900"}>PLUMBING</Text>
                </View>
            </View>

            <VStack space={3} p={4} borderBottomLeftRadius={15} borderBottomRightRadius={15} bgColor={"gray.100"}>
                <View position="absolute" top={-15} right={5} bgColor="cyan.700" borderWidth={2} borderColor={"white"} borderRadius={15} px={2} py={1}>
                    <Text fontSize={"xs"} fontWeight={"semibold"} color="white">N1200</Text>
                </View>

                <StarRating rating={4} starSize={WINDOW_WIDTH * 0.04} onChange={() => null} />
                <Text fontSize={"sm"} fontWeight={"semibold"}>Residential Security Patrol</Text>
                <Text fontSize={"xs"} fontWeight={"light"} mt={-2}>98.50% Completion</Text>

                <HStack alignItems={"center"} space={2}>
                    <Image source={require("../../assets/images/profile0.jpeg")} alt="Service" w={8} h={8} borderRadius="full" />
                    <Text fontSize={"xs"}>Valentine Orga</Text>
                </HStack>
            </VStack>
        </Pressable>
    )
}