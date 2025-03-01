import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity, FlatList, SafeAreaView, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { usePlaces } from '../hooks/placesHooks';
import useAuth from '../hooks/useAuth';
import TitleButton from '../components/titlebutton'; 

const { width, height } = Dimensions.get('window');

const Places = () => {
    const navigation = useNavigation();
    const { places, loading, error } = usePlaces();
    const { logout } = useAuth();

    const renderItem = ({ item }) => (
        <View style={styles.listItem}>
            <View style={styles.imageContainer}>
                <Image source={{ uri: item.image }} style={styles.eventImage} />
            </View>
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
        logout();
    }

    return (
        <View style={styles.background}>
            <TitleButton style={styles.titleButton} />
            <View style={styles.content}>
                <SafeAreaView style={styles.safearea}>
                    <FlatList
                        data={places}
                        renderItem={renderItem}
                        keyExtractor={item => item._id}
                        contentContainerStyle={styles.content}
                    />
                </SafeAreaView>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#0D1B2A',
    },
    titleButton: {
        position: 'absolute',
        top: height * 0.05,
        left: width * 0.05,
        zIndex: 1,
    },
    content: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: height * 0.2, //Esto lo uso para "elevar" el contenido para que no choque con la navbar
    }, 
    listItem: {
        borderWidth: 1,
        width: width * 0.9,
        height: height * 0.60,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        overflow: 'hidden',
        marginBottom: height * 0.03,
        padding: width * 0.05,
        backgroundColor: '#203e4a',
    },
    eventImage: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
    },
    Phrase: {
        color: "white",
        fontSize: width * 0.06,
        fontWeight: "bold",
        textAlign: "center",
        marginVertical: height * 0.01,
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
        marginTop: height * 0.1,
        height: height * 1,
    },
    imageContainer: {
        position: 'relative',
        width: width * 0.9,
        height: height * 0.45,
        justifyContent: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: width * 0.055,
        fontWeight: "bold",
        paddingVertical: 8,
        paddingHorizontal: 8,
    },
    buttonStart: {
        backgroundColor: '#3b6978',
        paddingVertical: height * 0.012,
        paddingHorizontal: width * 0.1,
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: height * 0.01,
    },
});

export default Places;
