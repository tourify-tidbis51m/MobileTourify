import { authHost, lifeSessionTimeInMin } from "../constants/auth.constants";
async function login(email, password) {
    try {
        const response = await fetch(`${authHost}users/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            email,
            password,
            expiresInMins: lifeSessionTimeInMin,
            }),
        });

        console.log(response)
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Error in login');
        }

        return response.json();
    } catch (error) {
        alert("Error in login");
        return undefined;
    }
}

async function register(name, email, password) {
    try {
        const response = await fetch(`${authHost}users/`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                name,
                email,
                password,
            }),
        });
    console.log(response)
    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Error in registration');
    }
        return response.json();
    } catch (error) {
        alert("Error in registration");
        return undefined;
    }
}

export default {login, register};