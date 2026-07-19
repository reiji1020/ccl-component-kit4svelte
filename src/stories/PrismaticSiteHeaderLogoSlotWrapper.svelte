<script lang="ts">
  import PrismaticSiteHeader from '../lib/PrismaticSiteHeader.svelte';
  import { CCLVividColor } from '../lib/const/config';
</script>

<div class="canvas">
  <PrismaticSiteHeader
    brandHref="/"
    padding="18px 28px"
    minHeight="84px"
    tone={CCLVividColor.SODA_BLUE}
  >
    <span slot="logo" class="custom-logo">CCL Studio</span>
  </PrismaticSiteHeader>
</div>

<style>
  .canvas {
    padding: 24px;
  }

  .custom-logo {
    display: inline-flex;
    align-items: center;
    max-width: 100%;
    color: inherit;
    font-size: 20px;
    font-weight: 800;
    line-height: 1.2;
    overflow-wrap: anywhere;
  }
</style>
