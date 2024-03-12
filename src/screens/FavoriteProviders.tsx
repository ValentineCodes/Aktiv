import { Divider, FlatList, Image, Pressable, Text, View } from 'native-base'
import React from 'react'
import { WINDOW_WIDTH } from '../utils/dimensions'
import { useNavigation } from '@react-navigation/native'
import Ionicons from "react-native-vector-icons/dist/Ionicons"

type Props = {}

export default function FavoriteProviders({ }: Props) {
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

                <Text ml="8" fontSize="lg" fontWeight="semibold" color="white">Favorite Providers</Text>
            </View>

            <FlatList
                data={[1, 2, 3, 4, 5, 6]}
                keyExtractor={item => item.toString()}
                renderItem={({ item, index }) => (
                    <Pressable onPress={() => navigation.navigate("AboutProvider")} bgColor={"white"} borderRadius={"lg"} w={"45%"} ml={"2"}>
                        <View w={"100%"} style={{ aspectRatio: 16 / 9 }} >
                            <Image source={require("../assets/images/profile0.jpeg")} alt="Provider" w="full" h={"full"} borderTopRadius={"lg"} />

                            <Pressable position={"absolute"} top={2} right={2} bgColor={"gray.100"} borderRadius={"full"} p={1.5}>
                                <Ionicons name="heart" color="red" size={WINDOW_WIDTH * 0.045} />
                            </Pressable>
                        </View>

                        <Text my="4" fontSize="sm" fontWeight="semibold" color="black" textAlign={"center"}>Valentine Orga</Text>
                    </Pressable>
                )}
                ItemSeparatorComponent={<Divider borderWidth={10} borderColor={"gray.100"} />}
                numColumns={2}
                my="4"
                px="4"
            />
        </View>
    )
}