import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image, FlatList, SafeAreaView, ActivityIndicator, TouchableOpacity } from 'react-native';
import { useEvents } from '../hooks/eventsHooks';
import useAuth from '../hooks/useAuth';

const { width, height } = Dimensions.get('window');

const Events = () => {
    const { events, loading, error } = useEvents();
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
            <View style={styles.errorContainer}>
                <Text style={styles.errorText}>{error}</Text>
                <TouchableOpacity style={styles.logoutButton} onPress={logout}>
                    <Text style={styles.logoutButtonText}>Cerrar sesión</Text>
                </TouchableOpacity>
            </View>
        );
    }

    return (
        <SafeAreaView style={styles.background}>
            <FlatList
                data={events}
                renderItem={({ item }) => (
                    <View style={styles.listItem}>
                        <Image source={{ uri: item.image }} style={styles.eventImage} />
                        <Text style={styles.Phrase}>{item.name}</Text>
                        <Text style={styles.Text}>{item.description}</Text>
                    </View>
                )}
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
        padding: width * 0.05,
        marginBottom: height * 0.07,
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
        marginVertical: height * 0.02,
        backgroundColor: '#203e4a',
    },
    eventImage: {
        width: '100%',
        height: height * 0.2,
        borderRadius: 10,
        marginBottom: 10,
    },
    Phrase: {
        color: "white",
        fontSize: width * 0.06,
        fontWeight: "bold",
        textAlign: "center",
        marginVertical: height * 0.01,
    },
    Text: {
        color: "gray",
        fontSize: width * 0.05,
        textAlign: "center",
        marginHorizontal: width * 0.05,
        marginBottom: height * 0.03,
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
    },
    errorContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0D1B2A',
    },
    errorText: {
        color: 'red',
        fontSize: width * 0.05,
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

export default Events;
