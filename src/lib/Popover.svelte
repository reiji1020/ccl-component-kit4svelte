<script module lang="ts">
  let nextPopoverId = 0;
</script>

<script lang="ts">
  import { onMount, type Snippet } from 'svelte';
  import { CCLVividColor, type ColorVar } from './const/config';

  type Placement = 'top' | 'bottom' | 'left' | 'right';
  interface Props {
    label: string;
    trigger?: Snippet;
    children: Snippet<[() => void]>;
    open?: boolean;
    placement?: Placement;
    borderColor?: ColorVar;
    triggerBorderColor?: ColorVar;
    focusColor?: ColorVar;
    onOpenChange?: (open: boolean) => void;
  }

  let {
    label, trigger, children, open = $bindable(false), placement = 'bottom',
    borderColor = CCLVividColor.STRAWBERRY_PINK, triggerBorderColor, focusColor, onOpenChange
  }: Props = $props();
  let id = $state<string>();
  onMount(() => { id = `ccl-popover-${++nextPopoverId}`; });
  let anchor = $state<HTMLButtonElement>();
  let panel = $state<HTMLDivElement>();

  function setOpen(next: boolean) {
    if (next === open) return;
    open = next;
    onOpenChange?.(next);
  }

  function position(anchor: HTMLButtonElement, panel: HTMLDivElement, preferred: Placement) {
    const view = panel.ownerDocument.defaultView;
    if (!view) return;
    const pad = 8;
    const gap = 8;
    const rect = anchor.getBoundingClientRect();
    const width = panel.offsetWidth;
    const height = panel.offsetHeight;
    const vw = panel.ownerDocument.documentElement.clientWidth;
    const vh = panel.ownerDocument.documentElement.clientHeight;
    const placements = {
      top: { x: rect.left, y: rect.top - height - gap },
      bottom: { x: rect.left, y: rect.bottom + gap },
      left: { x: rect.left - width - gap, y: rect.top },
      right: { x: rect.right + gap, y: rect.top }
    };
    const opposite = { top: 'bottom', bottom: 'top', left: 'right', right: 'left' } as const;
    const fits = ({ x, y }: { x: number; y: number }) => preferred === 'top' || preferred === 'bottom'
      ? y >= pad && y + height <= vh - pad : x >= pad && x + width <= vw - pad;
    const alternative = opposite[preferred];
    const actual = !fits(placements[preferred]) && fits(placements[alternative]) ? alternative : preferred;
    const { x, y } = placements[actual];
    panel.dataset.placement = actual;
    panel.style.left = `${Math.max(pad, Math.min(x, vw - width - pad))}px`;
    panel.style.top = `${Math.max(pad, Math.min(y, vh - height - pad))}px`;
  }

  $effect(() => {
    const element = panel;
    const button = anchor;
    if (!open || !element || !button) return;
    const doc = element.ownerDocument;
    if (typeof element.showPopover === 'function') element.showPopover();
    else element.removeAttribute('popover');

    function closeOutside(event: PointerEvent) {
      if (!event.composedPath().includes(element!) && !event.composedPath().includes(button!)) setOpen(false);
    }

    doc.addEventListener('pointerdown', closeOutside);
    const autofocus = element.querySelector<HTMLElement>('[data-autofocus]');
    (autofocus ?? element).focus({ preventScroll: true });

    return () => {
      doc.removeEventListener('pointerdown', closeOutside);
      const active = doc.activeElement;
      if (button.isConnected && (!active || active === doc.body || element.contains(active))) {
        button.focus({ preventScroll: true });
      }
    };
  });

  $effect(() => {
    const element = panel;
    const button = anchor;
    const preferred = placement;
    if (!open || !element || !button) return;
    const doc = element.ownerDocument;
    const view = doc.defaultView;
    const reposition = () => position(button, element, preferred);
    const observer = new ResizeObserver(reposition);
    observer.observe(element);
    observer.observe(button);
    reposition();
    doc.addEventListener('scroll', reposition, true);
    view?.addEventListener('resize', reposition);
    return () => {
      observer.disconnect();
      doc.removeEventListener('scroll', reposition, true);
      view?.removeEventListener('resize', reposition);
    };
  });

  function keydown(event: KeyboardEvent) {
    if (event.key !== 'Escape' || !open) return;
    event.preventDefault();
    event.stopPropagation();
    setOpen(false);
  }
</script>

<div class="popover"
  style:--popover-border={`var(${borderColor})`}
  style:--popover-trigger-border={triggerBorderColor ? `var(${triggerBorderColor})` : undefined}
  style:--popover-focus={focusColor ? `var(${focusColor})` : undefined}>
  <button class="trigger" type="button" bind:this={anchor} aria-label={label} aria-haspopup="dialog"
    aria-expanded={open} aria-controls={open ? id : undefined}
    onclick={() => setOpen(!open)} onkeydown={keydown}>
    {#if trigger}{@render trigger()}{:else}{label}{/if}
  </button>
  {#if open}
    <div class="panel" {id} bind:this={panel} popover="manual" role="dialog" aria-label={label}
      tabindex="-1" onkeydown={keydown}>
      {@render children(() => setOpen(false))}
    </div>
  {/if}
</div>

<style>
  .popover { display: inline-block; }
  .trigger {
    color-scheme: light; background: Canvas; color: var(--wrap-grey); cursor: pointer;
    min-height: 44px; padding-inline: 20px; font: inherit;
    border: 1px solid var(--popover-trigger-border, var(--strawberry-pink)); border-radius: var(--ccl-button-radius, 50px);
  }
  .trigger:focus-visible, .panel:focus-visible {
    outline: 2px solid var(--popover-focus, var(--ccl-focus-color, var(--soda-blue))); outline-offset: 2px;
  }
  .panel {
    box-sizing: border-box; position: fixed; inset: auto; z-index: 2; margin: 0;
    width: max-content; max-width: calc(100vw - 16px); max-height: calc(100dvh - 16px); overflow: auto;
    padding: 12px; color-scheme: light; background: Canvas; color: var(--wrap-grey);
    border: 2px solid var(--popover-border); border-radius: 12px;
  }
</style>
