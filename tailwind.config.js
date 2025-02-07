/** @type {import('tailwindcss').Config} */
const {
	default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");
export const content = [
	"./pages/**/*.{js,ts,jsx,tsx,mdx}",
	"./components/**/*.{js,ts,jsx,tsx,mdx}",
	"./app/**/*.{js,ts,jsx,tsx,mdx}",
];
export const theme = {
	extend: {
		colors: {
			background: "var(--background)",
			foreground: "var(--foreground)",
			"waikawa-gray": {
				50: "#f4f7fa",
				100: "#e6ecf3",
				200: "#d3ddea",
				300: "#b5c8db",
				400: "#91abc9",
				500: "#7791ba",
				600: "#647dac",
				700: "#586b9b",
				800: "#4c5a81",
				900: "#404c68",
				950: "#2a3041",
			},
		},
	},
};
export const darkMode = "class";
export const plugins = [addVariablesForColors];

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }) {
	let allColors = flattenColorPalette(theme("colors"));
	let newVars = Object.fromEntries(
		Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
	);

	addBase({
		":root": newVars,
	});
}
