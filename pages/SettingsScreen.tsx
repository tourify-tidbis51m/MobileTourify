import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image, Alert, ScrollView } from 'react-native';
import useAuth from '../hooks/useAuth';
import TitleButton from '../components/titlebutton';
import { useNavigation } from '@react-navigation/native';

const Settings = () => {
    const { user, logout } = useAuth();
    const navigation = useNavigation();
    const [name, setName] = useState(user?.name || '');
    const [email, setEmail] = useState(user?.email || '');
    const [country, setCountry] = useState(user?.country || '');
    const [password, setPassword] = useState('');

    const handleSaveChanges = () => {
        // Implementar lógica para guardar cambios
        Alert.alert("Changes Saved!");
    };

    const handleDeleteProfile = () => {
        // Implementar lógica para eliminar perfil
        Alert.alert("Profile Deleted!");
    };

    return (
        <ScrollView style={styles.container}>
            <TitleButton />
            <View style={styles.profileCard}>
                <View style={styles.profileImageContainer}>
                    <Image
                        style={styles.profileImage}
                        source={{ uri: `../../static/usersimages/${user?.image}` }}
                        alt="Profile"
                    />
                </View>
                <TouchableOpacity style={styles.uploadButton}>
                    <Text style={styles.uploadButtonText}>Upload avatar</Text>
                </TouchableOpacity>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>User Name</Text>
                    <TextInput
                        style={styles.input}
                        value={name}
                        onChangeText={setName}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Email</Text>
                    <TextInput
                        style={styles.input}
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Password</Text>
                    <TextInput
                        style={styles.input}
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.saveButton} onPress={handleSaveChanges}>
                        <Text style={styles.buttonText}>Save Changes</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.cancelButton} onPress={() => navigation.navigate('Profile')}>
                        <Text style={styles.buttonText}>Cancel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.deleteButton} onPress={handleDeleteProfile}>
                        <Text style={styles.buttonText}>Delete Profile</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0D1B2A',
    },
    profileCard: {
        backgroundColor: '#203e4a',
        margin: 20,
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
        marginBottom: 100,
        marginTop: 75,
    },
    profileImageContainer: {
        borderWidth: 4,
        borderColor: '#3B82F6',
        borderRadius: 100,
        overflow: 'hidden',
        marginBottom: 20,
    },
    profileImage: {
        width: 120,
        height: 120,
    },
    uploadButton: {
        backgroundColor: '#3b6978',
        padding: 10,
        borderRadius: 5,
        gap: 10,
        marginBottom: 20,
    },
    uploadButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    inputContainer: {
        marginBottom: 20,
    },
    label: {
        color: 'white',
        fontSize: 20,
        marginBottom: 5,
        fontWeight: 'bold',
        alignSelf: 'center',
    },
    input: {
        backgroundColor: '#1B263B',
        color: 'white',
        padding: 10,
        borderRadius: 5,
        width: 300,
    },
    buttonContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        gap: 10,
        alignSelf: 'center',
    },
    saveButton: {
        backgroundColor: '#28a745',
        padding: 10,
        borderRadius: 5,
        flex: 1,
        marginRight: 5,
        width: 150,
    },
    cancelButton: {
        backgroundColor: '#3b6978',
        padding: 10,
        borderRadius: 5,
        flex: 1,
        marginRight: 5,
        width: 150,
    },
    deleteButton: {
        backgroundColor: '#dc3545',
        padding: 10,
        borderRadius: 5,
        flex: 1,
        width: 150,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default Settings;
