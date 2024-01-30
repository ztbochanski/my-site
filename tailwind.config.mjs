/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	plugins: [require('@tailwindcss/typography'), require('daisyui')],
	daisyui: {
		themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          ".border-neutral": {
            "border-color": "#e5e7eb",
          },
        },
			},
			{
				acid: {
				...require("daisyui/src/theming/themes")["acid"],
				".border-neutral": {
					"border-color": "#e5e7eb",
				},
			},
		},
		{
			nord: {
				...require("daisyui/src/theming/themes")["nord"],
				".border-neutral": {
					"border-color": "#d1d5db",
				},
			},
		},
		{
			dark: {
				...require("daisyui/src/theming/themes")["dark"],
				".border-neutral": {
					"border-color": "#737373",
				},
			},
		},
		{
			black: {
				...require("daisyui/src/theming/themes")["black"],
				".border-neutral": {
					"border-color": "#737373",
				},
			},
		}],
	},
}
