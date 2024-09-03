/** @type {import('tailwindcss').Config} */
module.exports = {
	// NOTE: Update this to include the paths to all of your component files.
	content: ['./src/**/*.{ts,tsx}'],
	presets: [require('nativewind/preset')],
	theme: {
		extend: {
			colors: {
				custom_white: '#FFFFFF',
				custom_green_700: '#00875F',
				custom_green_500: '#00B37E',
				custom_red: '#F75A68',
				custom_red_dark: '#AA2834',
				custom_gray_700: '#121214',
				custom_gray_600: '#202024',
				custom_gray_500: '#29292E',
				custom_gray_400: '#323238',
				custom_gray_300: '#7C7C8A',
				custom_gray_200: '#C4C4CC',
				custom_gray_100: '#E1E1E6',
			},
			fontFamily: {
				'roboto-regular': ['Roboto_400Regular', 'sans-serif'],
				'roboto-bold': ['Roboto_700Bold', 'sans-serif'],
			},
		},
	},
	plugins: [],
}
