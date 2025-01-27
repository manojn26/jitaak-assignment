import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../redux/authSlice';
import { useNavigate } from 'react-router-dom';
import { checkValidSignInData } from '../utils/validate';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../utils/firebaseConfig';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const dispatch = useDispatch();

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        // dispatch(loginUser({ email, password }));

        // Validating Form Data
        const message = checkValidSignInData(email, password);
        setErrorMessage(message);

        if (errorMessage) return;
        console.log(email, password);

        // Firebase Signin Logic
        // Sign in
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
                const { uid, email, displayName, photoURL } = user;
                dispatch(loginUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }))
                navigate("/dashboard")
            })

            .catch((error) => {
                setErrorMessage(error.message)
            });
    };

    const navigateEmailSentPage = () => {
        navigate("/forgot-password-email")
    }

    const navigateRegisterPage = () => {
        navigate("/")
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-6 rounded shadow-md w-96">
                <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
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

                    <div>
                        <p onClick={navigateEmailSentPage} className='mb-5 mt-[-15px] cursor-pointer text-blue-500'>Forgot Password?</p>
                    </div>
                    <div>
                        <p onClick={navigateRegisterPage} className='mb-5 mt-[-15px] cursor-pointer text-blue-500'>Dont't have an account?</p>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-2 px-4 rounded focus:outline-none focus:ring focus:ring-yellow-300"
                    >
                        ログイン
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
