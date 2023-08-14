import React, { useEffect, useCallback } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import {
	infoSlideInLeft500,
	infoSlideInRight500,
	infoSlideInLeft700
} from '../../utils/framerVariants';

import styles from './InfoComponent.module.css';

const InfoComponent = () => {
	const [infoRef, infoInView] = useInView();
	const infoControl = useAnimation();

	const handleInfoAnimation = useCallback(
		(ref, inView) => {
			if (inView) {
				infoControl.start('visible');
			} else {
				infoControl.start('hidden');
			}
		},
		[infoControl]
	);

	useEffect(() => {
		handleInfoAnimation(infoRef, infoInView);
	}, [handleInfoAnimation, infoRef, infoInView]);

	return (
		<section className={styles.infoContainer}>
			<article className={styles.infoContent}>
				<motion.h2
					ref={infoRef}
					variants={infoSlideInLeft700}
					animate={infoControl}
					initial="hidden"
					className={styles.infoHeading}
				>
					Discover a new workflow
				</motion.h2>
				<motion.article
					ref={infoRef}
					variants={infoSlideInLeft500}
					animate={infoControl}
					initial="hidden"
					className={styles.paragraphContainer}
				>
					<h3 className={styles.paragraphText}>
						Introducing Project Tracker, the ultimate solution for developers to
						keep their projects in check. Organize, track, and manage all your
						work in one place.
					</h3>
				</motion.article>
				<motion.div
					ref={infoRef}
					variants={infoSlideInRight500}
					animate={infoControl}
					initial="hidden"
					className={styles.decorationsContainer}
				>
					<div className={styles.infoDecoration}></div>
				</motion.div>
			</article>
		</section>
	);
};

export default InfoComponent;
