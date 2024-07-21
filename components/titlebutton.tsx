import React from "react";
import { TouchableOpacity, View, Image, Text, StyleSheet } from "react-native";
import useAuth from "../hooks/useAuth";

const titlebutton = () => {

    const { logout } = useAuth();

    return (
        <TouchableOpacity onPress={logout} style={styles.touchable}>
            <View style={styles.containter}>
                <Image source={require('../assets/logo.png')} style={styles.logo} />
                <Text style={styles.title}> Cerrar sesión</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    touchable: {
        zIndex: 1000,
    },
    containter: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '60%',
        padding: 20,
        position: 'absolute', 
        top: 20,
        bottom: 10, 
        marginTop: 28
    },
    title: {
        fontSize: 30,
        color: '#fff',
        flex: 1,
        textAlign: 'left',
    },
    logo: {
        width: 50,
        height: 50,
        resizeMode: 'center',
    },
});

export default titlebutton;
