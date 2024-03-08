import { Divider, HStack, FlatList, Image, Pressable, ScrollView, Text, VStack, View } from 'native-base'
import React from 'react'
import Ionicons from "react-native-vector-icons/dist/Ionicons"
import MaterialIcons from "react-native-vector-icons/dist/MaterialIcons"
import FontAwesome from "react-native-vector-icons/dist/FontAwesome"
import { WINDOW_WIDTH } from '../utils/dimensions'
import { useNavigation } from '@react-navigation/native'
import { StyleSheet } from 'react-native'
import StarRating from 'react-native-star-rating-widget'

type Props = {}

const FAQs = [
    { title: "How will you clean my shit?", content: "I will crawl up that fucking toilet and liberate those faeces in pieces" },
    { title: "How seriously do you take this job?", content: "I'm a sex addict yet I resist the urge to sleep with yo wives and daughters" }
];

export default function Service({ }: Props) {
    const navigation = useNavigation()

    return (
        <ScrollView bgColor={"white"}>
            <Pressable w={"full"} h={WINDOW_WIDTH * 0.8}>
                <Image source={require("../assets/images/handyman1.webp")} alt="handyman" w="full" h="full" borderTopLeftRadius={15} borderTopRightRadius={15} />

                <Pressable position={"absolute"} top={10} left={5} bgColor={"gray.100"} borderRadius={"full"} p={2.5} onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back" color="black" size={WINDOW_WIDTH * 0.06} />
                </Pressable>

                <Pressable position={"absolute"} top={10} right={5} bgColor={"gray.100"} borderRadius={"full"} p={2.5} onPress={() => navigation.goBack()}>
                    <Ionicons name="heart-outline" color="black" size={WINDOW_WIDTH * 0.06} />
                </Pressable>

                <Pressable position={"absolute"} top={10} right={75} bgColor={"gray.100"} borderRadius={"full"} p={2.5} onPress={() => navigation.goBack()}>
                    <MaterialIcons name="location-on" color="black" size={WINDOW_WIDTH * 0.06} />
                </Pressable>
            </Pressable>

            <View flex={1} p={4}>
                <VStack style={styles.details} space={2}>
                    <Text color="cyan.700" fontSize={"xs"}>Plumbing</Text>
                    <Text fontSize={"sm"} fontWeight={"semibold"}>Residential Security Patrol</Text>
                    <Text color={"cyan.700"} fontSize={"xs"} fontWeight={"semibold"}>N1200</Text>
                    <HStack alignItems={"center"} justifyContent={"space-between"}>
                        <Text fontSize={"xs"} fontWeight={"light"}>Completion</Text>
                        <Text fontSize={"xs"} fontWeight={"semibold"}>98.50%</Text>
                    </HStack>
                    <HStack alignItems={"center"} justifyContent={"space-between"}>
                        <Text fontSize={"xs"} fontWeight={"light"}>Rating</Text>
                        <HStack alignItems={"center"} space={1}>
                            <FontAwesome name="star" size={WINDOW_WIDTH * 0.05} />
                            <Text fontSize={"xs"} fontWeight={"semibold"}>4.0</Text>
                        </HStack>
                    </HStack>
                </VStack>

                <Text fontWeight={"semibold"} fontSize={"sm"} mt={5} mb={2}>Description</Text>
                <Text fontSize={"xs"} fontWeight={"light"} color={"black"}>Sint id id nostrud sit laboris qui cupidatat non duis sit.Officia adipisicing eu consequat sint magna ullamco duis nisi aliqua nulla irure cillum. Qui pariatur mollit nisi dolore elit. Elit cupidatat consequat ad velit esse excepteur laborum laborum.</Text>

                <Text fontWeight={"semibold"} fontSize={"sm"} mt={5} mb={2}>Available At</Text>
                <View flexDirection={"row"} flexWrap={"wrap"}>
                    {[1, 2].map(_ => (
                        <View key={_.toString()} bgColor={"gray.100"} py={2} px={4} borderRadius={10} alignSelf={"flex-start"} mr={2} mt={2}>
                            <Text color={"black"} fontWeight={"semibold"} fontSize={'xs'}>Goodwill Junction</Text>
                        </View>
                    ))}
                </View>

                <Text fontWeight={"semibold"} fontSize={"sm"} mt={5} mb={2}>About Provider</Text>
                <Pressable onPress={() => navigation.navigate("AboutProvider")}>
                    <HStack bgColor={"gray.100"} p={4} alignItems={"center"} justifyContent={"space-between"}>
                        <HStack alignItems={"center"} space={4}>
                            <Image source={require("../assets/images/profile0.jpeg")} alt="Service" w={16} h={16} borderRadius="full" />

                            <VStack>
                                <Text fontSize={"sm"} fontWeight={"semibold"}>Valentine Orga</Text>
                                <StarRating rating={4} starSize={WINDOW_WIDTH * 0.04} onChange={() => null} />
                            </VStack>
                        </HStack>

                        <MaterialIcons name="verified" size={WINDOW_WIDTH * 0.07} color={"#1D96E9"} />
                    </HStack>
                </Pressable>

                <Text fontWeight={"semibold"} fontSize={"sm"} mt={5} mb={2}>FAQs</Text>

                <Text fontWeight={"semibold"} fontSize={"sm"} mt={5} mb={2}>Reviews(1)</Text>
                <HStack bgColor={"gray.100"} p={4} justifyContent={"space-between"}>
                    <Image source={require("../assets/images/profile0.jpeg")} alt="Service" w={10} h={10} borderRadius="full" />

                    <VStack px={4} space={2}>
                        <HStack justifyContent={"space-between"} alignItems={"flex-start"}>
                            <VStack>
                                <Text fontSize={"sm"} fontWeight={"semibold"}>Valentine Orga</Text>
                                <Text fontSize={"xs"} fontWeight={"light"}>29 Sept, 2023</Text>
                            </VStack>

                            <HStack alignItems={"center"} space={1}>
                                <FontAwesome name="star" size={WINDOW_WIDTH * 0.05} />
                                <Text fontSize={"xs"} fontWeight={"semibold"}>4.0</Text>
                            </HStack>
                        </HStack>

                        <Text fontSize={"sm"} fontWeight={"light"} color={"black"}>In eu eiusmod labore commodo deserunt ipsum incididunt fugiat dolore.</Text>
                    </VStack>
                </HStack>
            </View>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    details: {
        borderRadius: 15,
        padding: 10,
        elevation: 2,
        backgroundColor: 'white',
        width: '100%',
        alignSelf: 'center',
        marginTop: -60
    }
})