<script lang="ts">
  import PrismaticWorkCard from '../lib/PrismaticWorkCard.svelte';
  import ServiceCard from '../lib/ServiceCard.svelte';
  import { CCLVividColor } from '../lib/const/config';
</script>

<div class="comparison">
  <section class="sample">
    <h2>PrismaticWorkCard</h2>
    <PrismaticWorkCard
      title="Prismatic Design の制作実績"
      href="https://example.com"
      linkLabel="VIEW PROJECT"
      imageUrl="thumbnail.png"
      imageAlt="PrismaticWorkCardのサムネイル"
      tone={CCLVividColor.STRAWBERRY_PINK}
    />
  </section>

  <section class="sample">
    <h2>ServiceCard</h2>
    <ServiceCard
      serviceName="既存サービスカード"
      description="サービス説明とリンクをまとめる既存コンポーネントです。"
      imageUrl="thumbnail.png"
      altText="ServiceCardのサムネイル"
      linkUrl="https://example.com"
      borderColor={CCLVividColor.SODA_BLUE}
    />
  </section>
</div>

<style>
  .comparison {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 32px;
    width: min(100%, 1180px);
    padding: 24px;
    box-sizing: border-box;
  }

  .sample {
    display: flex;
    flex-direction: column;
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
