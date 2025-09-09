<script lang="ts">
	import { CCLVividColor } from './const/config';
	import type { ColorVar } from './const/config';
	import { vividFor } from './const/colorMap';

	/** 色（CSS変数）。例: CCLVividColor.SODA_BLUE */
	export let color: ColorVar = CCLVividColor.SODA_BLUE;
	/** 表示バリエーション */
	export let variant: 'solid' | 'outline' = 'solid';
	/** サイズ */
	export let size: 'sm' | 'md' | 'lg' = 'md';
	/** アクセシビリティ用ラベル（任意: 可視テキストがない場合などに使用） */
	export let ariaLabel: string | undefined;
	/** 表示テキスト（slot優先） */
	export let label: string | undefined;

	$: vividForText = vividFor(color as string);
	$: styleInline =
		`--badge-color: var(${color});` + (vividForText ? ` --badge-fg: var(${vividForText});` : '');
</script>

<span
	class="ccl-badge"
	data-variant={variant}
	data-size={size}
	aria-label={ariaLabel}
	style={styleInline}
>
	{#if label}{label}{:else}<slot />{/if}
</span>

<style>
	.ccl-badge {
		--badge-color: var(--soda-blue);
		--badge-height-sm: 20px;
		--badge-height-md: 24px;
		--badge-height-lg: 28px;
		--badge-pad-x-sm: 8px;
		--badge-pad-x-md: 10px;
		--badge-pad-x-lg: 12px;

		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: 6px;
		border-radius: 9999px;
		font-weight: 600;
		line-height: 1;
		user-select: none;
		white-space: nowrap;
		border: 1px solid transparent;
	}

	/* size */
	.ccl-badge[data-size='sm'] {
		height: var(--badge-height-sm);
		padding: 0 var(--badge-pad-x-sm);
		font-size: 12px;
	}
	.ccl-badge[data-size='md'] {
		height: var(--badge-height-md);
		padding: 0 var(--badge-pad-x-md);
		font-size: 12px;
	}
	.ccl-badge[data-size='lg'] {
		height: var(--badge-height-lg);
		padding: 0 var(--badge-pad-x-lg);
		font-size: 13px;
	}

	/* variant */
	.ccl-badge[data-variant='solid'] {
		background: var(--badge-color);
		color: var(--badge-fg, #fff);
		border-color: var(--badge-color);
	}
	.ccl-badge[data-variant='outline'] {
		background: #fff;
		color: var(--badge-fg, var(--badge-color));
		border-color: var(--badge-color);
	}

	/* no extra sr-only node; use aria-label when needed */
</style>
