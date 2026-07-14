<script lang="ts">
  import Header from '../lib/Header.svelte';
  import PrismaticSiteHeader from '../lib/PrismaticSiteHeader.svelte';
  import { CCLVividColor, HeaderHeight } from '../lib/const/config';
</script>

<div class="comparison">
  <section>
    <h2>PrismaticSiteHeader</h2>
    <PrismaticSiteHeader tone={CCLVividColor.STRAWBERRY_PINK} />
  </section>

  <section>
    <h2>Header</h2>
    <Header bgColor={CCLVividColor.SODA_BLUE} height={HeaderHeight.NORMAL} />
  </section>
</div>

<style>
  .comparison {
    display: flex;
    flex-direction: column;
    gap: 40px;
    width: 100%;
    padding: 24px;
    box-sizing: border-box;
  }

  section {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  h2 {
    margin: 0;
    font-family: Inter, sans-serif;
    font-size: 18px;
    letter-spacing: 0;
  }
</style>
