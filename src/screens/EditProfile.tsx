import { Icon, Image, Input, Pressable, ScrollView, Text, VStack, View } from 'native-base'
import React from 'react'
import { WINDOW_WIDTH } from '../utils/dimensions'
import { useNavigation } from '@react-navigation/native'
import Ionicons from "react-native-vector-icons/dist/Ionicons"
import Button from '../components/Button'
import SelectDropdown from 'react-native-select-dropdown'

type Props = {}

export default function EditProfile({ }: Props) {
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

                <Text ml="8" fontSize="lg" fontWeight="semibold" color="white">Edit Profile</Text>
            </View>

            <ScrollView flex={"1"} px={5}>
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

                <VStack space={"4"}>
                    <Input
                        borderRadius="xl"
                        variant="filled"
                        fontSize="xs"
                        focusOutlineColor={"cyan.300"}
                        InputRightElement={
                            <Icon as={<Ionicons name="person-outline" />} size={5} mr={"3"} color="muted.400" />
                        }
                        placeholder='First Name'
                    />

                    <Input
                        borderRadius="xl"
                        variant="filled"
                        fontSize="xs"
                        focusOutlineColor={"cyan.300"}
                        InputRightElement={
                            <Icon as={<Ionicons name="person-outline" />} size={5} mr={"3"} color="muted.400" />
                        }
                        placeholder='Last Name'
                    />

                    <Input
                        borderRadius="xl"
                        variant="filled"
                        fontSize="xs"
                        focusOutlineColor={"cyan.300"}
                        InputRightElement={
                            <Icon as={<Ionicons name="person-outline" />} size={5} mr={"3"} color="muted.400" />
                        }
                        placeholder='User Name'
                    />

                    <Input
                        borderRadius="xl"
                        variant="filled"
                        fontSize="xs"
                        focusOutlineColor={"cyan.300"}
                        InputRightElement={
                            <Icon as={<Ionicons name="mail-outline" />} size={5} mr={"3"} color="muted.400" />
                        }
                        placeholder='Email Address'
                    />

                    <Input
                        borderRadius="xl"
                        variant="filled"
                        fontSize="xs"
                        focusOutlineColor={"cyan.300"}
                        InputRightElement={
                            <Icon as={<Ionicons name="call-outline" />} size={5} mr={"3"} color="muted.400" />
                        }
                        placeholder='Contact Number'
                    />

                    <Input
                        borderRadius="xl"
                        variant="filled"
                        fontSize="xs"
                        focusOutlineColor={"cyan.300"}
                        InputRightElement={
                            <Icon as={<Ionicons name="caret-down" />} size={5} mr={"3"} color="muted.400" />
                        }
                        placeholder='Select Country'
                    />

                    <Input
                        borderRadius="xl"
                        variant="filled"
                        fontSize="xs"
                        focusOutlineColor={"cyan.300"}
                        InputRightElement={
                            <Icon as={<Ionicons name="caret-down" />} size={5} mr={"3"} color="muted.400" />
                        }
                        placeholder='Select State'
                    />

                    <Input
                        borderRadius="xl"
                        variant="filled"
                        fontSize="xs"
                        focusOutlineColor={"cyan.300"}
                        InputRightElement={
                            <Icon as={<Ionicons name="caret-down" />} size={5} mr={"3"} color="muted.400" />
                        }
                        placeholder='Select City'
                    />

                    <Input
                        borderRadius="xl"
                        variant="filled"
                        fontSize="xs"
                        focusOutlineColor={"cyan.300"}
                        InputRightElement={
                            <Icon as={<Ionicons name="location-outline" />} size={5} mr={"3"} color="muted.400" />
                        }
                        placeholder='Location'
                    />

                    <Button
                        title='Save'
                        onPress={() => console.log("Saving profile...")}
                    />
                </VStack>
            </ScrollView>
        </View>
    )
}