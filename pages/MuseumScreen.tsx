import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Dimensions, TouchableOpacity } from 'react-native';
import { useMuseum } from '../hooks/museumHooks';
import useAuth from '../hooks/useAuth';

const { width, height } = Dimensions.get('window');

const Museum = () => {
    const { loading, error } = useMuseum();
    const { logout } = useAuth();

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
        <View style={styles.container}>
            <Text style={styles.title}>Museum</Text>
            <Text style={styles.description}>This is where museum details will be displayed.</Text>
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
});

export default Museum;
