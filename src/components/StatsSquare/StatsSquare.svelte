<script lang="ts">
	export let stat: number | string;
	export let label: string;
	import { Avatar } from '@skeletonlabs/skeleton';
</script>

<div class="relative inline-block">
	<span class="badge-icon variant-filled-warning absolute -top-2 -right-2 z-10"
		>{stat === '' ? 'N/A' : stat}</span
	>
	<span class="chip variant-filled">{label}</span>
</div>
