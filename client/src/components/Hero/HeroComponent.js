import React from 'react';

import styles from './HeroComponent.module.css';

const HeroComponent = () => {
	return (
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
	);
};

export default HeroComponent;
