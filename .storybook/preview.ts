import type { Preview } from '@storybook/svelte';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import '../src/lib/const/variables.css';

const preview: Preview = {
	parameters: {
		actions: { argTypesRegex: '^on[A-Z].*' },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i
			}
		},
		viewport: {
			viewport: INITIAL_VIEWPORTS,
			defaultViewport: 'responsive'
		}
	}
};

export default preview;
