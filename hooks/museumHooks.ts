import { useState, useEffect } from 'react';

export const useMuseum = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMuseumData = async () => {
            try {
                // Mimso caso q el modelo y el mapa ekisde
                await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulación de 2 segundos
            } catch (e) {
                setError('Failed to load museum data.');
            } finally {
                setLoading(false);
            }
        };

        fetchMuseumData();
    }, []);

    return {
        loading,
        error,
    };
};
