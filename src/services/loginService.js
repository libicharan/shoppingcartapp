import axios from "axios" 

export const userReg = async (payload) => {
    try{
        const regResponse = await axios.post('http://localhost:3000/register', payload);
        return regResponse;
    } catch (error) {
        console.log('Error in userReg: ', error);
        return error;
    }
};

export const userLogin = async (payload) => {
    try{
        const loginResponse = await axios.post('http://localhost:3000/login', payload);
        return loginResponse;
    } catch (error) {
        console.log('Error in userLogin: ', error);
        return error;
    }
};