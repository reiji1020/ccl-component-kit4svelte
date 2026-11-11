import type { Readable } from 'svelte/store';

export type TabData = {
  label: string;
  color: string;
  disabled: boolean;
};

export type TabsContext = {
  setTab: (key: symbol, tab: TabData) => void;
  removeTab: (key: symbol) => void;
  activeTab: Readable<symbol | undefined>;
};

export const TABS_CONTEXT_KEY = Symbol('tabs-context');
