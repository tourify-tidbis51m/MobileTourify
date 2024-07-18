import { authHost } from "../constants/auth.constants";

async function sendComment(token, id, description) {
    try {
        const response = await fetch(`${authHost}users/user/sendcomment/${id}`, {
            method: "PUT",
            headers: {
                'Authorization': `${token}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ description }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Failed to send comment');
        }

        return await response.json();
    } catch (error) {
        console.log('Error sending comment:', error);
        throw error;
    }
}

export default { sendComment };
