
import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const myCustomTheme: CustomThemeConfig = {
    name: 'my-custom-theme',
	properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `system-ui`,
		"--theme-font-family-heading": `system-ui`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "9999px",
		"--theme-rounded-container": "8px",
		"--theme-border-base": "1px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "255 255 255",
		"--on-secondary": "255 255 255",
		"--on-tertiary": "0 0 0",
		"--on-success": "0 0 0",
		"--on-warning": "0 0 0",
		"--on-error": "255 255 255",
		"--on-surface": "255 255 255",
		// =~= Theme Colors  =~=
		// primary | #0cc0df 
		"--color-primary-50": "219 246 250", // #dbf6fa
		"--color-primary-100": "206 242 249", // #cef2f9
		"--color-primary-200": "194 239 247", // #c2eff7
		"--color-primary-300": "158 230 242", // #9ee6f2
		"--color-primary-400": "85 211 233", // #55d3e9
		"--color-primary-500": "12 192 223", // #0cc0df
		"--color-primary-600": "11 173 201", // #0badc9
		"--color-primary-700": "9 144 167", // #0990a7
		"--color-primary-800": "7 115 134", // #077386
		"--color-primary-900": "6 94 109", // #065e6d
		// secondary | #5c54f2 
		"--color-secondary-50": "231 229 253", // #e7e5fd
		"--color-secondary-100": "222 221 252", // #deddfc
		"--color-secondary-200": "214 212 252", // #d6d4fc
		"--color-secondary-300": "190 187 250", // #bebbfa
		"--color-secondary-400": "141 135 246", // #8d87f6
		"--color-secondary-500": "92 84 242", // #5c54f2
		"--color-secondary-600": "83 76 218", // #534cda
		"--color-secondary-700": "69 63 182", // #453fb6
		"--color-secondary-800": "55 50 145", // #373291
		"--color-secondary-900": "45 41 119", // #2d2977
		// tertiary | #0EA5E9 
		"--color-tertiary-50": "219 242 252", // #dbf2fc
		"--color-tertiary-100": "207 237 251", // #cfedfb
		"--color-tertiary-200": "195 233 250", // #c3e9fa
		"--color-tertiary-300": "159 219 246", // #9fdbf6
		"--color-tertiary-400": "86 192 240", // #56c0f0
		"--color-tertiary-500": "14 165 233", // #0EA5E9
		"--color-tertiary-600": "13 149 210", // #0d95d2
		"--color-tertiary-700": "11 124 175", // #0b7caf
		"--color-tertiary-800": "8 99 140", // #08638c
		"--color-tertiary-900": "7 81 114", // #075172
		// success | #84cc16 
		"--color-success-50": "237 247 220", // #edf7dc
		"--color-success-100": "230 245 208", // #e6f5d0
		"--color-success-200": "224 242 197", // #e0f2c5
		"--color-success-300": "206 235 162", // #ceeba2
		"--color-success-400": "169 219 92", // #a9db5c
		"--color-success-500": "132 204 22", // #84cc16
		"--color-success-600": "119 184 20", // #77b814
		"--color-success-700": "99 153 17", // #639911
		"--color-success-800": "79 122 13", // #4f7a0d
		"--color-success-900": "65 100 11", // #41640b
		// warning | #EAB308 
		"--color-warning-50": "252 244 218", // #fcf4da
		"--color-warning-100": "251 240 206", // #fbf0ce
		"--color-warning-200": "250 236 193", // #faecc1
		"--color-warning-300": "247 225 156", // #f7e19c
		"--color-warning-400": "240 202 82", // #f0ca52
		"--color-warning-500": "234 179 8", // #EAB308
		"--color-warning-600": "211 161 7", // #d3a107
		"--color-warning-700": "176 134 6", // #b08606
		"--color-warning-800": "140 107 5", // #8c6b05
		"--color-warning-900": "115 88 4", // #735804
		// error | #D41976 
		"--color-error-50": "249 221 234", // #f9ddea
		"--color-error-100": "246 209 228", // #f6d1e4
		"--color-error-200": "244 198 221", // #f4c6dd
		"--color-error-300": "238 163 200", // #eea3c8
		"--color-error-400": "225 94 159", // #e15e9f
		"--color-error-500": "212 25 118", // #D41976
		"--color-error-600": "191 23 106", // #bf176a
		"--color-error-700": "159 19 89", // #9f1359
		"--color-error-800": "127 15 71", // #7f0f47
		"--color-error-900": "104 12 58", // #680c3a
		// surface | #495a8f 
		"--color-surface-50": "217 219 221", // #d9dbdd
		"--color-surface-100": "204 207 209", // #cccfd1
		"--color-surface-200": "192 195 198", // #c0c3c6
		"--color-surface-300": "154 159 163", // #9a9fa3
		"--color-surface-400": "78 87 95", // #4e575f
		"--color-surface-500": "2 15 26", // #020f1a
		"--color-surface-600": "2 14 23", // #020e17
		"--color-surface-700": "2 11 20", // #020b14
		"--color-surface-800": "1 9 16", // #010910
		"--color-surface-900": "1 7 13", // #01070d
		
	}
}