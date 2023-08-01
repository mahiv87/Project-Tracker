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

export const scale = {
	visible: {
		scale: 1,
		transition: { duration: 0.3, ease: 'easeOut' }
	},
	hidden: { scale: 0.5 }
};
