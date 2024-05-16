import React from 'react';
import { View, TouchableOpacity, Text, Image, StyleSheet } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import colors from '../colors';
import { useNavigation } from '@react-navigation/native';
const happyGlukiImage = require('../assets/happygluki.png');
const levelNscore = require('../assets/levelNscore.png');

const Home = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={happyGlukiImage} style={styles.character} />
                <View style={styles.scoreContainer}>
                    <Image source={levelNscore} style={styles.star} />
                    <Text style={styles.score}>1000</Text>
                </View>
            </View>

            <View style={styles.menu}>
                <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate("Glucose")}>
                    <Image source={happyGlukiImage} style={styles.menuIcon} />
                    <Text style={styles.menuText}>Glucose tracking</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate("Draw")}>
                    <Image source={happyGlukiImage} style={styles.menuIcon} />
                    <Text style={styles.menuText}>Drawing</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate("Album")}>
                    <Image source={happyGlukiImage} style={styles.menuIcon} />
                    <Text style={styles.menuText}>Album</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuItem} onPress={() => alert('GLUKI News')}>
                    <Image source={happyGlukiImage} style={styles.menuIcon} />
                    <Text style={styles.menuText}>Notes</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate("Chat")}>
                    <Image source={happyGlukiImage} style={styles.menuIcon} />
                    <Text style={styles.menuText}>Messaging App</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity
                onPress={() => alert('Profile & Settings')}
                style={styles.profileButton}
            >
                <Text style={styles.profileText}>Profile & Settings</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => alert('Chat')}
                style={styles.chatButton}
            >
                <Entypo name="chat" size={24} color={colors.lightGray} />
            </TouchableOpacity>
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f0f8ff",
        alignItems: 'center',
        padding: 20,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        padding: 10,
        backgroundColor: '#9dd0dd',
        alignItems: 'center',
    },
    character: {
        width: 50,
        height: 50,
    },
    scoreContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    star: {
        width: 24,
        height: 24,
        marginRight: 5,
    },
    score: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    menu: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginTop: 20,
        width: '100%',
    },
    menuItem: {
        width: '45%',
        margin: 10,
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    },
    menuIcon: {
        width: 40,
        height: 40,
    },
    menuText: {
        marginTop: 10,
        fontSize: 16,
        fontWeight: 'bold',
    },
    profileButton: {
        backgroundColor: '#87ceeb',
        borderRadius: 10,
        padding: 10,
        marginTop: 20,
    },
    profileText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    chatButton: {
        backgroundColor: colors.primary,
        height: 50,
        width: 50,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: colors.primary,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.9,
        shadowRadius: 8,
        marginRight: 20,
        marginBottom: 50,
        position: 'absolute',
        bottom: 20,
        right: 20,
    },
});