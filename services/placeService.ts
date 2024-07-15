import { authHost } from "../constants/auth.constants";

async function fetchHistoricals(token) {
    try {
        const response = await fetch(`${authHost}locations/locations-short`, {
            method: "GET",
            headers: {
                'Authorization': `${token}`,
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Failed to fetch events');
        }

        const contentType = response.headers.get('content-type');
        if (!contentType || !contentType.includes('application/json')) {
            throw new Error('Expected JSON response from server');
        }

        return response.json();
    } catch (error) {
        console.log('Error fetching events:', error);
        return undefined;
    }
}

export default { fetchHistoricals };
