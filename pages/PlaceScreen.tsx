import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, ScrollView, ActivityIndicator, TouchableOpacity } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { usePlace } from '../hooks/placeHooks';
import useAuth from '../hooks/useAuth';
import TitleButton from '../components/titlebutton'; 

const { width, height } = Dimensions.get('window');

const Place = () => {
    const route = useRoute();
    const { id } = route.params;
    const { place, loading, error } = usePlace(id);
    const { logout } = useAuth();

    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#3b6978" />
                <Text style={styles.loadingText}>Loading...</Text>
            </View>
        );
    }

    if (error) {
        return (
            <View style={styles.loadingContainer}>
                <Text style={styles.errorText}>{error}</Text>
                <TouchableOpacity style={styles.logoutButton} onPress={logout}>
                    <Text style={styles.logoutButtonText}>Cerrar sesión</Text>
                </TouchableOpacity>
            </View>
        );
    }

    if (!place) {
        return (
            <View style={styles.background}>
                <Text style={styles.errorText}>No se ha podido traer los lugares. Intente de nuevo en otro momento.</Text>
                <TouchableOpacity style={styles.logoutButton} onPress={logout}>
                    <Text style={styles.logoutButtonText}>Cerrar sesión</Text>
                </TouchableOpacity>
            </View>
        );
    }

    return (
        <View style={styles.background}>
            <TitleButton/>
            <ScrollView style={styles.safearea}>
                <View style={styles.content}>
                    <View style={styles.infoWindow}>
                        <Image source={{ uri: place.image }} style={styles.eventImage} />
                        <Text style={styles.Phrase}>{place.name}</Text>
                        <Text style={styles.detailText}>Fecha de creación: {place.year}</Text>
                        <Text style={styles.detailText}>Categoría: {place.loctype}</Text>
                        <Text style={styles.Text}>{place.description}</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#0D1B2A',
    },
    content: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: width * 0.05,
        marginBottom: height * 0.08,
    },
    detailText: {
        color: "white",
        fontSize: width * 0.05,
        textAlign: "center",
        marginVertical: 5,
        alignSelf: 'stretch',
    },
    infoWindow: {
        width: width * 0.9,
        padding: width * 0.05,
        borderRadius: 10,
        backgroundColor: '#203e4a',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
        alignItems: 'center',
    },
    eventImage: {
        width: width * 0.85,
        height: height * 0.25,
        borderRadius: 10,
        marginBottom: 20,
    },
    Phrase: {
        color: "white",
        fontSize: width * 0.07,
        fontWeight: "bold",
        textAlign: "center",
        marginVertical: 10,
    },
    Text: {
        color: "gray",
        fontSize: width * 0.05,
        textAlign: "justify",
        marginVertical: 10,
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0D1B2A',
    },
    loadingText: {
        color: 'white',
        fontSize: width * 0.05,
        marginTop: 10,
    },
    errorText: {
        color: 'red',
        fontSize: width * 0.05,
        textAlign: 'center',
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
    safearea: {
        marginTop: height * 0.12,
        height: height * 1,
    },
});

export default Place;
