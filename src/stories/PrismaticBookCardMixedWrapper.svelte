<script lang="ts">
  import BookCard from '../lib/BookCard.svelte';
  import PrismaticBookCard from '../lib/PrismaticBookCard.svelte';
  import { CCLVividColor } from '../lib/const/config';
</script>

<div class="comparison">
  <section class="sample">
    <h2>PrismaticBookCard</h2>
    <PrismaticBookCard
      href="https://example.com"
      linkLabel="READ MORE"
      imageUrl="thumbnail.png"
      imageAlt="PrismaticBookCardの書影"
      tone={CCLVividColor.STRAWBERRY_PINK}
    />
  </section>

  <section class="sample">
    <h2>BookCard</h2>
    <BookCard
      title="既存のBookCard"
      description="説明文を含む既存コンポーネントです。"
      coverImageUrl="thumbnail.png"
      altText="既存BookCardの書影"
      borderColor={CCLVividColor.SODA_BLUE}
    />
  </section>
</div>

<style>
  .comparison {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 32px;
    width: min(100%, 760px);
    padding: 24px;
    box-sizing: border-box;
  }

  .sample {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    min-width: 0;
  }

  h2 {
    margin: 0;
    color: color-mix(in srgb, var(--palette-grape-900) 42%, var(--palette-wrap-900));
    font-family: Inter, sans-serif;
    font-size: 18px;
    line-height: 1.4;
    letter-spacing: 0;
  }
</style>
