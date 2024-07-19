import { useState, useEffect } from 'react';
import useAuth from './useAuth';
import eventService from '../services/eventService';

export const useEvents = () => {
    const { user } = useAuth();
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadEvents = async () => {
            if (!user || !user.token) {
                setError('User not authenticated');
                setLoading(false);
                return;
            }

            try {
                const eventsData = await eventService.fetchEvents(user.token);
                if (eventsData) {
                    setEvents(eventsData);
                } else {
                    setError('Failed to fetch events');
                }
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        loadEvents();
    }, [user]);

    return { events, loading, error };
};

