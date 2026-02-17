// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeBlack from 'starlight-theme-black';


// https://astro.build/config
export default defineConfig({

	site: 'https://corecontrollib.github.io',

	integrations: [
		starlight({
			customCss: [
				'./src/styles/corecontrol.css',
			],

			title: 'CoreControl Docs',
			logo: {
				light: './src/assets/logoLight.svg',
				dark: './src/assets/logoDark.svg',
				alt: '',
				replacesTitle: true,
			},
			head: [],
			favicon: '/favicon.png',
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/CoreControlLib/CoreControlQuickstart' },
				{ icon : 'instagram', label: 'Instagram', href: 'https://www.instagram.com/corecontrollib/' }
			],
			sidebar: [
				{
					label: 'Guides',
					items: [
						{ label: '1. Installation', slug: 'guides/installation' },
						{ label: '2. Basic Usage', slug: 'guides/basic-usage' },
						{ label: '3. Modules & Commands', slug: 'guides/writing-modules-commands' },
						{ label: '4. TeleOp OpModes', slug: 'guides/teleop-opmodes' },
						{ label: '5. Auto OpModes', slug: 'guides/auto-opmodes' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
	redirects: {
		'/beta': 'https://forms.gle/VNxmV2XXtBc7Vuac9',
	},
});
