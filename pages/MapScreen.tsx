import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

const Map = () => {
    return (
        <View style={styles.background}>
            <View style={styles.content}>
                <Text style={styles.title}>Mao</Text>
                <Text style={styles.description}>
                    This is where the map will be displayed.
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'repeat',
        backgroundColor: '#0D1B2A',
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#203e4a',
        borderRadius: 10,
        padding: 20,
        width: '80%',
    },
    title: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    description: {
        color: 'gray',
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 20,
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default Map;
