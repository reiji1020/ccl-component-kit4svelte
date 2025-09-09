import { writable, type Writable } from 'svelte/store';
import { CCLVividColor } from './const/config';

export type ToastVariant = 'success' | 'error' | 'warning' | 'info';

export type ToastItem = {
	id: string;
	title?: string;
	message: string;
	variant: ToastVariant;
	duration: number; // ms
};

export type ShowOptions = {
	title?: string;
	message: string;
	variant?: ToastVariant;
	duration?: number; // ms
};

export const toasts: Writable<ToastItem[]> = writable([]);

function genId() {
	return Math.random().toString(36).slice(2) + Date.now().toString(36);
}

// Default auto-dismiss duration held internally
const DEFAULT_DURATION = 3000;

export function show(opts: ShowOptions): string {
	const id = genId();
	const item: ToastItem = {
		id,
		title: opts.title,
		message: opts.message,
		variant: opts.variant ?? 'info',
		duration: opts.duration ?? DEFAULT_DURATION
	};
	toasts.update((list) => [item, ...list].slice(0, 50));
	if (typeof window !== 'undefined' && item.duration > 0) {
		window.setTimeout(() => dismiss(id), item.duration);
	}
	return id;
}

export function dismiss(id: string) {
	toasts.update((list) => list.filter((t) => t.id !== id));
}

export function clear() {
	toasts.set([]);
}

export const toast = {
	show,
	success(message: string, title = 'Success', duration?: number) {
		return show({ message, title, variant: 'success', duration });
	},
	error(message: string, title = 'Error', duration?: number) {
		return show({ message, title, variant: 'error', duration });
	},
	warning(message: string, title = 'Warning', duration?: number) {
		return show({ message, title, variant: 'warning', duration });
	},
	info(message: string, title = 'Info', duration?: number) {
		return show({ message, title, variant: 'info', duration });
	},
	dismiss,
	clear
};

export const variantColor: Record<ToastVariant, string> = {
	success: CCLVividColor.MELON_GREEN,
	error: CCLVividColor.STRAWBERRY_PINK,
	warning: CCLVividColor.PINEAPPLE_YELLOW,
	info: CCLVividColor.SODA_BLUE
};
