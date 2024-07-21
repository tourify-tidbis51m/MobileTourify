import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image, FlatList, SafeAreaView, ActivityIndicator, TouchableOpacity } from 'react-native';
import { useEvents } from '../hooks/eventsHooks';
import useAuth from '../hooks/useAuth';
import TitleButton from '../components/titlebutton'; 

const { width, height } = Dimensions.get('window');

const Events = () => {
    const { events, loading, error } = useEvents();
    const { logout } = useAuth();

    const renderFooter = () => (
        <View style={styles.footerSpacer} />
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
            <TitleButton />
            <View style={styles.content}>
                <SafeAreaView style={styles.safearea}>
                    <FlatList
                    data={events}
                    renderItem={({ item }) => (
                        <View style={styles.listItem}>
                            <View style={styles.imageContainer}>
                                    <Image source={{ uri: item.image }} style={styles.eventImage} />
                                    <TouchableOpacity style={styles.button} onPress={() => alert('Ir')}>
                                        <Text style={styles.buttonText}>Mapa</Text>
                                    </TouchableOpacity>
                                    <View style={styles.textContainer}>
                                        <Text style={styles.txt}>Fecha: {item.date}</Text>
                                        <Text style={styles.txt}>Hora: {item.time}</Text>
                                    </View>
                                </View>
                            <Text style={styles.Phrase}>{item.name}</Text>
                            <Text style={styles.text}>{item.description}</Text>
                        </View>
                    )}
                    keyExtractor={item => item._id}
                    contentContainerStyle={styles.content}
                    ListFooterComponent={renderFooter}
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
    content: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: height * 0.02,
        marginBottom: height * 0.07,
    },
    listItem: {
        borderWidth: 1,
        width: width * 0.9,
        height: height * 0.64,
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
    safearea: {
        marginTop: height * 0.17,
        height: height * 1,
    },
    footerSpacer: {
        height: height * 0.145,
    },
    text:{
        color: "white",
        fontSize: width * 0.035,
        textAlign: "center",
        marginVertical: height * 0.01,
        paddingBottom: height * 0.01,
    },
    imageContainer: {
        position: 'relative',
        width: width * 0.9,
        height: height * 0.45,
    },
    button: {
        position: 'absolute',
        top: 20,
        right: 20,
        backgroundColor: '#1e40af',
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 5,
        alignItems: 'center'
    },
    buttonText: {
        color: 'white',
        fontSize: width * 0.05,
        fontWeight: "bold",
        paddingVertical: 8,
        paddingHorizontal: 8,
    },
    textContainer: {
        position: 'absolute',
        top: 20,
        left: 10,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: 5,
        borderRadius: 5,
    },
    txt: {
        color: 'white',
        fontSize: width * 0.035,
        fontWeight: "bold",
    }
});

export default Events;
