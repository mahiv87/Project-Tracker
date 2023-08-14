import React from 'react';
// import Auth from '../utils/auth';

import styles from './Home.module.css';
import ContactComponent from '../components/Contact/ContactComponent';
import FaqComponent from '../components/FAQ/FaqComponent';
import FeaturesComponent from '../components/FeaturesComponent/FeaturesComponent';
import TestimonialComponent from '../components/Testimonial/TestimonialComponent';
import InfoComponent from '../components/Info/InfoComponent';
import CompanyComponent from '../components/Company/CompanyComponent';

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
						{/* <div className={styles.tryButton}>
							<p className={styles.tryButtonText}>Try it now</p>
						</div> */}
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
			<CompanyComponent />
			<InfoComponent />
			<TestimonialComponent />
			<FeaturesComponent />
			<FaqComponent />
			<ContactComponent />
		</div>
	);
};

export default Home;
