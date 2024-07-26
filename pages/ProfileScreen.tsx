import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView, TextInput, Modal, Dimensions, ActivityIndicator } from 'react-native';
import { useProfile } from '../hooks/profileHooks';
import useAuth from '../hooks/useAuth';
import { useNavigation } from '@react-navigation/native';
import TitleButton from '../components/titlebutton';

const { width, height } = Dimensions.get('window');

const Profile = () => {
    const { logout } = useAuth();
    const { user } = useAuth();
    const navigation = useNavigation();
    const {
        comment,
        setComment,
        modalVisible,
        setModalVisible,
        modalMessage,
        handleSendComment,
        loading,
        error,
    } = useProfile();

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

    if (!user) {
        logout();
    }

    console.log(user);

    return (
        <ScrollView style={styles.container}>
            <TitleButton />
            <View style={styles.profileCard}>
                <View style={styles.profileImageContainer}>
                    <Image
                        style={styles.profileImage}
                        source={{ uri: user.image }}
                        alt="Profile"
                    />
                </View>
                <Text style={styles.sectionTitle}>¡Bienvenido, {user.name || 'Usuario'}!</Text>
                <View style={styles.userInfo}>
                    <Text style={styles.infoLabel}>Nombre</Text>
                    <Text style={styles.infoText}>{user?.name || 'No disponible'}</Text>
                    <Text style={styles.infoLabel}>Correo electrónico</Text>
                    <Text style={styles.infoText}>{user?.email || 'No disponible'}</Text>
                    <Text style={styles.infoLabel}>País</Text>
                    <Text style={styles.infoText}>{user?.country || 'No disponible'}</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Settings')}>
                        <Text style={styles.buttonText}>Editar mi perfil</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('My Museum')}>
                        <Text style={styles.buttonText}>Mi museo</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.commentSectionTitle}>Sugerencias</Text>
                <Text style={styles.commentLabel}>¿Has tenido algún problema o te gustaría añadir algo a la aplicación?</Text>
                <TextInput
                    style={styles.textArea}
                    multiline
                    numberOfLines={4}
                    placeholder="Escribe tu comentario aquí..."
                    value={comment}
                    onChangeText={setComment}
                />
                <TouchableOpacity style={styles.submitButton} onPress={handleSendComment} disabled={loading}>
                    <Text style={styles.buttonText}>Enviar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.logoutButton} onPress={logout}>
                    <Text style={styles.logoutButtonText}>Cerrar sesión</Text>
                </TouchableOpacity>
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
                        <Text style={styles.textStyle}>Cerrar</Text>
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
    modalView: {
        margin: width * 0.05,
        backgroundColor: '#203e4a',
        borderRadius: 20,
        padding: width * 0.05,
        alignItems: "center",
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
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: width * 0.05
    },
    modalText: {
        marginBottom: height * 0.05,
        color: 'white',
        textAlign: "center",
        fontSize: width * 0.05
    },
    buttonClose: {
        backgroundColor: '#3b6978',
    },
    profileImageContainer: {
        borderWidth: 4,
        borderColor: '#3B82F6',
        borderRadius: width * 0.3,
        overflow: 'hidden',
    },
    profileImage: {
        width: width * 0.4,
        height: width * 0.4,
    },
    sectionTitle: {
        color: 'white',
        fontSize: width * 0.08,
        fontWeight: 'bold',
        marginVertical: height * 0.02,
        textAlign: 'center',
    },
    userInfo: {
        width: '100%',
        alignItems: 'center',
    },
    infoLabel: {
        color: 'white',
        fontSize: width * 0.05,
        fontWeight: 'bold',
        marginTop: height * 0.01,
    },
    infoText: {
        color: 'white',
        fontSize: width * 0.045,
        marginBottom: height * 0.015,
    },
    buttonContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        width: '100%',
        marginHorizontal: width * 0.05,
        gap: height * 0.02,
        marginTop: height * 0.02,
    },
    button: {
        backgroundColor: '#3b6978',
        padding: height * 0.015,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: width * 0.045,
    },
    commentSectionTitle: {
        color: 'white',
        fontSize: width * 0.06,
        fontWeight: 'bold',
        marginVertical: height * 0.02,
    },
    commentLabel: {
        color: 'white',
        fontSize: width * 0.045,
        marginBottom: height * 0.015,
        textAlign: 'center',
    },
    textArea: {
        width: '100%',
        height: height * 0.15,
        backgroundColor: '#334155',
        color: 'white',
        padding: width * 0.04,
        borderRadius: 5,
        textAlignVertical: 'top',
        fontSize: width * 0.04,
    },
    submitButton: {
        backgroundColor: '#3b6978',
        padding: height * 0.015,
        borderRadius: 5,
        marginTop: height * 0.02,
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

export default Profile;
