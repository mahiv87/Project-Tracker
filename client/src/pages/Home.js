import React, { useState, useEffect } from 'react';
// import Auth from '../utils/auth';
import { useFormspark } from '@formspark/use-formspark';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
	CheckCircle,
	Devices,
	FormatQuote,
	SettingsBrightness
} from '@mui/icons-material';

import styles from './Home.module.css';
import {
	scale,
	slideInLeft500,
	slideInLeft700,
	slideInRight500
} from '../utils/framerVariants';

const FORM_ID = process.env.REACT_APP_FORMSPARK_FORM_ID;

const Home = () => {
	const [ref, inView] = useInView();
	const control = useAnimation();
	const [submit, submitting] = useFormspark({
		formId: FORM_ID
	});

	const [message, setMessage] = useState('');

	const onFormSubmit = async (e) => {
		e.preventDefault();
		await submit({ message });
		alert('Form submitted');
	};

	useEffect(() => {
		if (inView) {
			control.start('visible');
		} else {
			control.start('hidden');
		}
	}, [control, inView]);

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
					<motion.div
						ref={ref}
						variants={slideInLeft500}
						animate={control}
						initial="hidden"
						className={styles.companyOne}
					></motion.div>
					<motion.div
						ref={ref}
						variants={slideInLeft500}
						animate={control}
						initial="hidden"
						className={styles.companyTwo}
					></motion.div>
					<motion.div
						ref={ref}
						variants={slideInRight500}
						animate={control}
						initial="hidden"
						className={styles.companyThree}
					></motion.div>
					<motion.div
						ref={ref}
						variants={slideInRight500}
						animate={control}
						initial="hidden"
						className={styles.companyFour}
					></motion.div>
				</div>
			</section>
			<section className={styles.infoContainer}>
				<article className={styles.infoContent}>
					<motion.h2
						ref={ref}
						variants={slideInLeft700}
						animate={control}
						initial="hidden"
						className={styles.infoHeading}
					>
						Discover a new workflow
					</motion.h2>
					<motion.article
						ref={ref}
						variants={slideInLeft500}
						animate={control}
						initial="hidden"
						className={styles.paragraphContainer}
					>
						<h3 className={styles.paragraphText}>
							Introducing Project Tracker, the ultimate solution for developers
							to keep their projects in check. Organize, track, and manage all
							your work in one place.
						</h3>
					</motion.article>
					<motion.div
						ref={ref}
						variants={slideInRight500}
						animate={control}
						initial="hidden"
						className={styles.decorationsContainer}
					>
						<div className={styles.infoDecoration}></div>
					</motion.div>
				</article>
			</section>
			<section className={styles.testimonialsContainer}>
				<div className={styles.testimonialsContent}>
					<motion.article
						ref={ref}
						variants={scale}
						animate={control}
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
					<article className={styles.testimonialsCardRight}>
						<p className={styles.testimonialsText}>
							<FormatQuote />
							Our workflow has improved dramatically with Project Tracker. It's
							become an essential tool for our development team
							<FormatQuote />
						</p>
						<p className={styles.testimonialsClient}>Startup Coders</p>
					</article>
				</div>
			</section>
			<section className={styles.featuresContainer}>
				<div className={styles.featuresHeading}>
					<p className={styles.featuresTitle}>
						Manage your projects stress free
					</p>
					<p className={styles.featuresSubtitle}>
						Project Tracker helps you manage your projects throughout the day
					</p>
				</div>
				<div className={styles.featureCardContainer}>
					<div className={styles.featureCard}>
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
					</div>
					<div className={styles.featureCard}>
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
					</div>
					<div className={styles.featureCard}>
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
					</div>
				</div>
			</section>
			<section className={styles.faqContainer}>
				<h2 className={styles.faqHeading}>Frequently Asked Questions</h2>
				<div className={styles.faqQuestionsContainer}>
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
							our users. Our goal is to offer valuable tools to support your
							needs without any financial burden
						</p>
					</div>
				</div>
			</section>
			<section className={styles.contactContainer}>
				<h2 className={styles.contactTitle}>Contact</h2>
				<form onSubmit={onFormSubmit} className={styles.formContainer}>
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
				</form>
				<div className={styles.decorationsContainer}>
					<div className={styles.decorationOne}></div>
					<div className={styles.decorationTwo}></div>
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
