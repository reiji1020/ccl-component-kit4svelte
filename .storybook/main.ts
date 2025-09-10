import type { StorybookConfig } from '@storybook/sveltekit';
import type { AddonOptionsVite } from '@storybook/addon-coverage';
import { mergeConfig } from 'vite';

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
    '@storybook/addon-mdx-gfm',
    '@storybook/addon-viewport'
  ],
  framework: {
    name: '@storybook/sveltekit',
    options: {}
  },
  docs: {},
  staticDirs: ['../src/stories/assets'],
  viteFinal: async (config) => {
    return mergeConfig(config, {
      resolve: {
        alias: {
          $lib: './src/lib'
        }
      }
    });
  }
};
export default config;
