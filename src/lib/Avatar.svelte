<script lang="ts">
  interface Props {
    src?: string;
    name: string;
    alt?: string;
    decorative?: boolean;
    size?: 'sm' | 'md' | 'lg';
  }

  let { src, name, alt, decorative = false, size = 'md' }: Props = $props();
  const initials = $derived(name.trim().split(/\s+/u).filter(Boolean)
    .slice(0, 2).map(part => Array.from(part)[0]).join('').toLocaleUpperCase() || '?');
</script>

<span class="avatar" data-size={size} role={decorative ? undefined : 'img'}
  aria-hidden={decorative ? 'true' : undefined} aria-label={decorative ? undefined : alt ?? name}>
  {#if src}
    {#key src}
      {@const url = src}
      <span class="photo">
        <img src={url} alt="" onerror={(event) => event.currentTarget.setAttribute('hidden', '')} />
      </span>
    {/key}
  {/if}
  <span aria-hidden="true">{initials}</span>
</span>

<style>
  .avatar {
    position: relative;
    display: inline-grid;
    place-items: center;
    width: 48px;
    height: 48px;
    overflow: hidden;
    border-radius: 50%;
    background: var(--palette-wrap-50);
    color: var(--wrap-grey);
    font-size: 16px;
    font-weight: 700;
    vertical-align: middle;
  }
  .avatar[data-size='sm'] { width: 32px; height: 32px; font-size: 11px; }
  .avatar[data-size='lg'] { width: 64px; height: 64px; font-size: 21px; }
  .photo, img { position: absolute; inset: 0; width: 100%; height: 100%; }
  img { object-fit: cover; }
</style>
