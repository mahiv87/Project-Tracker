import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';

const LoginForm = () => {
	const [userFormData, setUserFormData] = useState({ email: '', password: '' });
	// const [validated] = useState(false);
	// const [showAlert, setShowAlert] = useState(false);
	const [login, { error, data }] = useMutation(LOGIN_USER);

	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setUserFormData({ ...userFormData, [name]: value });
	};

	const handleFormSubmit = async (event) => {
		event.preventDefault();
		try {
			const { data } = await login({
				variables: { ...userFormData }
			});
			console.log(data);

			Auth.login(data.login.token);
		} catch (err) {
			console.error(err);
			// setShowAlert(true);
		}

		setUserFormData({
			email: '',
			password: ''
		});
	};

	return (
		<>
			{/* ALERT POPUP */}
			{error && (
				<div
					id="alert-additional-content-2"
					className="p-4 mb-4 bg-red-100 rounded-sm dark:bg-red-200"
					role="alert"
				>
					<div className="flex items-center justify-center mb-3">
						<svg
							aria-hidden="true"
							className="mr-2 w-5 h-5 text-red-700 dark:text-red-800"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fillRule="evenodd"
								d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
								clipRule="evenodd"
							></path>
						</svg>
						<span className="sr-only">Info</span>
						<h3 className="text-lg font-medium text-red-700 dark:text-red-800">Invalid credentials</h3>
					</div>
					<div className="flex">
						<button
							type="button"
							className="mx-auto text-red-700 bg-transparent border border-red-700 hover:bg-red-800 hover:text-white focus:ring-2 focus:outline-none focus:ring-red-300 font-medium rounded-sm text-xs px-3 py-1.5 text-center dark:border-red-800 dark:text-red-800 dark:hover:text-white"
							data-dismiss-target="#alert-additional-content-2"
							aria-label="Close"
						>
							Dismiss
						</button>
					</div>
				</div>
			)}

			{/* LOGIN FORM */}
			{data ? (
				<p>
					Success! You may now head <Link to="/">back to the homepage.</Link>
				</p>
			) : (
				<form onSubmit={handleFormSubmit}>
					<div className="relative z-0 mb-6 w-full group">
						<input
							type="email"
							name="email"
							// id="floating_email"
							className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
							placeholder=" "
							value={userFormData.email}
							onChange={handleInputChange}
							required
						/>
						<label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
							Email
						</label>
					</div>
					<div className="relative z-0 mb-6 w-full group">
						<input
							type="password"
							name="password"
							// id="floating_password"
							className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
							placeholder=" "
							value={userFormData.password}
							onChange={handleInputChange}
							required
						/>
						<label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
							Password
						</label>
					</div>
					<button
						type="submit"
						className="flex mx-auto p-0.5 mb-2  overflow-hidden text-sm font-medium text-gray-900 rounded-sm group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-2 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
					>
						<span className="justify-center px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-sm group-hover:bg-opacity-0">
							Submit
						</span>
					</button>
				</form>
			)}
		</>
	);
};

export default LoginForm;
