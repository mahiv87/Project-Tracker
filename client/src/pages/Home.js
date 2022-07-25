import React from 'react';

const Home = () => {
	return (
		<>
			<section className="container mx-auto flex flex-col justify-center items-center text-center w-full h-[calc(100vh-5rem)]">
				<h1 className="text-6xl font-thasadith animate-fadeIn">Welcome to Project Tracker</h1>
				<p className="text-center my-2 text-neutral-500 italic opacity-0 animate-fadeInLong">
					login to continue
				</p>
			</section>
		</>
	);
};

export default Home;
