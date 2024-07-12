import React from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity, Image, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import TitleButton from '../components/titlebutton';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const events = [
    { id: '1', title: 'Santa Rita Feria', description: 'Feria de Santa Rita de Chihuahua is an event held in the city of Chihuahua that brings together the best artists of the city. And the best on mecanics games', image: 'https://www.elheraldodechihuahua.com.mx/incoming/9hgteg-feria-santa-rita/alternates/LANDSCAPE_480/Feria%20Santa%20Rita' },
    { id: '2', title: 'Junior H Concert', description: 'Junior H presents a concert in the city of Chihuahua where we will be performing his best songs like "Lady Gaga", "Extssy Model" and others!' , image: 'https://www.adrnetworks.mx/wp-content/uploads/2023/08/Foro-Sol.jpg' },
    { id: '3', title: 'Mercadito BIS', description: 'Descripción mamalona que me da flojera insertar bien y q voy a traer de la base de datos', image: 'https://www.elheraldodechihuahua.com.mx/incoming/9hgteg-feria-santa-rita/alternates/LANDSCAPE_480/Feria%20Santa%20Rita' },
];

const Events = () => {
    const navigation  = useNavigation();

    const renderItem = ({ item }) => (
        <View style={styles.listItem}>
            <Image source={{ uri: item.image }} style={styles.eventImage} />
            <Text style={styles.Phrase}>{item.title}</Text>
            <Text style={styles.Text}>{item.description}</Text>
        </View>
    );
    return (
        <SafeAreaView style={styles.background}>
            <TitleButton/>
            <FlatList
                data={events}
                renderItem={renderItem}
                keyExtractor={item => item.id}
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
        width: width * 0.8,
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
    Text: {
        color: "gray",
        fontSize: 16,
        textAlign: "center",
        margin: 10,
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
});

export default Events;
