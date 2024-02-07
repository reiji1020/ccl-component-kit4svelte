import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        /**
             * サムネイル画像の大きさ
             * @type number
             */ imageSize: string;
        /**
             * 枠線の色
             * @default --strawberry-pink
             * @type string
             */ borderColor: string;
        /**
             * 画像ソース
             * @type string
             */ src: string;
        /**
             * alt属性に指定する値
             * @type string
             */ altText: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type ThumbnailProps = typeof __propDef.props;
export type ThumbnailEvents = typeof __propDef.events;
export type ThumbnailSlots = typeof __propDef.slots;
export default class Thumbnail extends SvelteComponentTyped<ThumbnailProps, ThumbnailEvents, ThumbnailSlots> {
}
export {};
