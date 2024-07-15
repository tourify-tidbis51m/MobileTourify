import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Dimensions, Image, FlatList, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import useAuth from '../hooks/useAuth';
import eventService from '../services/eventService';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const Events = () => {
    const navigation = useNavigation();
    const { user } = useAuth();
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadEvents = async () => {
            if (!user || !user.token) {
                setError('User not authenticated');
                setLoading(false);
                return;
            }

            try {
                const eventsData = await eventService.fetchEvents(user.token);
                if (eventsData) {
                    setEvents(eventsData);
                } else {
                    setError('Failed to fetch events');                }
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        loadEvents();
    }, [user]);

    const renderItem = ({ item }) => (
        <View style={styles.listItem}>
            <Image source={{ uri: item.image }} style={styles.eventImage} />
            <Text style={styles.Phrase}>{item.name}</Text>
            <Text style={styles.Text}>{item.description}</Text>
        </View>
    );
    return (
        <SafeAreaView style={styles.background}>
            <FlatList
                data={events}
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
        marginTop: 30,
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
        margin: 20,
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
    Text: {
        color: "gray",
        fontSize: 16,
        textAlign: "justify",
        margin: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: "bold",
    },
});

export default Events;
