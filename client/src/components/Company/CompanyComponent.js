import React, { useEffect, useCallback } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import {
	companySlideInLeft500,
	companySlideInRight500
} from '../../utils/framerVariants';

import styles from './CompanyComponent.module.css';

const CompanyComponent = () => {
	const [companyRef, companyInView] = useInView();
	const companyControl = useAnimation();

	const handleCompanyAnimation = useCallback(
		(ref, inView) => {
			if (inView) {
				companyControl.start('visible');
			} else {
				companyControl.start('hidden');
			}
		},
		[companyControl]
	);

	useEffect(() => {
		handleCompanyAnimation(companyRef, companyInView);
	}, [handleCompanyAnimation, companyRef, companyInView]);

	return (
		<section className={styles.trustedContainer}>
			<h2 className={styles.trustedBy}>Trusted By</h2>
			<div className={styles.companiesContainer}>
				<motion.div
					ref={companyRef}
					variants={companySlideInLeft500}
					animate={companyControl}
					initial="hidden"
					className={styles.companyOne}
				></motion.div>
				<motion.div
					ref={companyRef}
					variants={companySlideInLeft500}
					animate={companyControl}
					initial="hidden"
					className={styles.companyTwo}
				></motion.div>
				<motion.div
					ref={companyRef}
					variants={companySlideInRight500}
					animate={companyControl}
					initial="hidden"
					className={styles.companyThree}
				></motion.div>
				<motion.div
					ref={companyRef}
					variants={companySlideInRight500}
					animate={companyControl}
					initial="hidden"
					className={styles.companyFour}
				></motion.div>
			</div>
		</section>
	);
};

export default CompanyComponent;
