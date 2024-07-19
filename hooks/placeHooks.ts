import { useState, useEffect } from 'react';
import idhistoricalService from '../services/idhistoricalService';
import useAuth from './useAuth';

export const usePlace = (id) => {
    const { user } = useAuth();
    const [place, setPlace] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPlace = async () => {
            if (!user || !user.token) {
                setError('User not authenticated');
                setLoading(false);
                return;
            }

            try {
                const placeData = await idhistoricalService.fetchIDHistoricals(user.token, id);
                setPlace(placeData);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchPlace();
    }, [id, user]);

    return { place, loading, error };
};
