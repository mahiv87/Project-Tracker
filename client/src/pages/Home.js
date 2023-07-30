import React from 'react';
// import Auth from '../utils/auth';

import styles from './Home.module.css';

const Home = () => {
	return (
		<div className={styles.desktop}>
			<section className={styles.hero}>
				<main className={styles.container}>
					<article className={styles.contentLeft}>
						<div className={styles.logoContainer}>
							<p className={styles.projectTracker}>Project Tracker</p>
						</div>
						<h1 className={styles.tagline}>Manage projects effortlessly</h1>
						<div className={styles.tryButton}>
							<p className={styles.tryButtonText}>Try it now</p>
						</div>
					</article>
					<article className={styles.contentRight}>
						<div className={styles.blobTopLeft}></div>
						<div className={styles.imgTopRight}></div>
						<div className={styles.imgCenterLeft}></div>
						<div className={styles.blobCenter}></div>
						<div className={styles.imgCenterRight}></div>
						<div className={styles.blobBottomLeft}></div>
						<div className={styles.imgBottomRight}></div>
					</article>
				</main>
			</section>
			<section className={styles.trustedContainer}>
				<h2 className={styles.trustedBy}>Trusted By</h2>
				<div className={styles.companiesContainer}>
					<div className={styles.companyOne}></div>
					<div className={styles.companyTwo}></div>
					<div className={styles.companyThree}></div>
					<div className={styles.companyFour}></div>
				</div>
			</section>
		</div>
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
