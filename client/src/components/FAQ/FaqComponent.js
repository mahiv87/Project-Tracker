import React, { useEffect, useCallback } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import { springFadeIn } from '../../utils/framerVariants';

import styles from './FaqComponent.module.css';

const FaqComponent = () => {
	const [faqRef, faqInView] = useInView();
	const faqControl = useAnimation();

	const handleFaqAnimation = useCallback(
		(ref, inView) => {
			if (inView) {
				faqControl.start('visible');
			} else {
				faqControl.start('hidden');
			}
		},
		[faqControl]
	);

	useEffect(() => {
		handleFaqAnimation(faqRef, faqInView);
	}, [handleFaqAnimation, faqRef, faqInView]);

	return (
		<section className={styles.faqContainer}>
			<h2 className={styles.faqHeading}>Frequently Asked Questions</h2>
			<motion.div
				ref={faqRef}
				variants={springFadeIn}
				animate={faqControl}
				initial="hidden"
				className={styles.faqQuestionsContainer}
			>
				<div className={styles.faqQuestion}>
					<h2 className={styles.faqQuestionTitle}>
						How secure is Project Tracker?
					</h2>
					<p className={styles.faqQuestionText}>
						Rest assured, Project Tracker employs state-of-the-art security
						measures to protect your data.
					</p>
				</div>
				<div className={styles.faqQuestion}>
					<h2 className={styles.faqQuestionTitle}>
						What are your fees and how are they charged?
					</h2>
					<p className={styles.faqQuestionText}>
						As a free software service, we don't charge any fees for our
						services. We are committed to providing our software at no cost to
						our users. Our goal is to offer valuable tools to support your needs
						without any financial burden
					</p>
				</div>
			</motion.div>
		</section>
	);
};

export default FaqComponent;
