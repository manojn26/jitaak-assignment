import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { loginUser } from '../redux/authSlice';
import { useNavigate } from 'react-router-dom';

const ForgotPasswordEmailInput = () => {
    const [email, setEmail] = useState('');
    //   const dispatch = useDispatch();
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        // dispatch(loginUser({ email, password }));
    };

    const navigatePasswordSetPage = () => {
        navigate("/otp-verify")
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-6 rounded shadow-md w-96">
                <h2 className="text-2xl font-bold mb-6 text-center">Forgot Password</h2>
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
                    <button
                        onClick={navigatePasswordSetPage}
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

export default ForgotPasswordEmailInput;
