import type { Writable } from 'svelte/store';

export type TabData = {
  label: string;
  color: string;
  disabled: boolean;
};

export type TabsContext = {
  addTab: (tab: TabData) => void;
  activeTabLabel: Writable<string>;
};

export const TABS_CONTEXT_KEY = Symbol('tabs-context');
