import React from 'react'
import { View, Pressable, Text, VStack, Image, HStack, FlatList, Divider, ScrollView } from 'native-base'
import { WINDOW_HEIGHT, WINDOW_WIDTH } from '../utils/dimensions'
import Ionicons from "react-native-vector-icons/dist/Ionicons"
import { useNavigation } from '@react-navigation/native'
import { StyleSheet } from 'react-native'

type Props = {}

export default function AboutProvider({ }: Props) {
    const navigation = useNavigation()
    return (
        <ScrollView flex={1} bgColor="white">
            <View h={WINDOW_HEIGHT * 0.35} bgColor="cyan.300" px="6" pt="12" pb="4" borderBottomLeftRadius="3xl" borderBottomRightRadius="3xl">
                <HStack alignItems="center">
                    <Pressable onPress={() => navigation.goBack()}>
                        <Ionicons
                            name="chevron-back"
                            color="white"
                            size={WINDOW_WIDTH * 0.07}
                        />
                    </Pressable>

                    <Text ml="8" fontSize="md" fontWeight="semibold" color="white">About Provider</Text>
                </HStack>
            </View>

            <View flex={1} p={4}>
                <VStack style={styles.details} space={2}>
                    <Image source={require("../assets/images/profile0.jpeg")} alt="Provider" w={WINDOW_WIDTH * 0.25} h={WINDOW_WIDTH * 0.25} borderRadius="full" />

                    <Text fontSize="md" fontWeight="semibold">Valentine Orga</Text>

                    <Text fontSize="xs" fontWeight="semibold" color="gray.500">Plumber</Text>

                    <HStack alignItems="center" space={2}>
                        <Text fontSize="xs" fontWeight="semibold" color="gray.500">Member since 2021</Text>

                        <HStack alignItems="center" space={1}>
                            <Ionicons
                                name="star"
                                color="yellow"
                                size={WINDOW_WIDTH * 0.03}
                            />
                            <Text fontSize="xs" fontWeight="semibold" color="gray.500">4.4</Text>
                        </HStack>
                    </HStack>

                    <Pressable>
                        <Text fontSize="xs" fontWeight="semibold" color="cyan.500">Why Choose Me?</Text>
                    </Pressable>

                    {/* Favorite toggle */}
                    <Pressable position={"absolute"} top={5} right={5} bgColor={"gray.100"} borderRadius={"full"} p={2.5} onPress={() => navigation.goBack()}>
                        <Ionicons name="heart-outline" color="#888" size={WINDOW_WIDTH * 0.06} />
                    </Pressable>
                </VStack>
            </View>

            <Text mt="16" fontSize="xs" fontWeight="semibold" ml={4}>Known Languages</Text>
            <View style={styles.languagesContainer} ml={4} mt={2}>
                <Text style={styles.language}>Igbo</Text>
                <Text style={styles.language}>English</Text>
                <Text style={styles.language}>Hausa</Text>
                <Text style={styles.language}>Yoruba</Text>
            </View>

            <Text mt="4" fontSize="xs" fontWeight="semibold" ml={4}>Team</Text>
            <HStack alignItems="center" mx={4} mt={2}>
                {[1, 2, 3].map((_, index) => (
                    <Image
                        key={_.toString()}
                        source={require("../assets/images/profile0.jpeg")}
                        alt="Provider"
                        w={12} h={12}
                        borderRadius="full" borderWidth={2} borderColor="white"
                        ml={index !== 0 ? -2 : 0}
                        zIndex={_}
                    />
                ))}
                <Pressable
                    w={10} h={10}
                    borderRadius="full" borderWidth={2} borderColor="purple.300"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Text color="purple.300" fontSize="xs" fontWeight="semibold">+3</Text>
                </Pressable>
            </HStack>


            <HStack justifyContent="space-between" alignItems="center" my="4" mx={4}>
                <Text fontSize="sm" fontWeight="semibold">Services</Text>
                <Pressable><Text color="gray.600" fontSize="xs" fontWeight="light">View All</Text></Pressable>
            </HStack>

            {[1, 2, 3, 4, 5].map(_ => (
                <Pressable key={_.toString()} onPress={() => navigation.navigate("Service")} bgColor="gray.100" borderRadius="lg" p="4" mt="4" mx={4}>
                    <HStack space={2}>
                        <View borderRadius="lg">
                            <Image source={require("../assets/images/profile0.jpeg")} alt="Provider" w={WINDOW_WIDTH * 0.22} h={WINDOW_WIDTH * 0.22} borderRadius="xl" />

                            <HStack position="absolute" top={1} right={1} alignItems="center" bgColor="rgba(255,255,255,0.85)" borderRadius="xl" px={2} py={0.5} space={0.5}>
                                <Ionicons
                                    name="star"
                                    color="yellow"
                                    size={WINDOW_WIDTH * 0.03}
                                />
                                <Text fontSize={10} fontWeight="semibold">4.4</Text>
                            </HStack>
                        </View>

                        <VStack alignItems="flex-start" space={1}>
                            <Text fontSize="sm" fontWeight="semibold">Filter Replacement</Text>
                            <Text fontSize="xs" fontWeight="semibold" color="cyan.500">AC Maintenance and Cleaning</Text>

                            <View bgColor="cyan.700" px={2} py={1} borderRadius="2xl" mt={1}>
                                <Text color="white" fontSize="xs" fontWeight="semibold">$15.00</Text>
                            </View>
                        </VStack>
                    </HStack>
                </Pressable>
            ))}

            {/* <FlatList
                key={"_"}
                data={[1, 2, 3, 4, 5, 6]}
                keyExtractor={item => item.toString()}
                renderItem={({ item, index }) => (
                    <Pressable onPress={() => navigation.navigate("Service")} bgColor="gray.100" borderRadius="lg" p="4">
                        <HStack space={2}>
                            <View borderRadius="lg">
                                <Image source={require("../assets/images/profile0.jpeg")} alt="Provider" w={WINDOW_WIDTH * 0.22} h={WINDOW_WIDTH * 0.22} borderRadius="xl" />

                                <HStack position="absolute" top={1} right={1} alignItems="center" bgColor="rgba(255,255,255,0.85)" borderRadius="xl" px={2} py={0.5} space={0.5}>
                                    <Ionicons
                                        name="star"
                                        color="yellow"
                                        size={WINDOW_WIDTH * 0.03}
                                    />
                                    <Text fontSize={10} fontWeight="semibold">4.4</Text>
                                </HStack>
                            </View>

                            <VStack alignItems="flex-start" space={1}>
                                <Text fontSize="sm" fontWeight="semibold">Filter Replacement</Text>
                                <Text fontSize="xs" fontWeight="semibold" color="cyan.500">AC Maintenance and Cleaning</Text>

                                <View bgColor="cyan.700" px={2} py={1} borderRadius="2xl" mt={1}>
                                    <Text color="white" fontSize="xs" fontWeight="semibold">$15.00</Text>
                                </View>
                            </VStack>
                        </HStack>
                    </Pressable>
                )}
                ListHeaderComponent={
                    <HStack justifyContent="space-between" alignItems="center" my="4">
                        <Text fontSize="sm" fontWeight="semibold">Services</Text>
                        <Pressable><Text color="gray.600" fontSize="xs" fontWeight="light">View All</Text></Pressable>
                    </HStack>
                }
                ItemSeparatorComponent={<Divider borderWidth={10} borderColor={"white"} />}
                my="4"
                px="4"
            /> */}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    details: {
        borderRadius: 10,
        padding: 10,
        paddingTop: 60,
        elevation: 2,
        backgroundColor: 'white',
        width: '100%',
        alignSelf: 'center',
        alignItems: 'center',
        marginTop: -220,
    },
    languagesContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
    },
    language: {
        backgroundColor: "cyan",
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 10,
        marginLeft: 5
    }
})