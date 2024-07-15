import { authHost } from "../constants/auth.constants";

async function updateProfile(token, id, name, email) {
    try {
        const updatedUser = {
            name,
            email,
        };

        const response = await fetch(`${authHost}users/${id}`, {
            method: "PUT",
            headers: {
                'Authorization': `${token}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedUser),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Failed to update profile');
        }

        return await response.json();
    } catch (error) {
        console.log('Error updating profile:', error);
        throw error;
    }
}

export default { updateProfile };
