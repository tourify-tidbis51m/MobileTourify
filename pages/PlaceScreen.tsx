import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, ScrollView, ActivityIndicator } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import idhistoricalService from '../services/idhistoricalService';
import useAuth from '../hooks/useAuth';

const { width, height } = Dimensions.get('window');

const Place = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const { id } = route.params;
    const { user } = useAuth();
    const [place, setPlace] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPlace = async () => {
            if (!user || !user.token) {
                setError('User not authenticated');
                setLoading(false);
                return;
            }

            try {
                const placeData = await idhistoricalService.fetchIDHistoricals(user.token, id);
                setPlace(placeData);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchPlace();
    }, [id, user]);

    if (loading) {
        return (
            <View style={styles.background}>
                <ActivityIndicator size="large" color="#3b6978" />
            </View>
        );
    }

    if (error) {
        return (
            <View style={styles.background}>
                <Text style={styles.errorText}>{error}</Text>
            </View>
        );
    }

    if (!place) {
        return (
            <View style={styles.background}>
                <Text style={styles.errorText}>No place data found</Text>
            </View>
        );
    }

    return (
        <ScrollView style={styles.background}>
            <View style={styles.content}>
                <View style={styles.infoWindow}>
                    <Image source={{ uri: place.image }} style={styles.eventImage} />
                    <Text style={styles.Phrase}>{place.name}</Text>
                    <Text style={styles.Text}>{place.description}</Text>
                    <Text style={styles.detailText}>Fecha de creación: {place.year}</Text>
                    <Text style={styles.detailText}>Categoria: {place.loctype}</Text>
                    <TouchableOpacity style={styles.buttonStart} onPress={() => navigation.navigate('Game', { place })}>
                        <Text style={styles.buttonText}>Start Game</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
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
        marginTop: 20,
        paddingBottom: 80,
        marginBottom: 30,
    },
    detailText: {
        color: "white",
        fontSize: 14,
        textAlign: "center",
        marginVertical: 5,
        alignSelf: 'stretch',
    },
    infoWindow: {
        width: width * 0.85,
        padding: 20,
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
        width: width * 0.75,
        height: height * 0.25,
        borderRadius: 10,
        marginBottom: 20,
    },
    Phrase: {
        color: "white",
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
        marginVertical: 10,
    },
    Text: {
        color: "gray",
        fontSize: 16,
        textAlign: "justify",
        marginVertical: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: "bold",
    },
    buttonStart: {
        backgroundColor: '#3b6978',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 10,
    },
    errorText: {
        color: 'red',
        fontSize: 18,
        textAlign: 'center',
    }
});

export default Place;