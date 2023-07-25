<script lang="ts">
	import TypeTag from '../TypeTag/TypeTag.svelte';
	export let types: string[];
</script>

<div class="flex gap-2 justify-center">
	{#each types as type}
		<TypeTag {type} />
	{/each}
</div>
