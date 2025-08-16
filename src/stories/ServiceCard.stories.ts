import type { Meta, StoryObj } from '@storybook/svelte';
import { within, userEvent, expect } from '@storybook/test';
import ServiceCard from '../lib/ServiceCard.svelte';

const baseColorOptions = [
	'var(--peach-pink)',
	'var(--lemon-yellow)',
	'var(--sugar-blue)',
	'var(--matcha-green)',
	'var(--akebi-purple)',
	'var(--cloud-grey)'
];

const meta = {
	title: 'CommonComponents/ServiceCard',
	component: ServiceCard,
	tags: ['autodocs'],
	argTypes: {
		serviceName: { control: 'text' },
		description: { control: 'text' },
		imageUrl: { control: 'text' },
		altText: { control: 'text' },
		linkUrl: { control: 'text' },
		borderColor: {
			control: { type: 'select' },
			options: baseColorOptions
		}
	}
} satisfies Meta<ServiceCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		serviceName: 'My Awesome Service',
		description:
			'This is a description of the awesome service. It is really great and you should definitely use it.',
		imageUrl: 'thumbnail.png',
		altText: 'Awesome Service Thumbnail',
		linkUrl: 'https://example.com',
		borderColor: 'var(--peach-pink)'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		const serviceName = canvas.getByText('My Awesome Service');
		const description = canvas.getByText(
			'This is a description of the awesome service. It is really great and you should definitely use it.'
		);

		await expect(serviceName).toBeInTheDocument();
		await expect(description).toBeInTheDocument();
	}
};

Default.storyName = 'Default';

export const NoLink: Story = {
	args: {
		serviceName: 'Internal Tool',
		description: 'This tool does not have an external link.',
		imageUrl: 'thumbnail.png',
		altText: 'Internal Tool Icon',
		borderColor: 'var(--cloud-grey)'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const serviceName = canvas.getByText('Internal Tool');
		await expect(serviceName).toBeInTheDocument();

		const cardElement = canvas.getByText('Internal Tool').closest('div.service-card');
		await expect(cardElement).not.toHaveAttribute('href');
	}
};
NoLink.storyName = 'NoLink';
