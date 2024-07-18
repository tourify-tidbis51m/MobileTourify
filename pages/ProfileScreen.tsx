import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView, TextInput, Modal } from 'react-native';
import useAuth from '../hooks/useAuth';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import TitleButton from '../components/titlebutton';
import commentService from '../services/commentService';

const Profile = () => {
    const { user } = useAuth();
    const navigation = useNavigation();
    const [comment, setComment] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [modalMessage, setModalMessage] = useState('');

    const handleSendComment = async () => {
        if (!comment.trim()) {
            setModalMessage('Por favor, escribe un comentario.');
            setModalVisible(true);
            return;
        }

        try {
            await commentService.sendComment(user.token, user.id, comment);
            setModalMessage('Comentario enviado con éxito.');
            setModalVisible(true);
            setComment('');
        } catch (error) {
            setModalMessage(error.message);
            setModalVisible(true);
        }
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
                <Text style={styles.sectionTitle}>¡Bienvenido, {user?.name || 'Usuario'}!</Text>
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
                    multiline={true}
                    numberOfLines={4}
                    placeholder="Escribe tu comentario aquí..."
                    value={comment}
                    onChangeText={setComment}
                />
                <TouchableOpacity style={styles.submitButton} onPress={handleSendComment}>
                    <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>
            </View>

            <Modal
                animationType="slide"
                transparent={true}
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
        margin: 20,
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
        marginBottom: 100,
        marginTop: 75,
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    profileImageContainer: {
        borderWidth: 4,
        borderColor: '#3B82F6',
        borderRadius: 100,
        overflow: 'hidden',
    },
    profileImage: {
        width: 120,
        height: 120,
    },
    sectionTitle: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 20,
        textAlign: 'center',
    },
    userInfo: {
        width: '100%',
        alignItems: 'center',
    },
    infoLabel: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10,
    },
    infoText: {
        color: 'white',
        fontSize: 16,
        marginBottom: 10,
    },
    buttonContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        width: 'auto',
        marginHorizontal: 20,
        gap: 20,
        marginTop: 20,
    },
    button: {
        backgroundColor: '#3b6978',
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
    },
    commentSectionTitle: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 20,
    },
    commentLabel: {
        color: 'white',
        fontSize: 16,
        marginBottom: 10,
        textAlign: 'center',
    },
    textArea: {
        width: '100%',
        height: 100,
        backgroundColor: '#334155',
        color: 'white',
        padding: 10,
        borderRadius: 5,
        textAlignVertical: 'top',
    },
    submitButton: {
        backgroundColor: '#3b6978',
        padding: 10,
        borderRadius: 5,
        marginTop: 20,
    },
    settingsButton: {
        backgroundColor: '#203e4a',
        borderRadius: 8,
        padding: 10,
        marginTop: 20,
        width: '80%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    settingsButtonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default Profile;
