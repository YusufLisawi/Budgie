/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				"soft-dark": "#2B3035",
				"dark-main": "#25292D",
				"blue-main": "#B5D0E9",
				"soft-yellow": "#FFFBEC",
				"brown-main": "#AC4800",
				"yellow-main": "#FFE897",
				"green-main": "#88E45C",
				"green-dark": "#9cea78",
				"green-text": "#234114",
				"red-main": "#EE6464",
				"red-text": "#4B1919",
			},
			width: {
				25: "6.5rem",
			},
		},
	},
	plugins: [],
};
