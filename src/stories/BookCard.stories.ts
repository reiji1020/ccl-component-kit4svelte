import type { Meta, StoryObj } from '@storybook/svelte';
import BookCard from '../lib/BookCard.svelte';
import { CCLVividColor } from '../lib/const/config';
import { expect, fn, userEvent, within } from '@storybook/test';
import AllColorsBookCardWrapper from './AllColors/AllColorsBookCardWrapper.svelte';

const colorOptions = [
	CCLVividColor.STRAWBERRY_PINK,
	CCLVividColor.PINEAPPLE_YELLOW,
	CCLVividColor.SODA_BLUE,
	CCLVividColor.MELON_GREEN,
	CCLVividColor.GRAPE_PURPLE,
	CCLVividColor.WRAP_GREY
];

const meta = {
	title: 'CommonComponents/BookCard',
	component: BookCard,
	tags: ['autodocs'],
	argTypes: {
		title: { control: 'text' },
		description: { control: 'text' },
		coverImageUrl: { control: 'text' },
		altText: { control: 'text' },
		linkUrl: { control: 'text' },
		linkText: { control: 'text' },
		borderColor: {
			control: { type: 'select' },
			options: colorOptions
		}
	}
} satisfies Meta<BookCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		title: 'SvelteではじめるWebアプリ開発',
		description:
			'Svelteの基本から、SvelteKitを使った実践的なWebアプリケーション開発までを網羅した一冊です。',
		coverImageUrl: 'thumbnail.png',
		altText: 'SvelteではじめるWebアプリ開発 書籍表紙',
		linkUrl: 'https://example.com',
		linkText: 'Amazonで見る',
		borderColor: CCLVividColor.STRAWBERRY_PINK
	},
	parameters: {
		docs: {
			source: {
				code: `
<script>
    import { BookCard } from 'cclkit4svelte';
    import { CCLVividColor } from 'cclkit4svelte';
</script>

<BookCard
    title="SvelteではじめるWebアプリ開発"
    description="Svelteの基本から、SvelteKitを使った実践的なWebアプリケーション開発までを網羅した一冊です。"
    coverImageUrl="thumbnail.png"
    altText="SvelteではじめるWebアプリ開発 書籍表紙"
    linkUrl="https://example.com"
    linkText="Amazonで見る"
    borderColor={CCLVividColor.STRAWBERRY_PINK}
/>
`
			}
		}
	},
	play: async ({ args, canvasElement, step }) => {
		const canvas = within(canvasElement);

		await step('タイトルが正しく表示されていること', async () => {
			await expect(canvas.getByText(args.title!)).toBeInTheDocument();
		});

		await step('説明文が正しく表示されていること', async () => {
			await expect(canvas.getByText(args.description!)).toBeInTheDocument();
		});

		await step('画像に正しいalt属性が設定されていること', async () => {
			await expect(canvas.getByRole('img')).toHaveAttribute('alt', args.altText);
		});

		await step('リンクボタンが表示されていること', async () => {
			const button = canvas.getByRole('button', { name: args.linkText });
			await expect(button).toBeInTheDocument();
		});
	}
};

export const NoLink: Story = {
	args: {
		title: 'リンクがない場合の表示',
		description: 'linkUrlが指定されていない場合、ボタンは表示されません。',
		coverImageUrl: 'thumbnail.png',
		altText: 'リンクなし書籍表紙',
		linkUrl: undefined,
		borderColor: CCLVividColor.SODA_BLUE
	},
	parameters: {
		docs: {
			source: {
				code: `
<script>
    import { BookCard } from 'cclkit4svelte';
    import { CCLVividColor } from 'cclkit4svelte';
</script>

<BookCard
    title="リンクがない場合の表示"
    description="linkUrlが指定されていない場合、ボタンは表示されません。"
    coverImageUrl="thumbnail.png"
    altText="リンクなし書籍表紙"
    borderColor={CCLVividColor.SODA_BLUE}
/>
`
			}
		}
	},
	play: async ({ args, canvasElement, step }) => {
		const canvas = within(canvasElement);

		await step('タイトルが正しく表示されていること', async () => {
			await expect(canvas.getByText(args.title!)).toBeInTheDocument();
		});

		await step('リンクボタンが表示されていないこと', async () => {
			const button = canvas.queryByRole('button');
			await expect(button).not.toBeInTheDocument();
		});
	}
};

export const AllColors: Story = {
	render: () => ({ Component: AllColorsBookCardWrapper }),
	args: {},
	parameters: {
		docs: {
			source: {
				code: `
<script>
    import { BookCard } from 'cclkit4svelte';
    import { CCLVividColor } from 'cclkit4svelte';
</script>

<div style="display: flex; flex-wrap: wrap; gap: 20px;">
    <BookCard borderColor={CCLVividColor.STRAWBERRY_PINK} title="ピンク" description="..." coverImageUrl="thumbnail.png" altText="..." />
    <BookCard borderColor={CCLVividColor.PINEAPPLE_YELLOW} title="イエロー" description="..." coverImageUrl="thumbnail.png" altText="..." />
    <BookCard borderColor={CCLVividColor.SODA_BLUE} title="ブルー" description="..." coverImageUrl="thumbnail.png" altText="..." />
    <BookCard borderColor={CCLVividColor.MELON_GREEN} title="グリーン" description="..." coverImageUrl="thumbnail.png" altText="..." />
    <BookCard borderColor={CCLVividColor.GRAPE_PURPLE} title="パープル" description="..." coverImageUrl="thumbnail.png" altText="..." />
    <BookCard borderColor={CCLVividColor.WRAP_GREY} title="グレー" description="..." coverImageUrl="thumbnail.png" altText="..." />
</div>
`
			}
		}
	}
};
