import React from 'react';

const FooterComponent = () => {
	return (
		<div className="relative mt-3">
			<footer className="md:fixed md:bottom-0 md:left-0 md:right-0 flex flex-wrap items-center justify-start px-2 py-3 text-tiny">
				<i className="fa-solid fa-copyright mr-2"></i>
				<p>Marcus Herrera 2022</p>
			</footer>
		</div>
	);
};

export default FooterComponent;
