import React from 'react';
import Auth from '../utils/auth';
import hero from '../images/software_engineer.svg';
import secondary from '../images/futuristic_interface.svg';
import styles from './Home.module.css';

const Home = () => {
	return (
		<>
			<section className={styles.hero}>
				<div className={styles.heading}>
					<h1>Project</h1>
					<span className={styles.indent}>Tracker</span>
					<button>
						Get started<span> now</span>
					</button>
				</div>
				<img src={hero} alt="" />
			</section>
			<section className={styles.info}>
				<article>
					<h3>Stay organized</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Pellentesque dictum, odio vitae laoreet mollis, ipsum augue porta
						massa, quis dignissim sem nibh nec felis. Ut interdum nisi quis nibh
						efficitur.
					</p>
				</article>
				<img src={secondary} alt="" />
				<form>
					<h3>Have questions?</h3>
					<label>Name:</label>
					<input type="text" name="name"></input>
					<label>Email:</label>
					<input type="text" name="email"></input>
					<button type="submit">Submit</button>
				</form>
			</section>
		</>
	);
};

export default Home;

/* <section className="container mx-auto flex flex-col justify-center items-center text-center w-full h-[calc(100vh-5rem)]">
				<h1 className="text-6xl font-thasadith animate-fadeIn dark:text-neutral-200">
					Welcome to Project Tracker
				</h1>
				{!Auth.loggedIn() && (
					<p className="text-center my-2 text-neutral-500 italic opacity-0 animate-fadeInLong">
						login or signup to continue
					</p>
				)}
			</section> */
