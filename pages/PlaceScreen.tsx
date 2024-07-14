import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import TitleButton from '../components/titlebutton';

const { width, height } = Dimensions.get('window');

const Place = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const { item } = route.params;

    if (!item) {
        return (
            <View style={styles.background}>
                <Text style={styles.errorText}>No item data found</Text>
            </View>
        );
    }

    return (
        <View style={styles.background}>
            <View style={styles.content}>
                <View style={styles.infoWindow}>
                    <Image source={{ uri: item.image }} style={styles.eventImage} />
                    <Text style={styles.Phrase}>{item.title}</Text>
                    <Text style={styles.Text}>{item.description}</Text>
                    <TouchableOpacity style={styles.buttonStart} onPress={() => navigation.navigate('Game', { item })}>
                        <Text style={styles.buttonText}>Game</Text>
                    </TouchableOpacity>
                </View>
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
        marginTop: 20,
        paddingBottom: 80,
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
        textAlign: "center",
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