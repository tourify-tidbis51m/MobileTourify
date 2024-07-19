import { useState, useEffect } from 'react';

export const useModel3D = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchModelData = async () => {
            try {
                // Mismo peo q el mapa, Xd
                await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulación de 2 segundos
            } catch (e) {
                setError('Failed to load 3D model.');
            } finally {
                setLoading(false);
            }
        };

        fetchModelData();
    }, []);

    return {
        loading,
        error,
    };
};
