import React, { useState } from 'react';
import { useNavigate } from "react-router-dom"
import { checkValidEmailPassword } from '../utils/validate';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from "../utils/firebaseConfig"
import { useDispatch } from 'react-redux';
import { loginUser } from '../redux/authSlice';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const dispatch = useDispatch();

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        // dispatch(loginUser({ email, password }));

        // Validating Form Data
        const message = checkValidEmailPassword(email, password);
        setErrorMessage(message);

        if (errorMessage) return;
        // console.log(email, password);

        // Firebase Signup Logic
        createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
            // Signed up
            const user = userCredential.user;
            updateProfile(auth.currentUser, {
                displayName: "HP Laptop", photoURL: "https://cdn-icons-png.flaticon.com/128/560/560277.png"
            }).then(() => {
                // Our Profile Updated
                const { uid, email, displayName, photoURL } = auth?.currentUser;
                dispatch(loginUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }))
                // Here We need to navigate user to Dashbord page, for now i will navigating to LoginScreen
                navigate("/login")
            }).catch((err) => {
                setErrorMessage(err.message)
            })
        }).catch((err) => {
            setErrorMessage(err.message)

        })


    };

    const navigateHandlerLogin = () => {
        navigate("/login");
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-6 rounded shadow-md w-96">
                <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
                <p className='text-lg font-bold text-red-500'>{errorMessage}</p>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block mb-1 font-medium text-gray-600">email address</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-yellow-300"
                            placeholder="example@example.com"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block mb-1 font-medium text-gray-600">password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-yellow-300"
                            placeholder="••••••••"
                            required
                        />
                    </div>
                    <div className='mb-5 mt-[-15px] cursor-pointer text-blue-500'>
                        <p onClick={navigateHandlerLogin}>Already have an account?</p>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-2 px-4 rounded focus:outline-none focus:ring focus:ring-yellow-300"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Register;
