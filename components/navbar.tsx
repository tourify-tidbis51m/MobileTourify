import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const NavBar = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.navbarContainer}>
            <View style={styles.navbar}>
                <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Home')}>
                    <Image source={require('../assets/home_icon.png')} style={styles.icon} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Events')}>
                    <Image source={require('../assets/events_icon.png')} style={styles.icon} />
                </TouchableOpacity>

                <TouchableOpacity style={[styles.navButton, styles.navButtonCenter]} onPress={() => navigation.navigate('Profile')}>
                    <Image source={require('../assets/user_icon.png')} style={styles.icon} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Places')}>
                    <Image source={require('../assets/places_icon.png')} style={styles.icon} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Map')}>
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
