import axios from 'axios'

const API_KEY = "AIzaSyArDZfbstdJY6j2qdAhZA01JrXdS4KFHYY";

const authenticate = async (mode, email, password) => {

    const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`

        const respose = await axios.post(url,{
            email: email,
            password: password,
            returnSecureToken: true
        });
        
        const token = respose.data.idToken;
        return token;
}

export const createUser = (email, password) => {
    return authenticate('signUp', email, password);
}
export const login = (email, password) => {
    return authenticate('signInWithPassword', email, password);
}