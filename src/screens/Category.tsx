import { Divider, Text, View, FlatList, Pressable, HStack, VStack, Image } from 'native-base'
import React from 'react'
import Ionicons from "react-native-vector-icons/dist/Ionicons"
import { WINDOW_WIDTH } from '../utils/dimensions'
import { StyleSheet, TextInput } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Service from '../components/cards/Service'
import StarRating from 'react-native-star-rating-widget'

type Props = {}

export default function Category({ }: Props) {
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

                <Text ml="8" fontSize="md" fontWeight="semibold" color="white">AC CoolCare</Text>
            </View>

            {/* search */}
            <View style={styles.searchContainer}>
                <View style={styles.searchInputContainer}>
                    <Ionicons
                        name="search"
                        color="#aaa"
                        size={WINDOW_WIDTH * 0.06}
                    />

                    <TextInput style={styles.searchInput} placeholder='Search for AC CoolCare ' />
                </View>

                <Pressable style={styles.searchIcon}>
                    <Ionicons
                        name="options-outline"
                        color="white"
                        size={WINDOW_WIDTH * 0.06}
                    />
                </Pressable>
            </View>

            {/* services */}
            <FlatList
                key={"_"}
                data={[1, 2, 3, 4, 5, 6]}
                keyExtractor={item => item.toString()}
                renderItem={({ item, index }) => (
                    <Pressable onPress={() => navigation.navigate("Service")}>
                        <Service />
                    </Pressable>
                )}
                ListHeaderComponent={<Text fontSize="sm" fontWeight="semibold" my="4">Services</Text>}
                ItemSeparatorComponent={<Divider borderWidth={10} borderColor={"white"} />}
                my="4"
                px="4"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    searchContainer: {
        marginTop: 15,
        marginHorizontal: 20,
        height: 50,
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'space-between'
    },
    searchInputContainer: {
        flex: 1,
        flexDirection: "row",
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 15,
        paddingLeft: 15,
        elevation: 2,
        marginRight: 20
    },
    searchInput: {
        flex: 1,
        marginHorizontal: 10,
    },
    searchIcon: {
        backgroundColor: 'cyan',
        borderRadius: 15,
        elevation: 2,
        height: 45,
        aspectRatio: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})