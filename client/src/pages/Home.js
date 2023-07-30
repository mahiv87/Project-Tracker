import React from 'react';
// import Auth from '../utils/auth';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

import styles from './Home.module.css';

const Home = () => {
	return (
		<div className={styles.homeContainer}>
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
			<section className={styles.infoContainer}>
				<article className={styles.infoContent}>
					<h2 className={styles.infoHeading}>Discover a new workflow</h2>
					<article className={styles.paragraphContainer}>
						<h3 className={styles.paragraphText}>
							Introducing Project Tracker, the ultimate solution for developers
							to keep their projects in check. Organize, track, and manage all
							your work in one place.
						</h3>
					</article>
				</article>
				<div className={styles.infoDecoration}></div>
			</section>
			<section className={styles.testimonialsContainer}>
				<div className={styles.testimonialsContent}>
					<article className={styles.testimonialsCardLeft}>
						<p className={styles.testimonialsText}>
							<FormatQuoteIcon />
							Project Tracker revolutionized the way our team manages multile
							projects. It's easy to use and provides the right set of
							functionalities
							<FormatQuoteIcon />
						</p>
						<p className={styles.testimonialsClient}>Very Large Tech Firm</p>
					</article>
					<article className={styles.testimonialsCardRight}>
						<p className={styles.testimonialsText}>
							<FormatQuoteIcon />
							Our workflow has improved dramatically with Project Tracker. It's
							become an essential tool for our development team
							<FormatQuoteIcon />
						</p>
						<p className={styles.testimonialsClient}>Startup Coders</p>
					</article>
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
