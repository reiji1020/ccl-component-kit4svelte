<script context="module" lang="ts">
  export interface Imgsrc {
    src: string;
    alt: string;
  }
</script>

<script lang="ts">
  /**
   * Image data
   * Provide an array of objects containing image URL and alt text
   * @type Array<Imgsrc>
   */
  export let src: Array<Imgsrc>;

  /**
   * Width of the carousel component
   * @type string
   */
  export let csWidth: string;

  let currentIndex = 0;

  /**
   * Move to the next slide
   */
  const nextSlide = () => {
    if (src.length === 0) return;
    currentIndex = (currentIndex + 1) % src.length;
  };

  /**
   * Move to the previous slide
   */
  const prevSlide = () => {
    if (src.length === 0) return;
    currentIndex = (currentIndex - 1 + src.length) % src.length;
  };
</script>

<div
  class="carouselWrapper"
  style="--carousel-width: {csWidth}; --translate-x: calc(-{currentIndex} * 100%)"
>
  <div class="slides">
    {#each src as item, index}
      <img class="slide" src={item.src} alt={item.alt} />
    {/each}
  </div>
  <div class="buttons">
    <button on:click={prevSlide}>❮</button>
    <button on:click={nextSlide}>❯</button>
  </div>
</div>

<style>
  .carouselWrapper {
    position: relative;
    overflow: hidden;
    width: var(--carousel-width);
  }
  .slides {
    display: flex;
    transition: transform 0.5s ease-in-out;
    transform: translateX(var(--translate-x));
  }
  .slide {
    min-width: 100%;
  }
  .buttons {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
  }
  .buttons button:first-child {
    position: absolute;
    left: 20px;
    z-index: 1;
  }
  .buttons button:last-child {
    position: absolute;
    right: 20px;
    z-index: 1;
  }
  button {
    background: white;
    color: black;
    border: none;
    padding: 10px;
    cursor: pointer;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  }
</style>
