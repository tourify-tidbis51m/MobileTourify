import React, { useEffect, useRef, useState } from "react";
import { Animated, StyleSheet, View, Image, Dimensions, Text } from 'react-native';
import { FontAwesome5 } from "@expo/vector-icons";

const { width, height } = Dimensions.get('window');

const SplashScreen = ({ navigation }) => {
    const spinValue = useRef(new Animated.Value(0)).current;
    const [randomItem, setRandomItem] = useState(null);

    let datos = [
        "El nombre 'Chihuahua' proviene de la lengua náhuatl y se cree que significa 'lugar seco y arenoso'.",
        "Chihuahua es la capital del estado de Chihuahua, el estado más grande de México por superficie.",
        "La Catedral Metropolitana de Chihuahua es uno de los edificios más emblemáticos de la ciudad, construido en el siglo XVIII. Su arquitectura barroca es impresionante.",
        "En la ciudad se encuentra la Casa de Villa, un museo dedicado a la vida y obra de Pancho Villa, uno de los personajes más famosos de la Revolución Mexicana.",
        "Chihuahua es conocida por sus temperaturas extremas, con veranos muy calurosos e inviernos fríos.",
        "La ciudad de Chihuahua es un punto de acceso para aprender sobre la cultura de los indígenas Tarahumara, conocidos por su habilidad para correr largas distancias.",
        "Chihuahua es un importante centro industrial y de manufactura en México, especialmente en la industria automotriz y electrónica."
    ];

    useEffect(() => {
        const getRandomItem = () => {
            const randomIndex = Math.floor(Math.random() * datos.length);
            setRandomItem(datos[randomIndex]);
        };
        getRandomItem();
    }, []);

    useEffect(() => {
        // Configurar la animación de rotación
        const spinAnimation = Animated.loop(
            Animated.timing(spinValue, {
                toValue: 2,
                duration: 6000, // Duración de un giro completo (en milisegundos)
                useNativeDriver: true,
            })
        );

        // Iniciar la animación de rotación
        spinAnimation.start();

        // Cambiar a la pantalla principal después de 3 segundos
        setTimeout(() => {
            spinAnimation.stop();
            navigation.reset({
                index: 0,
                routes: [{ name: 'Login' }],
            });
        }, 6000);
    }, [navigation, spinValue]);

    // Interpolación para girar 360 grados
    const spin = spinValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg'],
    });

    return (
        <View style={styles.background}>
            <Animated.Image 
                source={require('../assets/logo.png')} // Cambia el path a tu imagen de logo
                style={[styles.logo, { transform: [{ rotate: spin }] }]}
            />

            <View style={styles.titleContainer}>
                <Text style={styles.title}>¿SABÍAS QUÉ?</Text>
                <FontAwesome5 name="lightbulb" style={styles.icon} />
            </View>

            <View style={styles.container}>  
                <Text style={styles.randomText}>{randomItem}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#0D1B2A',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: width * 0.5,
        height: width * 0.5,
        resizeMode: 'contain',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 20,
        color: '#fff'
    },
    container: {
        backgroundColor: '#f0f0f0',
        padding: 15,
        borderRadius: 10,
        marginTop: 20,
        maxWidth: width * 0.8,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    randomText: {
        fontSize: 18,
        textAlign: 'center',
        alignSelf: 'center'
    },
    icon: {
        fontSize: 30,
        color: '#FFD700',
    },
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
    },
});

export default SplashScreen;
