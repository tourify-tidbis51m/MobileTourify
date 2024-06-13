import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import LoginForm from '../components/LoginForm';

const LoginScreen = () => {
    return (
        <ImageBackground style={styles.background}>
        <LoginForm/>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'cover',
        backgroundColor: '#151E3D',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default LoginScreen;