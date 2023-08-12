/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.{js,jsx,ts,tsx}',
		'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
	],
	theme: {
		extend: {
			colors: {
				offWhite: '#f2f2f2',
				primary: '#073b4c',
				secondary: '#ef476f',
				greenText: '#06d6a0',
				blackText: '#3f3d56'
			},
			fontSize: {
				tiny: '.5rem'
			},
			fontFamily: {
				thasadith: ['Thasadith']
			},
			animation: {
				wiggle: 'wiggle 300ms ease-in-out 0s infinite',
				fadeIn: 'fadeIn 1000ms ease-in-out 0s 1',
				fadeInLong: 'fadeInLong 1s ease-in-out 2s 1 forwards'
			},
			keyframes: {
				wiggle: {
					'0%, 100%': { transform: 'rotate(-3deg)' },
					'50%': { transform: 'rotate(3deg)' }
				},
				fadeIn: {
					'0%': { opacity: '0', transform: 'scale(1)' },
					'80%': { opacity: '0.5', transform: 'scale(1.25)' },
					'100%': { opacity: '1', transform: 'scale(1)' }
				},
				fadeInLong: {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' }
				}
			}
		}
	},
	plugins: [require('flowbite/plugin')]
};
