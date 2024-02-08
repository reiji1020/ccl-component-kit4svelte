import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        /**
             * 枠線の色
             * @default --strawberry-pink
             * @type string
             */ borderColor: string;
        /**
             * 説明文の背景色
             * @default --peach-pink
             * @type string
             */ bgColor: string;
        /**
             * 画像ソース
             * @type string
             */ src: string;
        /**
             * alt属性に指定する値
             * @type string
             */ altText: string;
        /**
             * 記事の見出し
             * @type string
             */ title: string;
        /**
             * カードの詳細テキスト(140字程度推奨)
             * @type string
             */ cardText: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type CardProps = typeof __propDef.props;
export type CardEvents = typeof __propDef.events;
export type CardSlots = typeof __propDef.slots;
export default class Card extends SvelteComponentTyped<CardProps, CardEvents, CardSlots> {
}
export {};
