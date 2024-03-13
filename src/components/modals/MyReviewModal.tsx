import { Button, HStack, Pressable, Text, VStack, View } from 'native-base';
import React from 'react'
import Modal from "react-native-modal"
import { WINDOW_WIDTH } from '../../utils/dimensions';
import Ionicons from "react-native-vector-icons/dist/Ionicons"
import StarRating from 'react-native-star-rating-widget'

type Props = {
    isVisible: boolean;
    onClose: () => void;
}

export default function MyReviewModal({ isVisible, onClose }: Props) {
    const handleOnClose = () => {
        onClose()
    }

    return (
        <Modal isVisible={isVisible} animationIn="slideInRight" animationOut="slideOutLeft" onBackButtonPress={handleOnClose} onBackdropPress={handleOnClose}>
            <View>
                {/* header */}
                <HStack bgColor="cyan.300" p="4" flexDirection="row" alignItems="center" justifyContent="space-between">
                    <Text fontSize="sm" fontWeight="semibold" color="white">Your Review</Text>

                    <Pressable onPress={handleOnClose}>
                        <Ionicons
                            name="close-outline"
                            color="white"
                            size={WINDOW_WIDTH * 0.06}
                        />
                    </Pressable>
                </HStack>

                <VStack p={"4"} bgColor={"gray.100"} space={4}>
                    <View bgColor={"white"} borderRadius={"xl"} p={3}>
                        <StarRating rating={4} starSize={WINDOW_WIDTH * 0.04} onChange={() => null} />
                    </View>

                    <View bgColor={"white"} borderRadius={"xl"} p={3}>
                        <Text
                            fontSize={"xs"}
                            color={"gray.400"}>
                            Proident minim incididunt aliqua incididunt ut Lorem reprehenderit dolore nulla quis.
                        </Text>
                    </View>

                    <HStack mt="4" alignItems="center" justifyContent="space-between">
                        <Button py="3" borderRadius={"lg"} bgColor="white" w="47%" onPress={() => null}><Text color="black" bold fontSize="sm">Cancel</Text></Button>
                        <Button py="3" borderRadius={"lg"} bgColor="cyan.300" w="47%" onPress={() => null}><Text color="white" bold fontSize="sm">Submit</Text></Button>
                    </HStack>
                </VStack>
            </View>
        </Modal>
    )
}