import React from "react";
import { TouchableOpacity, View, Image, Text, StyleSheet } from "react-native";
import useAuth from "../hooks/useAuth";
import { useNavigation } from "@react-navigation/native";

const titlebutton = () => {
    const navigation = useNavigation();
    const { logout } = useAuth();

    return (
        <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.touchable}>
            <View style={styles.containter}>
                <Image source={require('../assets/logo.png')} style={styles.logo} />
                <Text style={styles.title}> Tourify</Text>
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
        padding: 10,
        position: 'absolute', 
        top: 10,
        bottom: 0, 
        marginTop: 28
    },
    title: {
        fontSize: 26,
        color: '#fff',
        flex: 1,
        textAlign: 'left',
    },
    logo: {
        width: 68,
        height: 68,
        resizeMode: 'center',
    },
});

export default titlebutton;
