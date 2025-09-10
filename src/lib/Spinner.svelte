<script lang="ts">
  import { CCLVividColor } from './const/config';

  export let size: string = '40px';
  export let color: string = CCLVividColor.STRAWBERRY_PINK;
  export let borderWidth: string = '4px';
</script>

<div
  class="spinner"
  style="width: {size}; height: {size}; border-width: {borderWidth}; --spinner-color: var({color});"
  role="status"
></div>

<style>
  .spinner {
    display: inline-block;
    border-radius: 50%;
    border-style: solid;
    border-color: #f3f3f3;
    border-top-color: var(--spinner-color);
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
