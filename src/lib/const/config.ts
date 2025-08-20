const CCLVividColor = {
	STRAWBERRY_PINK: '--strawberry-pink',
	PINEAPPLE_YELLOW: '--pineapple-yellow',
	SODA_BLUE: '--soda-blue',
	MELON_GREEN: '--melon-green',
	GRAPE_PURPLE: '--grape-purple',
	WRAP_GREY: '--wrap-grey'
};

const CCLPastelColorBase = {
	PEACH_PINK: '--peach-pink',
	LEMON_YELLOW: '--lemon-yellow',
	SUGAR_BLUE: '--sugar-blue',
	MATCHA_GREEN: '--matcha-green',
	AKEBI_PURPLE: '--akebi-purple',
	CLOUD_GREY: '--cloud-grey'
};

const CCLPastelColor = {
	...CCLPastelColorBase
} as const;

export enum ProgressBarHeight {
	NARROW = '5px',
	DEFAULT = '10px',
	WIDE = '20px'
}

const HeaderHeight = {
	WIDE: '--hd-wide',
	NORMAL: '--hd-normal',
	NALLOW: '--hd-nallow'
};

export { CCLVividColor, CCLPastelColor, HeaderHeight };
export type ColorVar =
	| (typeof CCLVividColor)[keyof typeof CCLVividColor]
	| (typeof CCLPastelColor)[keyof typeof CCLPastelColor];
