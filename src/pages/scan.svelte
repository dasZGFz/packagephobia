<script>
  import { createEventDispatcher } from 'svelte';

  export let number = 0;
  const dispatch = createEventDispatcher();
</script>

<h1>{ number }</h1>
<button on:click={ () => dispatch('magicalclick') }>
  Click Me
</button>