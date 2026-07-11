<script lang="ts">
  import { CCLPaletteColor, CCLSemanticColor } from '$lib/const/config';

  type ColorEntry = {
    name: string;
    value: string;
  };

  type PaletteGroup = {
    family: string;
    colors: ColorEntry[];
  };

  const scaleOrder = ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900'];
  const paletteOrder = [
    'STRAWBERRY',
    'PINEAPPLE',
    'SODA',
    'MELON',
    'PEACH',
    'LEMON',
    'SUGAR',
    'MATCHA',
    'AKEBI',
    'GRAPE',
    'WRAP',
    'CLOUD'
  ];

  const paletteGroups: PaletteGroup[] = paletteOrder.map((family) => ({
    family,
    colors: scaleOrder.map((scale) => {
      const name = `${family}_${scale}` as keyof typeof CCLPaletteColor;

      return {
        name,
        value: CCLPaletteColor[name]
      };
    })
  }));

  const semanticGroups: PaletteGroup[] = [
    {
      family: 'Surface',
      colors: [
        { name: 'SURFACE_GLASS', value: CCLSemanticColor.SURFACE_GLASS },
        {
          name: 'SURFACE_STRAWBERRY_SUBTLE',
          value: CCLSemanticColor.SURFACE_STRAWBERRY_SUBTLE
        },
        { name: 'SURFACE_SODA_SUBTLE', value: CCLSemanticColor.SURFACE_SODA_SUBTLE },
        {
          name: 'SURFACE_PINEAPPLE_SUBTLE',
          value: CCLSemanticColor.SURFACE_PINEAPPLE_SUBTLE
        }
      ]
    },
    {
      family: 'Action',
      colors: [
        {
          name: 'ACTION_PRIMARY_DEFAULT',
          value: CCLSemanticColor.ACTION_PRIMARY_DEFAULT
        },
        { name: 'ACTION_PRIMARY_HOVER', value: CCLSemanticColor.ACTION_PRIMARY_HOVER },
        {
          name: 'ACTION_PRIMARY_PRESSED',
          value: CCLSemanticColor.ACTION_PRIMARY_PRESSED
        },
        {
          name: 'ACTION_SECONDARY_DEFAULT',
          value: CCLSemanticColor.ACTION_SECONDARY_DEFAULT
        },
        { name: 'ACTION_SECONDARY_HOVER', value: CCLSemanticColor.ACTION_SECONDARY_HOVER }
      ]
    },
    {
      family: 'Text / Border / Focus',
      colors: [
        { name: 'TEXT_LINK', value: CCLSemanticColor.TEXT_LINK },
        { name: 'TEXT_BRAND', value: CCLSemanticColor.TEXT_BRAND },
        { name: 'BORDER_ACCENT', value: CCLSemanticColor.BORDER_ACCENT },
        { name: 'FOCUS_RING', value: CCLSemanticColor.FOCUS_RING }
      ]
    },
    {
      family: 'Status',
      colors: [
        { name: 'STATUS_SUCCESS', value: CCLSemanticColor.STATUS_SUCCESS },
        { name: 'STATUS_WARNING', value: CCLSemanticColor.STATUS_WARNING }
      ]
    }
  ];

  const isDarkScale = (name: string) => {
    const scale = Number(name.split('_').at(-1));
    return Number.isFinite(scale) && scale >= 700;
  };

  const isDarkSemantic = (name: string) =>
    [
      'ACTION_PRIMARY_DEFAULT',
      'ACTION_PRIMARY_HOVER',
      'ACTION_PRIMARY_PRESSED',
      'ACTION_SECONDARY_DEFAULT',
      'ACTION_SECONDARY_HOVER',
      'TEXT_LINK',
      'TEXT_BRAND',
      'STATUS_SUCCESS',
      'STATUS_WARNING'
    ].includes(name);
</script>

<div class="palette-story">
  <section class="section">
    <div class="section-header">
      <h2>Prismatic v2 Palette</h2>
      <p>Figma の Color Palette にある 50-900 スケールの CSS 変数です。</p>
    </div>

    <div class="palette-scale-list">
      {#each paletteGroups as group}
        <div class="palette-row">
          <h3>{group.family}</h3>
          <div class="scale-grid">
            {#each group.colors as color}
              <article
                class:dark={isDarkScale(color.name)}
                class="swatch scale-swatch"
                style={`--swatch-color: var(${color.value});`}
              >
                <span class="swatch-name">{color.name.split('_').at(-1)}</span>
                <span class="swatch-var">{color.value}</span>
              </article>
            {/each}
          </div>
        </div>
      {/each}
    </div>
  </section>

  <section class="section">
    <div class="section-header">
      <h2>Semantic Color Tokens</h2>
      <p>用途に紐づく semantic color の CSS 変数です。</p>
    </div>

    <div class="semantic-grid">
      {#each semanticGroups as group}
        <div class="semantic-group">
          <h3>{group.family}</h3>
          <div class="semantic-list">
            {#each group.colors as color}
              <article
                class:dark={isDarkSemantic(color.name)}
                class="swatch semantic-swatch"
                style={`--swatch-color: var(${color.value});`}
              >
                <span class="swatch-name">{color.name}</span>
                <span class="swatch-var">{color.value}</span>
              </article>
            {/each}
          </div>
        </div>
      {/each}
    </div>
  </section>
</div>

<style>
  .palette-story {
    color: #292438;
    display: flex;
    flex-direction: column;
    gap: 48px;
    padding: 32px;
  }

  .section {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .section-header {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .section-header h2,
  .palette-row h3,
  .semantic-group h3,
  .section-header p {
    margin: 0;
  }

  .section-header h2 {
    font-size: 28px;
    line-height: 1.25;
  }

  .section-header p {
    color: var(--palette-wrap-600);
    font-size: 14px;
    line-height: 1.7;
  }

  .palette-scale-list {
    display: flex;
    flex-direction: column;
    gap: 18px;
  }

  .palette-row {
    display: grid;
    gap: 12px;
    grid-template-columns: 132px minmax(0, 1fr);
  }

  .palette-row h3,
  .semantic-group h3 {
    font-size: 14px;
    line-height: 1.4;
  }

  .scale-grid {
    display: grid;
    gap: 8px;
    grid-template-columns: repeat(10, minmax(84px, 1fr));
  }

  .semantic-grid {
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  }

  .semantic-group {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .semantic-list {
    display: grid;
    gap: 8px;
  }

  .swatch {
    background: var(--swatch-color);
    border: 1px solid rgb(41 36 56 / 12%);
    border-radius: 8px;
    box-sizing: border-box;
    color: #292438;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 82px;
    overflow: hidden;
    padding: 10px;
  }

  .swatch.dark {
    color: #fff;
  }

  .scale-swatch {
    aspect-ratio: 1 / 0.76;
  }

  .semantic-swatch {
    min-height: 96px;
  }

  .swatch-name {
    font-size: 13px;
    font-weight: 700;
    line-height: 1.3;
    overflow-wrap: anywhere;
  }

  .swatch-var {
    font-size: 11px;
    line-height: 1.4;
    opacity: 0.8;
    overflow-wrap: anywhere;
  }

  @media (max-width: 980px) {
    .palette-row {
      grid-template-columns: 1fr;
    }

    .scale-grid {
      grid-template-columns: repeat(5, minmax(96px, 1fr));
    }
  }

  @media (max-width: 560px) {
    .palette-story {
      padding: 20px;
    }

    .scale-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }
</style>
