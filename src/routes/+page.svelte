<script lang="ts">
  // グローバルCSS変数を提供（開発デモ用）
  // ライブラリの副作用 import ではなく、CSS を直接読み込む
  import '$lib/const/variables.css';
  import Header from '$lib/Header.svelte';
  import Button from '$lib/Button.svelte';
  import Footer from '$lib/Footer.svelte';
  import Thumbnail from '$lib/Thumbnail.svelte';
  import Card from '$lib/Card.svelte';
  import Table from '$lib/Table.svelte';
  import Carousel from '$lib/Carousel.svelte';
  import CommonHeader from '$lib/CommonHeader.svelte';
  import ChangeHistory from '$lib/ChangeHistory.svelte';
  import ServiceCard from '$lib/ServiceCard.svelte';
  import BookCard from '$lib/BookCard.svelte';
  import DatePicker from '$lib/DatePicker.svelte';
  import Tabs from '$lib/Tabs.svelte';
  import TabPanel from '$lib/TabPanel.svelte';
  import Accordion from '$lib/Accordion.svelte';
  import AccordionItem from '$lib/AccordionItem.svelte';
  import { CCLPastelColor, CCLVividColor } from '$lib/const/config';

  const imageUrl = '/library_card.png';
  const carouselImages = [
    { src: imageUrl, alt: 'コンポーネントライブラリのカード' },
    { src: imageUrl, alt: 'コンポーネントライブラリのカードの別表示' }
  ];
  const tableHeaders = ['Component', 'Status'];
  const tableRows = [
    ['Button', 'Ready'],
    ['Card', 'Ready']
  ];
</script>

<Header />
<Button />
<Footer />
<Thumbnail
  imageSize="160px"
  borderColor={CCLVividColor.STRAWBERRY_PINK}
  src={imageUrl}
  altText="コンポーネントライブラリのサムネイル"
/>
<Card
  borderColor={CCLVividColor.SODA_BLUE}
  src={imageUrl}
  altText="コンポーネントライブラリのカード"
  title="Component Kit"
  cardText="Svelte向けコンポーネントの開発デモです。"
/>
<Table tableColor={CCLVividColor.MELON_GREEN} dataHeader={tableHeaders} tableData={tableRows} />
<Carousel src={carouselImages} csWidth="min(100%, 680px)" />
<CommonHeader bgColor={CCLPastelColor.SUGAR_BLUE} logo="/favicon.png" logoHeight="40px" href="/" />
<ChangeHistory />
<ServiceCard
  serviceName="Component Library"
  description="Svelteアプリケーション向けのUIコンポーネント集です。"
  {imageUrl}
  altText="Component Library"
/>
<BookCard
  title="Svelte Component Guide"
  description="コンポーネントの利用例を紹介するデモカードです。"
  coverImageUrl={imageUrl}
  altText="Svelte Component Guide"
/>
<DatePicker />
<Tabs>
  <TabPanel label="Overview">タブコンポーネントのデモです。</TabPanel>
</Tabs>
<Accordion>
  <AccordionItem label="Details" isOpen={true}>
    アコーディオンコンポーネントのデモです。
  </AccordionItem>
</Accordion>
