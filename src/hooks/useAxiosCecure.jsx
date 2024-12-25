import axios from "axios";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const instance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true,
})


const useAxiosSecure = () => {
    const { handleSignOutUser } = useAuth()
    const navigate = useNavigate()
    useEffect(() => {
        instance.interceptors.response.use(res => {
            return res;


        }, async (error) => {
            if (error.response.status === 401 || error.response.status === 403) {
                // SignOut User 
                handleSignOutUser()
                navigate('/signIn')
            }
        })
    }, [handleSignOutUser, navigate])

    return instance;
}

export default useAxiosSecure;