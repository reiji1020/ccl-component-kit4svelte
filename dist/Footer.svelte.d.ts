import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        /**
             * フッター背景色
             * CCLVividColorの中から指定する
             * @default --strawberry-pink
             * @type string
             */ bgColor: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type FooterProps = typeof __propDef.props;
export type FooterEvents = typeof __propDef.events;
export type FooterSlots = typeof __propDef.slots;
export default class Footer extends SvelteComponentTyped<FooterProps, FooterEvents, FooterSlots> {
}
export {};
