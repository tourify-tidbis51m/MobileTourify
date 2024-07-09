import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import useAuth from '../hooks/useAuth';
import { FontAwesome5 } from '@expo/vector-icons';

const Profile = () => {
    const { user, logout } = useAuth();

    return (
        <View style={styles.background}>
            <View style={styles.content}>
                <FontAwesome5 name="user-injured" style={styles.icon} />
                <Text style={styles.Phrase}>¡Bienvenido {user?.role || 'role'}, {user?.name || 'Usuario'}!</Text>
                <Text style={styles.Text}>Correo electrónico: {user?.email || 'No disponible'}</Text>
                <View style={styles.buttonContainer}>
                    <Button
                        title="Cerrar sesión"
                        onPress={logout}
                        color="#203e4a"
                    />
                </View>
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
});

export default Profile;
