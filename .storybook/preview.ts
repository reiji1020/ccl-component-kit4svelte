import type { Preview } from '@storybook/svelte';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i
			}
		},
		viewport: {
			viewports: INITIAL_VIEWPORTS,
			defaultViewport: 'responsive'
		}
	}
};

export default preview;
