import { Divider, FlatList, Pressable, ScrollView, StatusBar, Text, View } from 'native-base'
import React from 'react'
import { WINDOW_HEIGHT, WINDOW_WIDTH } from '../../../utils/dimensions'
import Ionicons from "react-native-vector-icons/dist/Ionicons"
import { StyleSheet, TextInput } from 'react-native'
import Service from '../../../components/cards/Service'

type Props = {}

export default function Home({ }: Props) {
    return (
        <ScrollView bgColor="white">
            <StatusBar translucent backgroundColor="transparent" />

            <View h={WINDOW_HEIGHT * 0.4} bgColor="cyan.50">
                <View style={styles.searchContainer}>
                    <View style={styles.searchInputContainer}>
                        <Ionicons
                            name="person"
                            color="black"
                            size={WINDOW_WIDTH * 0.06}
                        />

                        <TextInput style={styles.searchInput} />

                        <Ionicons
                            name="locate"
                            color="black"
                            size={WINDOW_WIDTH * 0.06}
                        />

                    </View>

                    <Pressable style={styles.searchIcon}>
                        <Ionicons
                            name="search-outline"
                            color="black"
                            size={WINDOW_WIDTH * 0.06}
                        />
                    </Pressable>
                </View>
            </View>

            <View pt={50} pb={5}>
                <View style={styles.sectionHeader}>
                    <Text bold>Categories</Text>
                    <Pressable><Text color="gray.600" fontSize="xs">View All</Text></Pressable>
                </View>

                <ScrollView horizontal showsHorizontalScrollIndicator={false} mt="4" pl="4">
                    {[1, 2, 3, 4, 5, 6, 7].map(_ => (
                        <View key={_.toString()} style={styles.categoryContainer}>
                            <View style={styles.categoryIcon}>
                                <Ionicons
                                    name="person"
                                    color="black"
                                    size={WINDOW_WIDTH * 0.06}
                                />
                            </View>

                            <Text fontWeight="light">Ac CoolCare</Text>
                        </View>
                    ))}
                </ScrollView>
            </View>

            <View py={10} bgColor="cyan.50">
                <View style={styles.sectionHeader}>
                    <Text bold>Featured</Text>
                    <Pressable><Text color="gray.600" fontSize="xs">View All</Text></Pressable>
                </View>

                <ScrollView horizontal showsHorizontalScrollIndicator={false} mt="4" px="4">
                    <Pressable w={WINDOW_WIDTH * 0.7} mr={5}>
                        <Service />
                    </Pressable>

                    <Pressable w={WINDOW_WIDTH * 0.7} mr={5}>
                        <Service />
                    </Pressable>
                </ScrollView>
            </View>

            <View py={10}>
                <View style={styles.sectionHeader}>
                    <Text bold>Services</Text>
                    <Pressable><Text color="gray.600" fontSize="xs">View All</Text></Pressable>
                </View>

                <FlatList
                    key={"_"}
                    data={[1, 2, 3, 4, 5, 6]}
                    keyExtractor={item => item.toString()}
                    renderItem={({ item, index }) => (
                        <Pressable w="50%" bgColor={"white"} style={index % 2 === 0 ? { borderRightWidth: 5, borderRightColor: "white" } : { borderLeftWidth: 5, borderLeftColor: "white" }}>
                            <Service />
                        </Pressable>
                    )}
                    ItemSeparatorComponent={<Divider borderWidth={10} borderColor={"white"} />}
                    numColumns={2}
                    mt="4"
                    px="4"
                />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    searchContainer: {
        position: 'absolute',
        bottom: -25,
        width: "100%",
        height: 50,
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'space-around'
    },
    searchInputContainer: {
        flexDirection: "row",
        alignItems: 'center',
        width: '70%',
        backgroundColor: 'white',
        borderRadius: 15,
        paddingHorizontal: 5,
        elevation: 2
    },
    searchInput: {
        flex: 1,
        marginHorizontal: 10,
    },
    searchIcon: {
        backgroundColor: "white",
        borderRadius: 15,
        elevation: 2,
        height: 45,
        aspectRatio: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 25
    },
    categoryContainer: {
        alignItems: 'center',
        marginRight: 20
    },
    categoryIcon: {
        borderRadius: 100,
        padding: 10,
        backgroundColor: "grey",
        width: 60,
        aspectRatio: 1,
        justifyContent: 'center',
        alignItems: "center"
    }
})