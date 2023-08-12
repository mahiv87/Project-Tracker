export const companySlideInLeft500 = {
	visible: { x: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } },
	hidden: { x: '-100%', opacity: 0 }
};

export const companySlideInRight500 = {
	visible: { x: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } },
	hidden: { x: '100%', opacity: 0 }
};

export const infoSlideInLeft700 = {
	visible: { x: 0, opacity: 1, transition: { duration: 0.7, ease: 'easeOut' } },
	hidden: { x: '-100%', opacity: 0 }
};

export const infoSlideInLeft500 = {
	visible: { x: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } },
	hidden: { x: '-100%', opacity: 0 }
};

export const infoSlideInRight500 = {
	visible: { x: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } },
	hidden: { x: '100%', opacity: 0 }
};

export const scale400 = {
	visible: {
		scale: 1,
		opacity: 1,
		transition: { duration: 0.4, ease: 'easeOut' }
	},
	hidden: { scale: 0.1, opacity: 0 }
};

export const scale500 = {
	visible: {
		scale: 1,
		opacity: 1,
		transition: { delay: 0.1, duration: 0.5, ease: 'easeOut' }
	},
	hidden: { scale: 0.1, opacity: 0 }
};

export const container = {
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
			delayChildren: 0.3
		}
	},
	hidden: { opacity: 0 }
};

export const springFadeIn = {
	visible: {
		opacity: 1,
		y: 0,
		transition: { type: 'spring', bounce: 0.5, damping: 24, duration: 0.7 }
	},
	hidden: { opacity: 0, y: 20 }
};

export const leftTilt = {
	visible: {
		rotate: 56,
		transition: { type: 'spring', bounce: 0.5, damping: 24, duration: 0.3 }
	},
	hidden: { rotate: 90 }
};

export const rightTilt = {
	visible: {
		rotate: 154,
		transition: { type: 'spring', bounce: 0.5, damping: 24, duration: 0.3 }
	},
	hidden: { rotate: 90 }
};
