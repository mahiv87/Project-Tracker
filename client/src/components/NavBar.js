import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import SignUpForm from './SignupForm';
import LoginForm from './LoginForm';
import { Tabs } from 'flowbite-react';
// import { TableIcon } from '@heroicons/react/outline';

import Auth from '../utils/auth';

const styles = {
	tabs: {
		background: '#212121'
	}
};

const AppNavbar = () => {
	// SET MODAL DISPLAY STATE
	const [showModal, setShowModal] = useState(false);
	const [navbarOpen, setNavbarOpen] = useState(false);

	return (
		<>
			<nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-neutral-800 mb-3">
				<div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
					<div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
						<p className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white">
							<i className="fa-solid fa-code px-2"></i>
							Project Tracker
						</p>
						<button
							className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
							type="button"
							onClick={() => setNavbarOpen(!navbarOpen)}
						>
							<i className={navbarOpen ? 'fa-solid fa-plus rotate-45' : 'fa-solid fa-plus'}></i>
						</button>
					</div>
					<div
						className={
							navbarOpen
								? 'absolute z-10 top-14 left-0 bg-neutral-800 w-full flex'
								: 'lg:flex flex-grow items-center hidden'
						}
					>
						<ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
							{Auth.loggedIn() ? (
								<li className="nav-item">
									<Link
										to="/saved"
										className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
										onClick={function () {
											setNavbarOpen(false);
										}}
									>
										<span className="ml-2 px-2">My Projects</span>
										<i className="fa-solid fa-terminal text-md leading-lg text-white opacity-75"></i>
									</Link>
									<Link
										onClick={[
											Auth.logout,
											function () {
												setNavbarOpen(false);
											}
										]}
									>
										Logout
										<i className="fab fa-regular fa-user text-lg leading-lg text-white opacity-75"></i>
									</Link>
								</li>
							) : (
								<li className="nav-item">
									<Link
										to="/"
										className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
										onClick={function () {
											setShowModal(true);
											setNavbarOpen(false);
										}}
									>
										<span className="ml-2 px-2">Login/Signup</span>
										<i className="fab fa-regular fa-user text-lg leading-lg text-white opacity-75"></i>
									</Link>
								</li>
							)}
						</ul>
					</div>
				</div>
			</nav>

			{/* <!-- modal --> */}
			<div
				className={
					showModal
						? 'overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center flex backdrop-blur-sm'
						: 'hidden'
				}
			>
				<div className="relative p-4 w-full max-w-md h-full md:h-auto">
					{/* <!-- Modal content --> */}
					<div className="flex justify-end">
						<button className="" onClick={() => setShowModal(false)}>
							<i className="fa-solid fa-xmark text-neutral-500 hover:text-purple-900"></i>
						</button>
					</div>

					<Tabs.Group aria-label="Default tabs" style={'underline'}>
						<Tabs.Item title="Login">
							<LoginForm />
						</Tabs.Item>
						<Tabs.Item title="Signup">
							<form>
								<div className="relative z-0 mb-6 w-full group">
									<input
										type="email"
										name="floating_email"
										id="floating_email"
										className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
										placeholder=" "
										required=""
									/>
									<label
										for="floating_email"
										className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
									>
										Email address
									</label>
								</div>
								<div className="relative z-0 mb-6 w-full group">
									<input
										type="password"
										name="floating_password"
										id="floating_password"
										className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
										placeholder=" "
										required=""
									/>
									<label
										for="floating_password"
										className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
									>
										Password
									</label>
								</div>
								<button
									type="submit"
									className="flex mx-auto p-0.5 mb-2  overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-2 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
								>
									<span className="justify-center px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
										Submit
									</span>
								</button>
							</form>
						</Tabs.Item>
					</Tabs.Group>
				</div>
			</div>
		</>
	);
};

export default AppNavbar;
