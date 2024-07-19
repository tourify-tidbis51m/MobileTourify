import React from 'react';
import { StyleSheet, View, Text, ActivityIndicator, TouchableOpacity, Dimensions } from 'react-native';
import { useMap } from '../hooks/mapHooks';
import useAuth from '../hooks/useAuth';

const { width, height } = Dimensions.get('window');

const Map = () => {
    const { loading, error } = useMap();
    const { logout } = useAuth();

    if (loading) {
        return (
            <View style={styles.background}>
                <ActivityIndicator size="large" color="#3b6978" />
                <Text style={styles.loadingText}>Loading...</Text>
            </View>
        );
    }

    if (error) {
        return (
            <View style={styles.background}>
                <Text style={styles.errorText}>{error}</Text>
                <TouchableOpacity style={styles.logoutButton} onPress={logout}>
                    <Text style={styles.logoutButtonText}>Cerrar sesión</Text>
                </TouchableOpacity>
            </View>
        );
    }

    return (
        <View style={styles.background}>
            <View style={styles.content}>
                <Text style={styles.title}>Map</Text>
                <Text style={styles.description}>
                    This is where the map will be displayed.
                </Text>
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
    content: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#203e4a',
        borderRadius: 10,
        padding: 20,
        width: '80%',
    },
    title: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    description: {
        color: 'gray',
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 20,
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

export default Map;
