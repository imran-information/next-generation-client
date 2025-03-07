import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import React, { createContext, useEffect, useState } from 'react';
import { auth } from "../../firebase/firebase.init";
import axios from "axios";

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider();

    const handleCreateUserWithEmail = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const handleSignInUser = (email, pass) => {
        return signInWithEmailAndPassword(auth, email, pass)
    }

    const handleSignOutUser = () => {
        return signOut(auth)
    }

    const handleGoogleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }


    const handleUpdateUserProfile = (name, photo) => {
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        })
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async currentUser => {
            console.log("currentUser=>", currentUser);
            if (currentUser?.email) {
                setUser(currentUser)
                const userEmail = currentUser.email;
                try {

                    const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/jwt`, { userEmail }, {
                        withCredentials: true
                    })
                    console.log(data);
                } catch (err) {
                    console.log(err.message);
                }
            } else {
                setUser(currentUser)
                try {
                    const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/signOut`, {
                        withCredentials: true
                    })
                    console.log(data);
                } catch (err) {
                    console.log(err.message);
                }
            }
            setLoading(false)
        })

        return () => {
            unsubscribe()
        }
    }, [])

    const authInfo = {
        handleGoogleSignIn,
        handleCreateUserWithEmail,
        handleUpdateUserProfile,
        user,
        loading,
        setUser,
        handleSignInUser,
        handleSignOutUser
    }



    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;