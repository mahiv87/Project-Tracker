import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';
import { Tabs } from 'flowbite-react';
// import { TableIcon } from '@heroicons/react/outline';
import Auth from '../utils/auth';

const AppNavbar = () => {
	// SET MODAL DISPLAY STATE
	const [showModal, setShowModal] = useState(false);
	const [navbarOpen, setNavbarOpen] = useState(false);
	const navigate = useNavigate();

	const logout = (event) => {
		event.preventDefault();
		navigate('/', { replace: true });
		Auth.logout();
	};

	return (
		<>
			<nav className="relative flex flex-wrap items-center justify-between px-2 py-3">
				<div className="container px-4 mx-auto flex flex-wrap items-center justify-between font-thasadith">
					<div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
						{/* <p className="text-lg font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap text-white">
							<i className="fa-solid fa-code pr-2"></i>
							Project Tracker
						</p> */}
						<button
							className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
							type="button"
							onClick={() => setNavbarOpen(!navbarOpen)}
						>
							<i
								className={
									navbarOpen ? 'fa-solid fa-plus rotate-45' : 'fa-solid fa-plus'
								}
							></i>
						</button>
					</div>
					<div
						className={
							navbarOpen
								? 'absolute z-10 top-14 left-0 bg-gradient-to-r from-indigo-500 via-cyan-500 to-green-500 dark:from-purple-500 dark:to-pink-500 w-full flex'
								: 'lg:flex flex-grow items-center hidden'
						}
					>
						<ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
							{Auth.loggedIn() ? (
								<li className="nav-item flex wrop">
									<Link
										to="/projects"
										className="px-3 py-2 flex items-center text-sm font-bold leading-snug text-white hover:opacity-75"
										onClick={function () {
											setNavbarOpen(false);
										}}
									>
										<span className="ml-2 px-2">My Projects</span>
										<i className="fa-solid fa-terminal text-md leading-lg text-white opacity-75"></i>
									</Link>
									<Link
										to="/"
										onClick={logout}
										className="px-3 py-2 flex items-center text-sm font-bold leading-snug text-white hover:opacity-75"
									>
										Logout
										<i className="fab fa-regular fa-user text-lg leading-lg text-white opacity-75"></i>
									</Link>
								</li>
							) : (
								<li className="nav-item">
									<Link
										to="/"
										className="px-3 py-2 flex items-center text-sm leading-snug text-white "
										onClick={function () {
											setShowModal(true);
											setNavbarOpen(false);
										}}
									>
										<span className="login font-bold text-base text-blackText ml-2 p-2 bg-secondary rounded-full tracking-wide">
											Login / Signup
											{/* <i className="fab fa-regular fa-user text-lg leading-lg text-white opacity-75"></i> */}
										</span>
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
						? 'overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center flex backdrop-blur-lg'
						: 'hidden'
				}
			>
				<div className="relative p-4 w-full max-w-md h-full md:h-auto">
					{/* <!-- Modal content --> */}
					<div className="flex justify-end">
						<button className="" onClick={() => setShowModal(false)}>
							<i className="fa-solid fa-xmark text-neutral-500 dark:text-white hover:text-purple-900 dark:hover:text-indigo-500"></i>
						</button>
					</div>

					<Tabs.Group aria-label="Default tabs" style={'underline'}>
						<Tabs.Item title="Login">
							<LoginForm handleModalClose={() => setShowModal(false)} />
						</Tabs.Item>
						<Tabs.Item title="Signup">
							<SignupForm handleModalClose={() => setShowModal(false)} />
						</Tabs.Item>
					</Tabs.Group>
				</div>
			</div>
		</>
	);
};

export default AppNavbar;

// bg-gradient-to-r from-purple-500 to-pink-500 DARK
// bg-gradient-to-r from-indigo-500 via-cyan-500 to-green-500 LIGHT
