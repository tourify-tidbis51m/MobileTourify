import React, { useRef, useState } from 'react';
import { Animated, TextInput, Text, View, TouchableOpacity, ImageBackground, StyleSheet, Dimensions, Image } from 'react-native';
import useAuth from '../hooks/useAuth';
import { useLoginHooks } from '../hooks/loginHooks';

const { width, height } = Dimensions.get('screen');

const Login = ({ navigation }) => {

    const { login, loading } = useAuth();

    const {
        email,
        setEmail,
        password,
        setPassword,
        handlePressIn,
        handlePressOut,
        scaleAnim,
    } = useLoginHooks();

    const handleLogin = async () => {
        await login(email, password);
    };

    return (
        <ImageBackground style={styles.background}>
            <Image source={require('../assets/logo.png')} style={styles.logo} />
            <View style={styles.container}>
                <Text style={styles.labelTitle}>TOURIFY</Text>
                <Text style={styles.label}>Ingresa tu correo:</Text>
                <TextInput 
                    style={styles.input} 
                    placeholder="Correo" 
                    placeholderTextColor="#B0B0B0"
                    value={email}
                    onChangeText={setEmail}
                />
                <Text style={styles.label}>Ingresa tu contraseña:</Text>
                <TextInput 
                    style={styles.input} 
                    placeholder="Contraseña" 
                    placeholderTextColor="#B0B0B0"
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                />
                <TouchableOpacity
                    onPressIn={handlePressIn}
                    onPressOut={handlePressOut}
                    onPress={handleLogin}
                    style={styles.buttonContainer}
                >
                    <Animated.View style={[styles.button, { transform: [{ scale: scaleAnim }] }]}>
                        <Text style={styles.buttonText}>INICIAR SESIÓN</Text>
                    </Animated.View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('Register')
                    }}
                    style={styles.buttonContainer}
                >
                    <Animated.View style={[styles.buttonSecondary, { transform: [{ scale: scaleAnim }] }]}>
                        <Text style={styles.buttonTextSecondary}>¿Todavía no tienes una cuenta?</Text>
                    </Animated.View>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'cover',
        backgroundColor: '#0D1B2A',
        justifyContent: 'center',
        alignItems: 'center',
        width: width,
        height: height,
    },
    logo: {
        width: width * 0.4,
        height: height * 0.25,
        resizeMode: 'contain',
        marginBottom: 20,
    },
    container: {
        backgroundColor: '#FFFFFF',
        padding: 20,
        borderRadius: 10,
        width: '90%',
        maxWidth: 400,
        alignItems: 'center',
    },
    labelTitle: {
        color: '#1B263B',
        fontWeight: 'bold',
        fontSize: 28,
        marginBottom: 20,
    },
    label: {
        fontSize: 20,
        color: '#1B263B',
        marginBottom: 10,
        alignSelf: 'flex-start',
    },
    input: {
        height: 30,
        borderColor: '#7F7F7F',
        borderBottomWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 10,
        width: '100%',
        color: '#1B263B',
        fontSize: 18,
    },
    buttonContainer: {
        width: '100%',
        marginBottom: 10,
    },
    button: {
        backgroundColor: '#1B263B',
        paddingVertical: 12,
        paddingHorizontal: 25,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonSecondary: {
        backgroundColor: 'transparent',
        paddingVertical: 12,
        paddingHorizontal: 25,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: '#E0E1DD',
        fontWeight: 'bold',
        fontSize: 18,
        alignItems: 'center',
        textAlign: 'center',
    },
    buttonTextSecondary: {
        color: '#1B263B',
        fontWeight: 'bold',
        fontSize: 18,
    },
});

export default Login;
