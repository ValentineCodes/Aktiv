import { Divider, FlatList, Pressable, Text, View } from 'native-base'
import React from 'react'
import { WINDOW_WIDTH } from '../utils/dimensions'
import { useNavigation } from '@react-navigation/native'
import Ionicons from "react-native-vector-icons/dist/Ionicons"
import Service from '../components/cards/Service'

type Props = {}

export default function FavoriteServices({ }: Props) {
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

                <Text ml="8" fontSize="lg" fontWeight="semibold" color="white">Favorite Services</Text>
            </View>

            <FlatList
                data={[1, 2, 3, 4, 5, 6]}
                keyExtractor={item => item.toString()}
                renderItem={({ item, index }) => (
                    <Pressable onPress={() => navigation.navigate("Service")}>
                        <Service />

                        <Pressable position={"absolute"} top={3} right={3} bgColor={"gray.100"} borderRadius={"full"} p={1.5}>
                            <Ionicons name="heart" color="red" size={WINDOW_WIDTH * 0.06} />
                        </Pressable>
                    </Pressable>
                )}
                ItemSeparatorComponent={<Divider borderWidth={10} borderColor={"white"} />}
                my="4"
                px="4"
            />
        </View>
    )
}