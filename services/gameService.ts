import { authHost } from "../constants/auth.constants";

async function fetchQuestions(token, placeId) {
    if (!placeId) {
        throw new Error('Place ID is required');
    }

    try {
        const response = await fetch(`${authHost}questions/${placeId}`, {
            method: "GET",
            headers: {
                'Authorization': `${token}`,
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error('Failed to fetch questions');
        }

        const data = await response.json();
        return data.game; // Asumiendo que 'game' contiene las preguntas
    } catch (error) {
        console.error('Error fetching questions:', error);
        throw error;
    }
}

export default { fetchQuestions };