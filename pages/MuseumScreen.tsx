import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Dimensions, TouchableOpacity, Image, Linking } from 'react-native';
import { useMuseum } from '../hooks/museumHooks';
import useAuth from '../hooks/useAuth';
import TitleButton from '../components/titlebutton';

const { width, height } = Dimensions.get('window');

const Museum = () => {
    const { loading, error } = useMuseum();
    const { logout } = useAuth();

    const openWebsite = () => {
        Linking.openURL('https://webtourify.onrender.com');
    };

    if (loading) {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" color="#3b6978" />
                <Text style={styles.loadingText}>Loading...</Text>
            </View>
        );
    }

    if (error) {
        return (
            <View style={styles.container}>
                <Text style={styles.errorText}>{error}</Text>
                <TouchableOpacity style={styles.logoutButton} onPress={logout}>
                    <Text style={styles.logoutButtonText}>Cerrar sesión</Text>
                </TouchableOpacity>
            </View>
        );
    }

    return (
        <View style={styles.background}>
            <TitleButton />
            <View style={styles.container}>
                <Text style={styles.title}>Mi museo</Text>
                <Text style={styles.description}>Función actualmente disponible únicamente en navegador</Text>
                <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/5578/5578703.png' }} style={styles.icon}/>
                <TouchableOpacity style={styles.openWebsiteButton} onPress={openWebsite}>
                    <Text style={styles.openWebsiteButtonText}>Visitar Tourify</Text>
                </TouchableOpacity>
            </View>
        </View>
        
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0D1B2A',
    },
    background: {
        flex: 1,
        backgroundColor: '#0D1B2A',
    },
    title: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
    },
    description: {
        color: 'gray',
        fontSize: 20,
        textAlign: 'center',
        marginTop: 10,
        paddingHorizontal: 20,
    },
    loadingText: {
        color: 'white',
        fontSize: 20,
        marginTop: 20,
    },
    errorText: {
        color: 'red',
        fontSize: 20,
        textAlign: 'center',
        marginTop: 20,
    },
    logoutButton: {
        backgroundColor: '#BF1E2E',
        padding: height * 0.015,
        borderRadius: 5,
        marginTop: height * 0.02,
    },
    logoutButtonText: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: width * 0.045,
    },
    openWebsiteButton: {
        backgroundColor: '#1E90FF',
        padding: height * 0.015,
        borderRadius: 5,
        marginTop: height * 0.02,
    },
    openWebsiteButtonText: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: width * 0.045,
    },
    icon: {
        width: 300,
        height: 300, 
        marginTop: 20,
    },
});

export default Museum;
