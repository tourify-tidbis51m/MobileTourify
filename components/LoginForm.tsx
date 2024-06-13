import React, { useRef } from 'react';
import { Animated, TextInput, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

const LoginForm = () => {

    const scaleAnim = useRef(new Animated.Value(1)).current;

    const handlePressIn = () => {
        Animated.spring(scaleAnim, {
            toValue: 1,
            useNativeDriver: true,
        }).start();
    };

    const handlePressOut = () => {
        Animated.spring(scaleAnim, {
            toValue: 1,
            useNativeDriver: true,
        }).start();
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Enter your email:</Text>
            <TextInput style={styles.input} />
            <Text style={styles.label}>Enter your password:</Text>
            <TextInput style={styles.input} secureTextEntry />
            <TouchableOpacity
                onPressIn={handlePressIn}
                onPressOut={handlePressOut}
                style={styles.buttonContainer}
            >
                <Animated.View style={[styles.button, { transform: [{ scale: scaleAnim }] }]}>
                    <Text style={styles.buttonText}>LOGIN</Text>
                </Animated.View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        color: 'black',
        gap: 16,
        height: '66%',
        width: '100%',
        position: 'absolute',
        bottom: 0,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    },
    label: {
        fontSize: 23,
        marginBottom: 5,
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'column',
        fontFamily: 'system-ui',
        fontStyle: 'italic',

    },
    logo: {
        width: 100,
        height: 100,
        marginBottom: 20,
        alignSelf: 'center',
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 0,
        marginBottom: 10,
        paddingHorizontal: 10,
        borderBottomWidth: 2,

    },
    button: {
        backgroundColor: 'blue',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontFamily: 'Sans-Serif, Lucida Sans',
        fontSize: 20,
    },
    buttonContainer: {
        borderRadius: 5,
        overflow: 'hidden',
    },
});

export default LoginForm;