import { useNavigation } from '@react-navigation/native'
import { HStack, Image, Pressable, ScrollView, Text, VStack, View } from 'native-base'
import React from 'react'
import Ionicons from "react-native-vector-icons/dist/Ionicons"
import { WINDOW_WIDTH } from '../../../utils/dimensions'

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

export default function Profile({ }: Props) {
    const navigation = useNavigation()

    return (
        <View flex={1} bgColor="white">
            {/* header */}
            <HStack bgColor="cyan.300" px="4" pt="12" pb="4" flexDirection="row" alignItems="center" justifyContent="space-between">
                <Text fontSize="md" fontWeight="semibold" color="white">Profile</Text>

                <Ionicons
                    name="settings-outline"
                    color="white"
                    size={WINDOW_WIDTH * 0.06}
                />
            </HStack>

            {/* Bio */}
            <ScrollView flex={"1"}>
                <VStack alignItems="center" py="6" space={2}>
                    <View borderWidth={3} borderRadius={"full"} borderColor={"cyan.300"}>
                        <Image source={require("../../../assets/images/profile0.jpeg")} alt="Service" w={WINDOW_WIDTH * 0.25} h={WINDOW_WIDTH * 0.25} borderRadius="full" borderWidth={3} borderColor={"black"} />

                        <Pressable onPress={() => navigation.navigate("EditProfile")} position={"absolute"} bottom={0} right={-5} bgColor={"cyan.300"} borderRadius={"full"} borderWidth={2} borderColor={"black"} p={2}>
                            <Ionicons
                                name="create-outline"
                                color="white"
                                size={WINDOW_WIDTH * 0.05}
                            />
                        </Pressable>
                    </View>
                    <VStack alignItems="center">
                        <Text fontSize={"sm"} fontWeight={"semibold"}>Valentine Orga</Text>
                        <Text fontSize={"xs"} color={"gray.400"}>Valentineorga@gmail.com</Text>
                    </VStack>
                </VStack>

                <View p="4" bgColor={"cyan.100"}>
                    <Text fontSize={"sm"} fontWeight={"semibold"} color={"cyan.600"}>GENERAL</Text>
                </View>
                <Section
                    icon={<Ionicons
                        name="heart-outline"
                        color="black"
                        size={WINDOW_WIDTH * 0.055}
                    />}
                    title={"Favorite Services"}
                    onPress={() => navigation.navigate("FavoriteServices")}
                />
                <Section
                    icon={<Ionicons
                        name="heart-outline"
                        color="black"
                        size={WINDOW_WIDTH * 0.055}
                    />}
                    title={"Favorite Providers"}
                    onPress={() => navigation.navigate("FavoriteProviders")}
                />
                <Section
                    icon={<Ionicons
                        name="star-outline"
                        color="black"
                        size={WINDOW_WIDTH * 0.055}
                    />}
                    title={"Rate Us"}
                    onPress={() => console.log("Title")}
                />
                <Section
                    icon={<Ionicons
                        name="star-outline"
                        color="black"
                        size={WINDOW_WIDTH * 0.055}
                    />}
                    title={"My Reviews"}
                    onPress={() => navigation.navigate("MyReviews")}
                />

                <View p="4" bgColor={"cyan.100"}>
                    <Text fontSize={"sm"} fontWeight={"semibold"} color={"cyan.600"}>ABOUT APP</Text>
                </View>
                <Section
                    icon={<Ionicons
                        name="shield-checkmark-outline"
                        color="black"
                        size={WINDOW_WIDTH * 0.055}
                    />}
                    title={"Privacy Policy"}
                    onPress={() => console.log("Title")}
                    hideArrow
                />
                <Section
                    icon={<Ionicons
                        name="reader-outline"
                        color="black"
                        size={WINDOW_WIDTH * 0.055}
                    />}
                    title={"Terms & Conditions"}
                    onPress={() => console.log("Title")}
                    hideArrow
                />

                <View p="4" bgColor={"red.100"}>
                    <Text fontSize={"sm"} fontWeight={"semibold"} color={"red.600"}>DANGER ZONE</Text>
                </View>
                <Section
                    icon={<Ionicons
                        name="person-remove-outline"
                        color="black"
                        size={WINDOW_WIDTH * 0.055}
                    />}
                    title={"Delete Account"}
                    onPress={() => console.log("Title")}
                    hideArrow
                />

                <Pressable>
                    <Text fontSize={"lg"} color={"cyan.600"} fontWeight={"semibold"} textAlign={"center"} mt={"4"} mb={"10"}>Logout</Text>
                </Pressable>
            </ScrollView>
        </View>
    )
}