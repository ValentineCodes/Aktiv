import { Divider, FlatList, Pressable, Text, View } from 'native-base'
import React from 'react'
import { WINDOW_WIDTH } from '../utils/dimensions'
import { useNavigation } from '@react-navigation/native'
import Ionicons from "react-native-vector-icons/dist/Ionicons"
import MyReview from '../components/cards/MyReview'


type Props = {}

export default function MyReviews({ }: Props) {
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

                <Text ml="8" fontSize="lg" fontWeight="semibold" color="white">My Reviews</Text>
            </View>

            <FlatList
                data={[1, 2, 3, 4, 5, 6]}
                keyExtractor={item => item.toString()}
                renderItem={({ item, index }) => (
                    <MyReview />
                )}
                ItemSeparatorComponent={<Divider borderWidth={10} borderColor={"white"} />}
                my="4"
                px="4"
            />
        </View>
    )
}