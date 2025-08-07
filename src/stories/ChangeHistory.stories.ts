import type { Meta, StoryObj } from '@storybook/svelte';
import ChangeHistory from '$lib/ChangeHistory.svelte';
import type { HistoryItem } from '$lib/ChangeHistory.svelte';
import { CCLVividColor } from '$lib/const/config';

const meta: Meta<ChangeHistory> = {
	title: 'CommonComponents/ChangeHistory',
	component: ChangeHistory,
	tags: ['autodocs'],
	argTypes: {
		historyItems: {
			control: 'object',
			description: '表示する更新履歴の配列'
		},
		height: {
			control: 'text',
			description: 'コンポーネントの高さ。CSSの値を指定します (例: "400px")。'
		},
		defaultColor: {
			control: { type: 'select' },
			options: Object.values(CCLVividColor),
			description:
				'アイテムに色が指定されていない場合のデフォルトカラー。`CCLVividColor`の値を指定します。'
		}
	}
};

export default meta;
type Story = StoryObj<ChangeHistory>;

const mockData: HistoryItem[] = [
	{
		date: '2025/07/20',
		title: 'メジャーアップデートと新機能の追加',
		color: CCLVividColor.STRAWBERRY_PINK,
		tag: '機能追加',
		version: 'v2.0.0',
		details: [
			'ccl-component-kit4svelteをv2.0.0に更新しました。',
			'新コンポーネント「Dashboard」を追加しました。',
			'パフォーマンスを改善し、ページの読み込み速度が向上しました。'
		]
	},
	{
		date: '2025/07/01',
		title: 'CROSSをリリースしました',
		tag: '活動記録',
		color: CCLVividColor.MELON_GREEN
	},
	{
		date: '2025/05/15',
		title: '技術書典18にサークル参加しました',
		tag: 'イベント' // 色は未指定（デフォルトカラーが適用される）
	},
	{
		date: '2025/04/10',
		title: '軽微なバグ修正',
		version: 'v1.5.2'
		// 色もタグも未指定
	}
];

const longMockData: HistoryItem[] = [
	...mockData,
	{
		date: '2025/03/15',
		title: 'UIコンポーネントのドキュメントを更新',
		tag: 'ドキュメント',
		color: CCLVividColor.GRAPE_PURPLE
	},
	{
		date: '2025/02/01',
		title: 'パフォーマンスチューニングを実施',
		version: 'v1.5.1'
	},
	{
		date: '2025/01/20',
		title: 'Selectコンポーネントの不具合を修正',
		tag: 'バグ修正',
		color: CCLVividColor.PINEAPPLE_YELLOW,
		version: 'v1.5.0'
	},
	{
		date: '2025/01/05',
		title: 'Checkboxコンポーネントを追加',
		tag: '機能追加',
		color: CCLVividColor.STRAWBERRY_PINK
	}
];

/**
 * アイテムごとに異なる色を指定した場合の表示です。
 * 色が指定されていないアイテムには、`defaultColor`プロパティが適用されます。
 */
export const Default: Story = {
	name: 'Default',
	args: {
		historyItems: mockData,
		defaultColor: CCLVividColor.SODA_BLUE
	}
};

/**
 * `defaultColor`プロパティを上書きした場合の表示です。
 * 色が指定されていないアイテムに、指定したデフォルトカラー（この場合は黄色）が適用されます。
 */
export const CustomDefaultColor: Story = {
	name: 'Custom Default Color',
	args: {
		historyItems: mockData,
		defaultColor: CCLVividColor.PINEAPPLE_YELLOW
	}
};

/**
 * 更新履歴が1件だけの場合の表示です。
 */
export const SingleItem: Story = {
	name: 'Single Item',
	args: {
		historyItems: [mockData[0]]
	}
};

/**
 * `historyItems` 配列が空の場合の表示です。
 */
export const Empty: Story = {
	name: 'Empty',
	args: {
		historyItems: []
	}
};

/**
 * タグやバージョン、詳細リストがない、最小限のデータでの表示です。
 */
export const Minimal: Story = {
	name: 'Minimal',
	args: {
		historyItems: [
			{
				date: '2025/01/01',
				title: 'プロジェクトを開始しました。'
			},
			{
				date: '2024/12/25',
				title: 'プレリリース版を公開しました。'
			}
		]
	}
};

/**
 * 高さを指定してコンポーネントをスクロール可能にする場合の表示です。
 */
export const WithLimitedHeight: Story = {
	name: 'With Limited Height',
	args: {
		historyItems: longMockData,
		height: '400px',
		defaultColor: CCLVividColor.SODA_BLUE
	}
};
