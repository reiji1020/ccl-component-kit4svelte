<script>
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
</script>

<Header />
<Button />
<Footer />
<Thumbnail />
<Card />
<Table />
<Carousel />
<CommonHeader />
<ChangeHistory />
<ServiceCard />
<BookCard />
<DatePicker />
<Tabs />
<TabPanel />
<Accordion />
<AccordionItem />
