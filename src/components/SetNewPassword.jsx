import React, { useState } from 'react';
import { passwordValidate } from '../utils/validate';
import { auth } from '../utils/firebaseConfig';
import { updatePassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { loginUser } from '../redux/authSlice';

const SetNewPassword = () => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('')
    const navigate = useNavigate()

    //   const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!password || !confirmPassword) {
            setErrorMessage("Password fields can't empty")
            return;
        }

        if (password !== confirmPassword) {
            setErrorMessage("Password and Confirmpassword should be same")
            return
        }

        const message = passwordValidate(password);
        setErrorMessage(message)

        if (errorMessage) return;

        const user = auth.currentUser;

        updatePassword(user, password).then((val) => {
            console.log(val);
            navigate("/login")


        }).catch((err) => {
            setErrorMessage(err.message)
        })

    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-6 rounded shadow-md w-96">
                <h2 className="text-2xl font-bold mb-6 text-center">Setting New Password</h2>
                <p className='text-lg font-bold text-red-500'>{errorMessage}</p>
                <form >
                    <div className="mb-4">
                        <label className="block mb-1 font-medium text-gray-600">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-yellow-300"
                            placeholder="••••••••"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block mb-1 font-medium text-gray-600">Confirm Password</label>
                        <input
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-yellow-300"
                            placeholder="••••••••"
                            required
                        />
                    </div>

                    <button
                        onClick={handleSubmit}
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

export default SetNewPassword;
