/** @type {import('tailwindcss').Config} */
import { join } from 'path'
import { skeleton } from '@skeletonlabs/tw-plugin'
import { myCustomTheme } from './customTheme'


export default {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}', join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')],
  	theme: {
    	extend: {},
  	},
  	plugins: [
		skeleton({
			themes: {
				// preset: [
				// 	{
				// 		name: 'modern',
				// 		enhancements: true,
				// 	},
				// ],
				custom: [
					myCustomTheme
				]
			},
		}),
	],
}

