import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const NavBar = () => {
    const navigation = useNavigation();
    const [activeButton, setActiveButton] = useState('');

    const handlePress = (screen, buttonName) => {
        setActiveButton(buttonName);
        navigation.navigate(screen);
    };

    return (
        <View style={styles.navbarContainer}>
            <View style={styles.navbar}>
                <TouchableOpacity
                    style={[
                        styles.navButton,
                        activeButton === 'Home' && styles.navButtonPressed
                    ]}
                    onPress={() => handlePress('Home', 'Home')}
                >
                    <Image source={require('../assets/home_icon.png')} style={styles.icon} />
                </TouchableOpacity>

                <TouchableOpacity
                    style={[
                        styles.navButton,
                        activeButton === 'Events' && styles.navButtonPressed
                    ]}
                    onPress={() => handlePress('Events', 'Events')}
                >
                    <Image source={require('../assets/events_icon.png')} style={styles.icon} />
                </TouchableOpacity>

                <TouchableOpacity
                    style={[
                        styles.navButton,
                        styles.navButtonCenter,
                        activeButton === 'Profile' && styles.navButtonPressed
                    ]}
                    onPress={() => handlePress('Profile', 'Profile')}
                >
                    <Image source={require('../assets/user_icon.png')} style={styles.icon} />
                </TouchableOpacity>

                <TouchableOpacity
                    style={[
                        styles.navButton,
                        activeButton === 'Places' && styles.navButtonPressed
                    ]}
                    onPress={() => handlePress('Places', 'Places')}
                >
                    <Image source={require('../assets/places_icon.png')} style={styles.icon} />
                </TouchableOpacity>

                <TouchableOpacity
                    style={[
                        styles.navButton,
                        activeButton === 'Map' && styles.navButtonPressed
                    ]}
                    onPress={() => handlePress('Map', 'Map')}
                >
                    <Image source={require('../assets/map_icon.png')} style={styles.icon} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    navbarContainer: {
        height: '6%',
        width: '100%',
        backgroundColor: '#1A2B3C',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
    },
    navbar: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: '100%',
        padding: 10,
    },
    navButton: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: 'white',
        borderWidth: 7,
        borderColor: '#1A2B3C',
        justifyContent: 'center',
        alignItems: 'center',
        top: -50,
    },
    navButtonCenter: {
        width: 80,
        height: 80,
        borderRadius: 40,
    },
    navButtonPressed: {
        borderColor: 'white',
    },
    icon: {
        width: 24,
        height: 24,
    },
});

export default NavBar;
