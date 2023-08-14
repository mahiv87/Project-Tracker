import React from 'react';

import styles from './Home.module.css';
import ContactComponent from '../components/Contact/ContactComponent';
import FaqComponent from '../components/FAQ/FaqComponent';
import FeaturesComponent from '../components/FeaturesComponent/FeaturesComponent';
import TestimonialComponent from '../components/Testimonial/TestimonialComponent';
import InfoComponent from '../components/Info/InfoComponent';
import CompanyComponent from '../components/Company/CompanyComponent';
import HeroComponent from '../components/Hero/HeroComponent';

const Home = () => {
	return (
		<div className={styles.homeContainer}>
			<HeroComponent />
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
