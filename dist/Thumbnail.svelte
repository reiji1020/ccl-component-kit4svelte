<script>export let imageSize;
export let borderColor;
export let src;
export let altText;
</script>

<div class="ThumbnailWrapper" style="--imageSize: {imageSize}">
    <img src={src} alt={altText} class="Thumbnail" style="--borderColor: var({borderColor})" />
</div>

<style>
    .ThumbnailWrapper {
        height: var(--imageSize);
        width: var(--imageSize);
    }

    .Thumbnail {
        height: var(--imageSize);
        width: var(--imageSize);
        border-radius: 320px;
        border: 5px solid var(--borderColor);
    }
</style>