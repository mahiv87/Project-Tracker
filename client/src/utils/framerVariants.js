export const slideInLeft500 = {
	visible: { x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
	hidden: { x: '-100%' }
};

export const slideInRight500 = {
	visible: { x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
	hidden: { x: '100%' }
};

export const slideInLeft700 = {
	visible: { x: 0, transition: { duration: 0.7, ease: 'easeOut' } },
	hidden: { x: '-100%' }
};

export const scale400 = {
	visible: {
		scale: 1,
		transition: { duration: 0.4, ease: 'easeOut' }
	},
	hidden: { scale: 0.1 }
};

export const scale500 = {
	visible: {
		scale: 1,
		transition: { delay: 0.1, duration: 0.5, ease: 'easeOut' }
	},
	hidden: { scale: 0.1 }
};
