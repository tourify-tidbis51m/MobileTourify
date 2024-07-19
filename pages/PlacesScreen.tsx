import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity, FlatList, SafeAreaView, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { usePlaces } from '../hooks/placesHooks';
import useAuth from '../hooks/useAuth';

const { width, height } = Dimensions.get('window');

const Places = () => {
    const navigation = useNavigation();
    const { places, loading, error } = usePlaces();
    const { logout } = useAuth();

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
        paddingVertical: height * 0.02,
        marginBottom: height * 0.07,
    },
    listItem: {
        borderWidth: 1,
        width: width * 0.9,
        height: height * 0.35,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        overflow: 'hidden',
        marginVertical: height * 0.02,
        padding: width * 0.05,
        backgroundColor: '#203e4a',
    },
    eventImage: {
        width: width * 0.7,
        height: height * 0.2,
        borderRadius: 10,
        marginBottom: height * 0.01,
        marginTop: height * 0.2,
    },
    Phrase: {
        color: "white",
        fontSize: width * 0.06,
        fontWeight: "bold",
        textAlign: "center",
        marginVertical: height * 0.01,
    },
    buttonText: {
        color: 'white',
        fontSize: width * 0.05,
        fontWeight: "bold",
    },
    buttonStart: {
        backgroundColor: '#3b6978',
        paddingVertical: height * 0.015,
        paddingHorizontal: width * 0.1,
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: height * 0.2,
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
});

export default Places;
