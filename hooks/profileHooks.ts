import { useState, useEffect } from 'react';
import commentService from '../services/commentService';
import useAuth from './useAuth';

export const useProfile = () => {
    const { user } = useAuth();
    const [comment, setComment] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSendComment = async () => {
        if (!comment.trim()) {
            setModalMessage('Por favor, escribe un comentario.');
            setModalVisible(true);
            return;
        }

        setLoading(true);
        setError('');
        try {
            await commentService.sendComment(user.token, user.id, comment);
            setModalMessage('Comentario enviado con éxito.');
            setComment('');
        } catch (error) {
            setError(`Error: ${error.message}`);
            setModalMessage(`Error: ${error.message}`);
        } finally {
            setLoading(false);
            setModalVisible(true);
        }
    };

    useEffect(() => {
        if (error) {
            setModalMessage(error);
            setModalVisible(true);
        }
    }, [error]);

    return {
        comment,
        setComment,
        modalVisible,
        setModalVisible,
        modalMessage,
        handleSendComment,
        loading,
        error,
    };
};
