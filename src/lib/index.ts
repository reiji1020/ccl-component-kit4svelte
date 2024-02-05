// place files you want to import through the `$lib` alias in this folder.
import './const/variables.css'; // カスタムプロパティ読み込み用
import { CCLVividColor, CCLPastelColor, HeaderHeight } from './const/config'; // 定数読み込み用
export { default as Header } from './Header.svelte';
export { default as Button } from './Button.svelte';