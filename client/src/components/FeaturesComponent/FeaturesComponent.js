import React, { useEffect, useCallback } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckCircle, Devices, SettingsBrightness } from '@mui/icons-material';

import { springFadeIn, container } from '../../utils/framerVariants';

import styles from './FeaturesComponent.module.css';

const FeaturesComponent = () => {
	const [containerRef, containerInView] = useInView();
	const [featureRef, featureInView] = useInView();
	const containerControl = useAnimation();
	const featureControl = useAnimation();

	const handleContainerAnimation = useCallback(
		(ref, inView) => {
			if (inView) {
				containerControl.start('visible');
			} else {
				containerControl.start('hidden');
			}
		},
		[containerControl]
	);

	const handleFeatureAnimation = useCallback(
		(ref, inView) => {
			if (inView) {
				featureControl.start('visible');
			} else {
				featureControl.start('hidden');
			}
		},
		[featureControl]
	);

	useEffect(() => {
		handleContainerAnimation(containerRef, containerInView);
	}, [handleContainerAnimation, containerRef, containerInView]);

	useEffect(() => {
		handleFeatureAnimation(featureRef, featureInView);
	}, [handleFeatureAnimation, featureRef, featureInView]);

	return (
		<section className={styles.featuresContainer}>
			<div className={styles.featuresHeading}>
				<p className={styles.featuresTitle}>Manage your projects stress free</p>
				<p className={styles.featuresSubtitle}>
					Project Tracker helps you manage your projects throughout the day
				</p>
			</div>
			<motion.div
				ref={containerRef}
				variants={container}
				animate={containerControl}
				initial="hidden"
				className={styles.featureCardContainer}
			>
				<motion.div
					ref={featureRef}
					variants={springFadeIn}
					className={styles.featureCard}
				>
					<div className={styles.featureCardContent}>
						<div className={styles.featureCardMain}>
							<div className={styles.featureCardHeading}>
								<Devices sx={{ color: '#ef476f', fontSize: 40 }} />
								<h3 className={styles.featureCardTitle}>For every device</h3>
							</div>
							<p className={styles.featureCardText}>
								Project Tracker works seamlessly across your Windows, iOS, and
								Android
							</p>
						</div>
					</div>
				</motion.div>
				<motion.div
					ref={featureRef}
					variants={springFadeIn}
					className={styles.featureCard}
				>
					<div className={styles.featureCardContent}>
						<div className={styles.featureCardMain}>
							<div className={styles.featureCardHeading}>
								<SettingsBrightness sx={{ color: '#ef476f', fontSize: 40 }} />
								<h3 className={styles.featureCardTitle}>Light & Dark</h3>
							</div>
							<p className={styles.featureCardText}>
								Some prefer dark. Some prefer light. Whatever style you like,
								it's your choice
							</p>
						</div>
					</div>
				</motion.div>
				<motion.div
					ref={featureRef}
					variants={springFadeIn}
					className={styles.featureCard}
				>
					<div className={styles.featureCardContent}>
						<div className={styles.featureCardMain}>
							<div className={styles.featureCardHeading}>
								<CheckCircle sx={{ color: '#ef476f', fontSize: 40 }} />
								<h3 className={styles.featureCardTitle}>Complete Tasks</h3>
							</div>
							<p className={styles.featureCardText}>
								Focus on what currently matters
							</p>
						</div>
					</div>
				</motion.div>
			</motion.div>
		</section>
	);
};

export default FeaturesComponent;
