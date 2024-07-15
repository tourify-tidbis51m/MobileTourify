import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity, FlatList, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import useAuth from '../hooks/useAuth';
import placeService from '../services/placeService';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const Places = () => {
    const navigation = useNavigation();
    const { user } = useAuth();
    const [places, setPlaces] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadPlaces = async () => {
            if (!user || !user.token) {
                setError('User not authenticated');
                setLoading(false);
                return;
            }

            try {
                const placesData = await placeService.fetchHistoricals(user.token);
                if (placesData) {
                    setPlaces(placesData);
                } else {
                    setError('Failed to fetch events');                }
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        loadPlaces();
    }, [user]);

    const renderItem = ({ item }) => (
        <View style={styles.listItem}>
            <Image source={{ uri: item.image }} style={styles.eventImage} />
            <Text style={styles.Phrase}>{item.name}</Text>
            <TouchableOpacity 
                style={styles.buttonStart} 
                onPress={() => navigation.navigate('Place', { id: item._id })}
            >
                <Text style={styles.buttonText}>View Details</Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <SafeAreaView style={styles.background}>
            <FlatList
                data={places}
                renderItem={renderItem}
                keyExtractor={item => item._id}
                contentContainerStyle={styles.content}
            />
        </SafeAreaView>
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
    },
    listItem: {
        flex: 1,
        borderWidth: 1,
        width: width * 0.9,
        height: height * 0.4,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        overflow: 'hidden',
        margin: 10,
        padding: 20,
        backgroundColor: '#203e4a',
    },
    eventImage: {
        width: width * 0.6,
        height: height * 0.2,
        borderRadius: 10,
        marginBottom: 10,
    },
    Phrase: {
        color: "white",
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 10,
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
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loadingText: {
        color: 'white',
        fontSize: 20,
    },
    errorText: {
        color: 'red',
        fontSize: 20,
    },
});

export default Places;
