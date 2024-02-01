import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        /**
             * ヘッダー背景色
             * CCLVividColorの中から指定する
             * @default --strawberry-pink
             * @type string
             */ bgColor: string;
        /**
             * ヘッダー高さ
             * HeaderHeightの中から指定する
             * @default --hd-nomal
             * @type string
             */ height: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type HeaderProps = typeof __propDef.props;
export type HeaderEvents = typeof __propDef.events;
export type HeaderSlots = typeof __propDef.slots;
export default class Header extends SvelteComponentTyped<HeaderProps, HeaderEvents, HeaderSlots> {
}
export {};
