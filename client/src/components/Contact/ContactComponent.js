import React, { useState, useEffect, useCallback } from 'react';
import { useFormspark } from '@formspark/use-formspark';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import {
	infoSlideInLeft500,
	leftTilt,
	rightTilt
} from '../../utils/framerVariants';
import styles from './ContactComponent.module.css';

const FORM_ID = process.env.REACT_APP_FORMSPARK_FORM_ID;

const ContactComponent = () => {
	const [contactRef, contactInView] = useInView();
	const [contactDecorationLeftRef, contactDecorationLeftInView] = useInView();
	const [contactDecorationRightRef, contactDecorationRightInView] = useInView();

	const contactControl = useAnimation();
	const contactDecorationLeftControl = useAnimation();
	const contactDecorationRightControl = useAnimation();

	const [submit, submitting] = useFormspark({
		formId: FORM_ID
	});

	const [message, setMessage] = useState('');

	const onFormSubmit = async (e) => {
		e.preventDefault();
		await submit({ message });
		alert('Form submitted');
	};

	const handleContactAnimation = useCallback(
		(ref, inView) => {
			if (inView) {
				contactControl.start('visible');
			} else {
				contactControl.start('hidden');
			}
		},
		[contactControl]
	);

	const handleContactDecorationLeftAnimation = useCallback(
		(ref, inView) => {
			if (inView) {
				contactDecorationLeftControl.start('visible');
			} else {
				contactDecorationLeftControl.start('hidden');
			}
		},
		[contactDecorationLeftControl]
	);

	const handleContactDecorationRightAnimation = useCallback(
		(ref, inView) => {
			if (inView) {
				contactDecorationRightControl.start('visible');
			} else {
				contactDecorationRightControl.start('hidden');
			}
		},
		[contactDecorationRightControl]
	);

	useEffect(() => {
		handleContactAnimation(contactRef, contactInView);
	}, [handleContactAnimation, contactRef, contactInView]);

	useEffect(() => {
		handleContactDecorationLeftAnimation(
			contactDecorationLeftRef,
			contactDecorationLeftInView
		);
	}, [
		handleContactDecorationLeftAnimation,
		contactDecorationLeftRef,
		contactDecorationLeftInView
	]);

	useEffect(() => {
		handleContactDecorationRightAnimation(
			contactDecorationRightRef,
			contactDecorationRightInView
		);
	}, [
		handleContactDecorationRightAnimation,
		contactDecorationRightRef,
		contactDecorationRightInView
	]);

	return (
		<section className={styles.contactContainer}>
			<h2 className={styles.contactTitle}>Contact</h2>
			<motion.form
				ref={contactRef}
				variants={infoSlideInLeft500}
				animate={contactControl}
				initial="hidden"
				onSubmit={onFormSubmit}
				className={styles.formContainer}
			>
				<div className={styles.formInputs}>
					<input
						className={styles.formInput}
						id="name"
						name="name"
						type="text"
						placeholder="Name"
					/>
					<input
						className={styles.formInput}
						id="email"
						name="email"
						type="text"
						placeholder="Email"
					/>
				</div>
				<textarea
					className={styles.formMessage}
					placeholder="Message"
					value={message}
					onChange={(e) => setMessage(e.target.value)}
				/>
				<button
					className={styles.formButton}
					type="submit"
					disabled={submitting}
				>
					Send
				</button>
			</motion.form>
			<div className={styles.decorationsContainer}>
				<motion.div
					ref={contactDecorationRightRef}
					variants={rightTilt}
					animate={contactDecorationRightControl}
					initial="hidden"
					className={styles.decorationOne}
				></motion.div>
				<motion.div
					ref={contactDecorationLeftRef}
					variants={leftTilt}
					animate={contactDecorationLeftControl}
					initial="hidden"
					className={styles.decorationTwo}
				></motion.div>
			</div>
		</section>
	);
};

export default ContactComponent;
