import { useState, useEffect } from 'react';
import placeService from '../services/placeService';
import useAuth from './useAuth';

export const usePlaces = () => {
    const { user } = useAuth();
    const [places, setPlaces] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadPlaces = async () => {
            if (!user || !user.token) {
                setError('User not authenticated');
                setLoading(false);
                return;
            }

            try {
                const placesData = await placeService.fetchHistoricals(user.token);
                if (placesData) {
                    setPlaces(placesData);
                } else {
                    setError('Failed to fetch places');
                }
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        loadPlaces();
    }, [user]);

    return { places, loading, error };
};
