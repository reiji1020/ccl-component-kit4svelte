import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        /**
             * ボタンカラー、CCLVividColorの中から選ぶ
             * @default --strawberry-pink
             * @type string
             */ bgColor: string;
        /**
             * ボタンの中に表示するテキスト
             * @default Button
             * @type string
             */ label: string | "Button";
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type ButtonProps = typeof __propDef.props;
export type ButtonEvents = typeof __propDef.events;
export type ButtonSlots = typeof __propDef.slots;
export default class Button extends SvelteComponentTyped<ButtonProps, ButtonEvents, ButtonSlots> {
}
export {};
