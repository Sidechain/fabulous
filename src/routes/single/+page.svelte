<script lang="ts">
	export let data;
</script>

<h1>single card</h1>

<ul>
	{#each data.summaries as { uniqueId }}
		<li><a href="/single/{uniqueId}">{uniqueId}</a></li>
	{/each}
</ul>
