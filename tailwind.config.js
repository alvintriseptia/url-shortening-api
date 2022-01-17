module.exports = {
	content: ["./src/**/*.{ts,tsx}"],
	theme: {
		colors: {
			cyan: "hsl(180, 66%, 49%)",
			"dark-violet": "hsl(257, 27%, 26%)",
			red: "hsl(0, 87%, 67%)",
			gray: "hsl(0, 0%, 75%)",
			"grayish-violet": "hsl(257, 7%, 63%)",
			"very-dark-blue": "hsl(255, 11%, 22%)",
			"very-dark-violet": "hsl(260, 8%, 14%)",
			white: "#fff",
			transparent: "transparent",
		},
		extend: {
			fontFamily: {
				sans: ["Poppins", "ui-sans-serif", "system-ui"],
			},
			fontSize: {
				base: ["18px", "24px"],
			},
		},
	},
	plugins: [],
};
