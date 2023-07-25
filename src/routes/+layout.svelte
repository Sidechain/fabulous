<script lang="ts">
	import HamburgerMenu from '../components/HamburgerMenu/HamburgerMenu.svelte';
	import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	import '../app.css';

	import { invalidate } from '$app/navigation';
	import { onMount } from 'svelte';

	export let data;

	let { supabase, session } = data;
	$: ({ supabase, session } = data);

	onMount(() => {
		const { data } = supabase.auth.onAuthStateChange((event, _session) => {
			if (_session?.expires_at !== session?.expires_at) {
				invalidate('supabase:auth');
			}
		});

		return () => data.subscription.unsubscribe();
	});
</script>

<div class="flex h-12 bg-red-500 items-center justify-between p-4">
	<a href="/">FABulous</a>
	<HamburgerMenu />
</div>
<slot />

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.gray.500);
	}
</style>
