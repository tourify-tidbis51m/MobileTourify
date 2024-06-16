import React from "react";
import { TouchableOpacity, View, Image, Text, StyleSheet } from "react-native";

const NavBar = () => {
    return (
        <View style={styles.navbar}>
            <Image source={require('../assets/logo.png')} style={styles.logo} />
            <Text style={styles.title}>Tourify</Text>
            <TouchableOpacity>
                <Image source={require('../assets/menu.png')} style={styles.menu} />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    navbar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        padding: 20,
        backgroundColor: '#151E3D', 
        position: 'absolute', 
        top: 0, 
    },
    title: {
        fontSize: 30,
        color: '#fff',
        flex: 1,
        textAlign: 'left',
    },
    logo: {
        width: 80,
        height: 80,
        resizeMode: 'center',
    },
    menu: {
        width: 50,
        height: 50,
        resizeMode: 'center',
    },
});

export default NavBar;
