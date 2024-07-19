import { useState } from 'react';
import editProfileService from '../services/editProfileService';

export const useSettings = (user, setUser, navigation) => {
    const [name, setName] = useState(user?.name || '');
    const [email, setEmail] = useState(user?.email || '');
    const [modalVisible, setModalVisible] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSaveChanges = async () => {
        if (!user || !user.id || !user.token) {
            setModalMessage("User ID or token is missing.");
            setModalVisible(true);
            return;
        }

        setLoading(true);
        setError(''); // Clear previous errors

        try {
            const updatedUser = await editProfileService.updateProfile(user.token, user.id, name, email);
            setUser(updatedUser.user);
            setModalMessage("Tu perfil se ha actualizado correctamente.");
            setModalVisible(true);
            navigation.navigate('Profile');
        } catch (error) {
            setError(error.message);
            setModalMessage(error.message);
            setModalVisible(true);
        } finally {
            setLoading(false);
        }
    };

    const handleDeleteProfile = async () => {
        if (!user || !user.id || !user.token) {
            setModalMessage("User ID or token is missing.");
            setModalVisible(true);
            return;
        }

        setLoading(true);
        setError(''); // Clear previous errors

        try {
            await editProfileService.deleteProfile(user.token, user.id);
            setUser(null);
            setModalMessage("Perfil eliminado correctamente.");
            setModalVisible(true);
            navigation.navigate('Login');
        } catch (error) {
            setError(error.message);
            setModalMessage(error.message);
            setModalVisible(true);
        } finally {
            setLoading(false);
        }
    };

    return {
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
    };
};
