import React from 'react';
import { ImageBackground, StyleSheet, Dimensions, Image } from 'react-native';
import LoginForm from '../components/LoginForm';

const { width, height } = Dimensions.get('window'); //Agarre los objetos de esas madres y lo pase por la dimensión de la screen

const LoginScreen = () => {
    return (
        <ImageBackground style={styles.background}>
            <Image source={require('../assets/logo.png')} style={styles.logo} />
            <LoginForm />
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
    logo: {
        width: width * .4,
        height: height * .4,
        resizeMode: 'center',
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        top: "-4%", 
    },
});

export default LoginScreen;