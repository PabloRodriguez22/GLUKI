import React from 'react';
import { View, TouchableOpacity, Text, Image, StyleSheet, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const happyGlukiImage = require('../assets/happygluki.png');
const levelNscore = require('../assets/levelNscore.png');

const Home = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                {/* Container for happyGlukiImage */}
                <View style={styles.characterContainer}>
                    <Image source={happyGlukiImage} style={styles.character} />
                </View>
                {/* Score */}
            <View style={styles.scoreContainer}>
                {/* Absolute positioning for the score */}
                <View style={styles.scoreAbsolute}>
                    <Image source={levelNscore} style={styles.star} />
                </View>
            </View>
        </View>
        <View style={styles.menu}>
            <View style={styles.row}>
            <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate("Glucose")}>
                <Image source={require('../assets/tracking.png')} style={styles.menuIcon} />
                <Text style={styles.menuText}>Glucose Tracking</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate("Draw")}>
                <Image source={require('../assets/drawicon.png')} style={styles.menuIcon} />
                <Text style={styles.menuText}>Drawing</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.row}>
            <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate("Album")}>
                <Image source={require('../assets/album.png')} style={styles.menuIcon} />
                <Text style={styles.menuText}>Album</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate("Journal")}>
                <Image source={require('../assets/notes.png')} style={styles.menuIcon} />
                <Text style={styles.menuText}>Notes</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.singleRow}>
            <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate("Chat")}>
                <Image source={require('../assets/chat.png')} style={styles.menuIcon} />
                <Text style={styles.menuText}>My T1D Friends</Text>
            </TouchableOpacity>
        </View>
        </View>
            {/* <TouchableOpacity onPress={() => alert('Profile & Settings')} style={styles.profileButton}>
                <Text style={styles.profileText}>Profile & Settings</Text>
            </TouchableOpacity> */}
        </View>
            
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#62c4df",
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        flexDirection: 'row', // Make header items align horizontally
        alignItems: 'center', // Center items vertically
        justifyContent: 'space-between', // Space items evenly along the main axis (horizontally)
        paddingHorizontal: 20, // Add padding for better spacing
        width: '100%', // Ensure the header takes full width
    },
    character: {
        width: 100,
        height: 100,
    },
    scoreContainer: {
        // No need for absolute positioning, elements will be placed in a row
    },
    star: {
        width: 120,
        height: 50,
    },
    menu: {
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 40,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginBottom: 20,
    },
    singleRow: {
        justifyContent: 'center',
        width: '100%',
        marginBottom: 20,
        alignItems: 'center',
    },
    menuItem: {
        width: 160,
        height: 160,
        margin: 10,
        backgroundColor: '#ffd942',
        borderRadius: 70,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
    },
    menuIcon: {
        width: 60,
        height: 60,
        alignItems: 'center',
    },

    menuText: {
        marginTop: 5,
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    profileButton: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 10,
        marginTop: 20,
        position: 'absolute',
        bottom: 20,
    },
    profileText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    characterContainer: {
        // No need for flex and justifyContent, as it's aligned by the header styles
    },
    backgroundImage: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        opacity: 10,
    },
});
