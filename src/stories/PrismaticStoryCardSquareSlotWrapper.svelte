<script lang="ts">
  import PrismaticStoryCard from '$lib/PrismaticStoryCard.svelte';
  import { CCLVividColor } from '$lib/const/config';
</script>

<PrismaticStoryCard
  title="slotで正方形画像を差し込んだStoryCard"
  label="SQUARE SLOT"
  squareImage
  size="featured"
  tone={CCLVividColor.GRAPE_PURPLE}
>
  <img slot="image" src="thumbnail.png" alt="slot経由の正方形画像サムネイル" />
</PrismaticStoryCard>
