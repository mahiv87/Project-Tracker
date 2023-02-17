import React from 'react';
// import Auth from '../utils/auth';
import hero from '../images/software_engineer.svg';
import secondary from '../images/futuristic_interface.svg';
import waves from '../images/layered-waves.svg';
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
			<section className={styles.wave}>
				<img src={waves} alt="" />
				{/* <svg
					viewBox="0 0 500 150"
					preserveAspectRatio="none"
					height="100%"
					width="100%"
				>
					<path
						d="M0.00,49.98 C174.09,-87.31 306.71,109.05 500.84,-0.47 L500.00,150.00 L0.00,150.00 Z"
						stroke="none"
						fill="#fafafa"
					></path>
				</svg> */}
			</section>
			<section className={styles.info}>
				<img src={secondary} alt="" />
				<article>
					<h3>Stay organized</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Pellentesque dictum, odio vitae laoreet mollis, ipsum augue porta
						massa, quis dignissim sem nibh nec felis. Ut interdum nisi quis nibh
						efficitur.
					</p>
				</article>
				{/* <form>
					<h3>Have questions?</h3>
					<label>Name:</label>
					<input type="text" name="name" />
					<label>Email:</label>
					<input type="text" name="email" />
					<label>Message:</label>
					<textarea />
					<button type="submit">Submit</button>
				</form> */}
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
