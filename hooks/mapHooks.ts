import { useState, useEffect } from 'react';

export const useMap = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMapData = async () => {
            try {
                // Aqui iria lo del mapa, no se como lo manejes realmente, pero le pedi a GPT una simulación, salu3
                //Para poder poner lo del loading y error, salu3
                await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulación de 2 segundos
            } catch (e) {
                setError('Failed to load map data.');
            } finally {
                setLoading(false);
            }
        };

        fetchMapData();
    }, []);

    return {
        loading,
        error,
    };
};
