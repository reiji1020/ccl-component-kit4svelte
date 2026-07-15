<script lang="ts">
  import Alert from '../lib/Alert.svelte';

  export let message: string;
  export let type: 'success' | 'error' | 'warning' | 'info' = 'info';
  export let dismissible: boolean = false;
  export let outline: boolean = false;

  let dismissed = false;
</script>

<Alert {message} {type} {dismissible} {outline} on:dismiss={() => (dismissed = true)} />
<output data-testid="dismiss-status">{dismissed ? 'dismissed' : 'active'}</output>
