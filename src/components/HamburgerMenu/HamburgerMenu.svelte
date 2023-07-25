<script lang="ts">
	let menuOpen: boolean = false;
</script>

<div on:click={() => (menuOpen = !menuOpen)}>MENU</div>
{#if menuOpen}
	<div class="fixed h-screen w-screen z-10 bg-green-400 top-0 left-0">
		<span>Hi I am an open menu</span>
		<a href="/"><button on:click={() => (menuOpen = !menuOpen)}>GO HOME</button></a>
		<button class="top-0 right-0 absolute text-5xl" on:click={() => (menuOpen = !menuOpen)}
			>X</button
		>
		<div>Menu 1</div>
		<div>Menu 2</div>
		<div>Menu 3</div>
	</div>
{/if}
