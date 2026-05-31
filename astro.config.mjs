// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	integrations: [
		starlight({
			title: 'Kuro Energy Docs',
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/panda-energy' },
			],
			customCss: ['./src/styles/custom.css'],
			sidebar: [
				{
					label: 'Inicio',
					items: [
						{ label: 'Vision general', slug: 'vision-general' },
						{ label: 'Glosario de energia', slug: 'glosario-energia' },
					],
				},
				{
					label: 'Modulos',
					items: [{ autogenerate: { directory: 'modulos' } }],
				},
				{
					label: 'Flujos de trabajo',
					items: [{ autogenerate: { directory: 'flujos' } }],
				},
				{
					label: 'Referencia',
					items: [
						{ label: 'Roles y permisos', slug: 'referencia/roles-y-permisos' },
						{ label: 'Integraciones', slug: 'referencia/integraciones' },
						{ label: 'Seguridad y privacidad', slug: 'referencia/seguridad-y-privacidad' },
						{ label: 'Preguntas frecuentes', slug: 'referencia/preguntas-frecuentes' },
					],
				},
			],
		}),
	],
});
