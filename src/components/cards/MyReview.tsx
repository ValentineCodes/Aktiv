import { HStack, Image, Pressable, Text, VStack } from 'native-base'
import React, { useState } from 'react'
import Ionicons from "react-native-vector-icons/dist/Ionicons"
import { WINDOW_WIDTH } from '../../utils/dimensions'
import StarRating from 'react-native-star-rating-widget'
import MyReviewModal from '../modals/MyReviewModal'

type Props = {}

export default function MyReview({ }: Props) {
    const [showModal, setShowModal] = useState(false)
    return (
        <VStack bgColor={"gray.100"} borderRadius={15} p={4} space={4}>
            <HStack space={4}>
                <Image
                    source={require("../../assets/images/handyman1.webp")}
                    alt="handyman"
                    w="20%"
                    style={{ aspectRatio: 1 }}
                    borderRadius={15}
                />

                <VStack space={4} flex={1}>
                    <Text fontSize={"sm"} fontWeight={"semibold"}>Indoor Plumbing</Text>
                    <Pressable ml={2}>
                        <Text fontSize={"xs"} color={"gray.400"}>View Detail</Text>
                    </Pressable>
                </VStack>
            </HStack>

            <VStack bgColor={"white"} borderRadius={15} p={4}>
                <HStack alignItems={"center"} justifyContent={"space-between"} px={2} pb={3} borderBottomWidth={0.5} borderBottomColor={"gray.300"}>
                    <Text fontSize={"sm"} fontWeight={"semibold"}>Your Comment</Text>

                    <HStack alignItems={"center"} space={4}>
                        <Pressable onPress={() => setShowModal(true)}>
                            <Ionicons
                                name="create-outline"
                                color="gray"
                                size={WINDOW_WIDTH * 0.055}
                            />
                        </Pressable>

                        <Ionicons
                            name="trash-outline"
                            color="gray"
                            size={WINDOW_WIDTH * 0.055}
                        />
                    </HStack>
                </HStack>

                <StarRating rating={4} starSize={WINDOW_WIDTH * 0.04} onChange={() => null} style={{ marginVertical: 6 }} />

                <Text fontSize={"xs"} color={"gray.400"}>Proident minim incididunt aliqua incididunt ut Lorem reprehenderit dolore nulla quis.</Text>
            </VStack>

            <MyReviewModal isVisible={showModal} onClose={() => setShowModal(false)} />
        </VStack>
    )
}