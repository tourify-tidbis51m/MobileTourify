import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image, ScrollView, Modal, Dimensions, ActivityIndicator } from 'react-native';
import useAuth from '../hooks/useAuth';
import { useSettings } from '../hooks/settingsHooks';
import TitleButton from '../components/titlebutton';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

const Settings = () => {
    const { user, setUser } = useAuth();
    const { logout } = useAuth();
    const navigation = useNavigation();
    const {
        name,
        setName,
        email,
        setEmail,
        modalVisible,
        setModalVisible,
        modalMessage,
        handleSaveChanges,
        handleDeleteProfile,
        loading,
        error
    } = useSettings(user, setUser, navigation);

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
                <TitleButton />
                <Text style={styles.errorText}>{error}</Text>
                <TouchableOpacity style={styles.logoutButton} onPress={logout}>
                    <Text style={styles.logoutButtonText}>Cerrar sesión</Text>
                </TouchableOpacity>
            </View>
        );
    }

    return (
        <ScrollView style={styles.container}>
            <TitleButton />
            <View style={styles.profileCard}>
                <View style={styles.profileImageContainer}>
                    <Image
                        style={styles.profileImage}
                        source={{ uri: user?.image }}
                        alt="Profile"
                    />
                </View>
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

            <Modal
                animationType="slide"
                transparent
                visible={modalVisible}
                onRequestClose={() => setModalVisible(!modalVisible)}
            >
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>{modalMessage}</Text>
                    <TouchableOpacity
                        style={[styles.button, styles.buttonClose]}
                        onPress={() => setModalVisible(!modalVisible)}
                    >
                        <Text style={styles.textStyle}>Close</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
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
        margin: width * 0.05,
        borderRadius: 10,
        padding: width * 0.05,
        alignItems: 'center',
        marginBottom: height * 0.1,
        marginTop: height * 0.1,
    },
    profileImageContainer: {
        borderWidth: 4,
        borderColor: '#3B82F6',
        borderRadius: width * 0.3,
        overflow: 'hidden',
        marginBottom: height * 0.02,
    },
    profileImage: {
        width: width * 0.4,
        height: width * 0.4,
    },
    inputContainer: {
        marginBottom: height * 0.02,
        width: '100%',
        alignItems: 'center',
    },
    label: {
        color: 'white',
        fontSize: width * 0.06,
        marginBottom: height * 0.01,
        fontWeight: 'bold',
        alignSelf: 'center',
    },
    input: {
        backgroundColor: '#1B263B',
        color: 'white',
        padding: width * 0.04,
        borderRadius: 5,
        width: '80%',
        maxWidth: 400,
        fontSize: width * 0.05,
    },
    buttonContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        width: '100%',
        marginTop: height * 0.02,
        alignItems: 'center',
    },
    saveButton: {
        backgroundColor: '#28a745',
        padding: height * 0.015,
        borderRadius: 5,
        marginBottom: height * 0.01,
        width: '80%',
        maxWidth: 400,
    },
    cancelButton: {
        backgroundColor: '#3b6978',
        padding: height * 0.015,
        borderRadius: 5,
        marginBottom: height * 0.01,
        width: '80%',
        maxWidth: 400,
    },
    deleteButton: {
        backgroundColor: '#dc3545',
        padding: height * 0.015,
        borderRadius: 5,
        width: '80%',
        maxWidth: 400,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: width * 0.05,
    },
    modalView: {
        margin: width * 0.05,
        backgroundColor: '#203e4a',
        borderRadius: 20,
        padding: width * 0.05,
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        borderColor: 'white',
        borderWidth: 2,
        justifyContent: 'center',
    },
    button: {
        borderRadius: 20,
        padding: height * 0.015,
        elevation: 2
    },
    buttonClose: {
        backgroundColor: '#3b6978',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: width * 0.05
    },
    modalText: {
        marginBottom: height * 0.05,
        color: 'white',
        textAlign: 'center',
        fontSize: width * 0.05
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
        backgroundColor: '#BF1E2E', // Color para el botón de cerrar sesión
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

export default Settings;
