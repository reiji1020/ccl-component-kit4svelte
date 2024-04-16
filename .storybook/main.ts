import type { StorybookConfig } from '@storybook/sveltekit';
import type { AddonOptionsVite } from '@storybook/addon-coverage';

const coverageConfig: AddonOptionsVite = {
	istanbul: {
		include: ['**/stories/**']
	}
};

const config: StorybookConfig = {
	stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions',
		'@storybook/addon-coverage',
		'@chromatic-com/storybook',
		'@storybook/addon-mdx-gfm'
	],
	framework: {
		name: '@storybook/sveltekit',
		options: {}
	},
	docs: {
		autodocs: 'tag'
	},
	staticDirs: ['../src/stories/assets']
};
export default config;
