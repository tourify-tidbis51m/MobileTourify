import React, { useRef } from 'react';
import { Animated, TextInput, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


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
            <Text style={styles.labelTitle}>TOURIFY</Text>
            <Text style={styles.label}>Ingresa tu correo:</Text>
            <TextInput style={styles.input} />
            <Text style={styles.label}>Ingresa tu contraseña:</Text>
            <TextInput style={styles.input} secureTextEntry />
            <TouchableOpacity
                onPressIn={handlePressIn}
                onPressOut={handlePressOut}
                style={styles.buttonContainer}
            >
                <Animated.View style={[styles.button, { transform: [{ scale: scaleAnim }] }]}>
                    <Text style={styles.buttonText}>INICIAR SESIÓN</Text>
                </Animated.View>
            </TouchableOpacity>
            <TouchableOpacity
                onPressIn={handlePressIn}
                onPressOut={handlePressOut}
                style={styles.buttonContainer}
            >
                <Animated.View style={[styles.buttonRegister, { transform: [{ scale: scaleAnim }] }]}>
                    <Text style={styles.buttonText}>¿Todavía no tienes una cuenta?</Text>
                </Animated.View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F4E8FF',
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
        marginBottom: -20,
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'column',
        fontFamily: 'system-ui',
        fontWeight: 'bold',
        top: -30
    },
    input: {
        height: 40,
        borderColor: 'gray',
        marginBottom: 40,
        paddingHorizontal: 10,
        borderBottomWidth: 3,
    },
    button: {
        backgroundColor: 'blue',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonRegister: {
        backgroundColor: '#3B05FF',
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
        top: -22
    },
    labelTitle: {
        color: 'blue',
        fontWeight: 'bold',
        fontFamily: 'Sans-Serif, Lucida Sans',
        fontSize: 50,
        justifyContent: 'center',
        display: 'flex',
        top: -40,
        bottom: 10
    }
});

export default LoginForm;