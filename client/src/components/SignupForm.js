import React, { useState } from 'react';
import Auth from '../utils/auth';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { ADD_USER } from '../utils/mutations';

const SignupForm = () => {
	const [userFormData, setUserFormData] = useState({ email: '', password: '' });
	// const [showAlert, setShowAlert] = useState(false);
	const [addUser, { data }] = useMutation(ADD_USER);

	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setUserFormData({ ...userFormData, [name]: value });
	};

	const handleFormSubmit = async (event) => {
		event.preventDefault();

		try {
			const { data } = await addUser({
				variables: { ...userFormData }
			});
			// console.log(data);

			Auth.login(data.addUser.token);
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
			{/* SIGNUP FORM */}
			<div>
				{data ? (
					<p className="dark:text-white">
						Success! You may now head <Link to="/">back to the homepage.</Link>
					</p>
				) : (
					<form onSubmit={handleFormSubmit}>
						<div className="relative z-0 mb-6 w-full group">
							<input
								type="email"
								name="email"
								id="email_input"
								className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
								placeholder=" "
								onChange={handleInputChange}
								value={userFormData.email}
								required
							/>
							<label
								htmlFor="email"
								className="peer-focus:font-medium absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
							>
								Email
							</label>
						</div>
						<div className="relative z-0 mb-6 w-full group">
							<input
								type="password"
								name="password"
								id="password_input"
								className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
								placeholder=" "
								onChange={handleInputChange}
								value={userFormData.password}
								required
							/>
							<label
								htmlFor="password"
								className="peer-focus:font-medium absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
							>
								Password
							</label>
						</div>
						<button
							type="submit"
							className="flex mx-auto px-4 py-1 mb-2 overflow-hidden text-sm font-bold text-gray-900 rounded-full border-2 border-secondary hover:text-offWhite hover:bg-secondary transition-all ease-in duration-150"
						>
							Submit
						</button>
					</form>
				)}
			</div>
		</>
	);
};

export default SignupForm;
