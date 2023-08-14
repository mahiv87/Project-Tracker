import React, { useEffect, useCallback } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FormatQuote } from '@mui/icons-material';
import { scale400, scale500 } from '../../utils/framerVariants';

import styles from './TestimonialComponent.module.css';

const TestimonialComponent = () => {
	const [testimonialRef, testimonialInView] = useInView();
	const testimonialControl = useAnimation();

	const handleTestimonialAnimation = useCallback(
		(ref, inView) => {
			if (inView) {
				testimonialControl.start('visible');
			} else {
				testimonialControl.start('hidden');
			}
		},
		[testimonialControl]
	);

	useEffect(() => {
		handleTestimonialAnimation(testimonialRef, testimonialInView);
	}, [handleTestimonialAnimation, testimonialRef, testimonialInView]);

	return (
		<section className={styles.testimonialsContainer}>
			<div className={styles.testimonialsContent}>
				<motion.article
					ref={testimonialRef}
					variants={scale400}
					animate={testimonialControl}
					initial="hidden"
					className={styles.testimonialsCardLeft}
				>
					<p className={styles.testimonialsText}>
						<FormatQuote />
						Project Tracker revolutionized the way our team manages multile
						projects. It's easy to use and provides the right set of
						functionalities
						<FormatQuote />
					</p>
					<p className={styles.testimonialsClient}>Very Large Tech Firm</p>
				</motion.article>
				<motion.article
					ref={testimonialRef}
					variants={scale500}
					animate={testimonialControl}
					initial="hidden"
					className={styles.testimonialsCardRight}
				>
					<p className={styles.testimonialsText}>
						<FormatQuote />
						Our workflow has improved dramatically with Project Tracker. It's
						become an essential tool for our development team
						<FormatQuote />
					</p>
					<p className={styles.testimonialsClient}>Startup Coders</p>
				</motion.article>
			</div>
		</section>
	);
};

export default TestimonialComponent;
