import { authHost } from "../constants/auth.constants";

async function fetchLocations(token) {
    try {
        const response = await fetch(`${authHost}locations/all`, {
            method: "GET",
            headers: {
                'Authorization': `${token}`,
            },
        });

        const data = await response.json();

        return data;
    } catch (error) {
        console.log('Error fetching events:', error);
        return undefined;
    }
}

export default { fetchLocations };
