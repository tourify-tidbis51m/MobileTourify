import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import useAuth from '../hooks/useAuth';
import { FontAwesome5 } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const Profile = () => {
    const { user, logout } = useAuth();
    const navigation = useNavigation();

    return (
        <View style={styles.background}>
            <View style={styles.content}>
                <FontAwesome5 name="user-injured" style={styles.icon} />
                <Text style={styles.Phrase}>¡Bienvenido, {user?.name || 'Usuario'}!</Text>
                <Text style={styles.Text}>Correo electrónico: {user?.email || 'No disponible'}</Text>
            </View>
            <TouchableOpacity style={styles.settingsButton} onPress={() => navigation.navigate('Settings')}>
                <Text style={styles.settingsButtonText}>Settings</Text>
            </TouchableOpacity>
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
    icon: {
        color: 'white',
        fontSize: 100,
        marginBottom: 20,
    },
    Phrase: {
        color: "white",
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 20,
    },
    Text: {
        color: "gray",
        fontSize: 20,
        textAlign: "center",
        margin: 20,
    },
    buttonContainer: {
        borderRadius: 5,
        overflow: 'hidden',
        marginTop: 20,
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: "bold",
    },
    settingsButton: {
        flex : 1,
        alignSelf: 'center',
        backgroundColor: '#203e4a',
        borderRadius: 8,
        padding: 19,
        marginTop: 20,
        width: '80%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    settingsButtonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    }
});

export default Profile;
