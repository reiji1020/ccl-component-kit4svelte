<script lang="ts">
  import Footer from '$lib/Footer.svelte';
  import PrismaticSiteFooter from '$lib/PrismaticSiteFooter.svelte';
</script>

<div class="comparison">
  <section>
    <h2>PrismaticSiteFooter</h2>
    <PrismaticSiteFooter brandHref="/" logoUrl="candy-chups-lab.svg" logoAlt="CANDY CHUPS Lab." />
  </section>
  <section>
    <h2>Footer</h2>
    <Footer />
  </section>
</div>

<style>
  .comparison {
    display: grid;
    gap: 40px;
    padding: 32px;
  }

  section {
    display: grid;
    gap: 12px;
  }

  h2 {
    margin: 0;
    font:
      700 16px/1.4 Inter,
      sans-serif;
  }
</style>
