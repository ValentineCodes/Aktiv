import { Divider, FlatList, Pressable, ScrollView, StatusBar, Text, View } from 'native-base'
import React from 'react'
import { WINDOW_HEIGHT, WINDOW_WIDTH } from '../../../utils/dimensions'
import Ionicons from "react-native-vector-icons/dist/Ionicons"
import { StyleSheet, TextInput } from 'react-native'
import Service from '../../../components/cards/Service'
import { useNavigation } from '@react-navigation/native'

type Props = {}

export default function Home({ }: Props) {
    const navigation = useNavigation()

    return (
        <ScrollView bgColor="white">
            <StatusBar translucent backgroundColor="transparent" />

            <View h={WINDOW_HEIGHT * 0.4} bgColor="cyan.50">
                <Pressable position={"absolute"} top={10} right={5} bgColor={"gray.100"} borderRadius={"full"} p={2.5} onPress={() => navigation.navigate("Notifications")}>
                    <Ionicons name="notifications-outline" color="black" size={WINDOW_WIDTH * 0.06} />
                </Pressable>

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
                        <Pressable key={_.toString()} style={styles.categoryContainer} onPress={() => navigation.navigate("Category")}>
                            <View style={styles.categoryIcon}>
                                <Ionicons
                                    name="person"
                                    color="black"
                                    size={WINDOW_WIDTH * 0.06}
                                />
                            </View>

                            <Text fontWeight="light">Ac CoolCare</Text>
                        </Pressable>
                    ))}
                </ScrollView>
            </View>

            <View py={10} bgColor="cyan.50">
                <View style={styles.sectionHeader}>
                    <Text bold>Featured</Text>
                    <Pressable><Text color="gray.600" fontSize="xs">View All</Text></Pressable>
                </View>

                <FlatList
                    key={"_"}
                    data={[1, 2, 3, 4, 5, 6]}
                    keyExtractor={item => item.toString()}
                    renderItem={({ item, index }) => (
                        <Pressable w={WINDOW_WIDTH * 0.7} mr={5} onPress={() => navigation.navigate("Service")}>
                            <Service />
                        </Pressable>
                    )}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    ListFooterComponent={<Divider borderWidth={10} borderColor={"white"} />}
                    mt="4"
                    px="4"
                />
            </View>

            <View py={10}>
                <View style={styles.sectionHeader}>
                    <Text bold>Services</Text>
                    <Pressable><Text color="gray.600" fontSize="xs">View All</Text></Pressable>
                </View>

                <FlatList
                    key={"#"}
                    data={[1, 2, 3, 4, 5, 6]}
                    keyExtractor={item => item.toString()}
                    renderItem={({ item, index }) => (
                        <Pressable w={WINDOW_WIDTH * 0.7} mr={5} onPress={() => navigation.navigate("Service")}>
                            <Service />
                        </Pressable>
                    )}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    ListFooterComponent={<Divider borderWidth={10} borderColor={"white"} />}
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