<script lang="ts">
	import { getContext, onMount, setContext } from 'svelte';
	import { getNewCards, type Card } from '../data/helpers';
	import type { PageData } from './$types';
	import { Accordion, AccordionItem, ListBox, ListBoxItem } from '@skeletonlabs/skeleton';
	import { writable } from 'svelte/store';

	onMount(async () => {
		getNewCards();
		const response = await fetch('/api/all');
		const cardzz = await response.json();
		console.log('I GOT ALL', cardzz);
	});

	let cardClass: string;

	export let data: PageData;
	const cards: Card[] = Object.values(data);
	const filteredCards = writable();
	$: filteredCards.set(cards.filter((card) => card?.types?.includes(cardClass)));
	setContext('filteredCards', filteredCards);
	const filteredCardsToRender = getContext('filteredCards');
</script>

<div class="flex gap-2 flex-wrap p-2">
	{#if data != undefined}
		<Accordion>
			<AccordionItem open>
				<svelte:fragment slot="summary">Filter on classes</svelte:fragment>
				<svelte:fragment slot="content">
					<ListBox class="w-full">
						<ListBoxItem bind:group={cardClass} name="medium" value="Ninja">Ninja</ListBoxItem>
						<ListBoxItem bind:group={cardClass} name="medium" value="Brute">Brute</ListBoxItem>
						<ListBoxItem bind:group={cardClass} name="medium" value="Warrior">Warrior</ListBoxItem>
						<ListBoxItem bind:group={cardClass} name="medium" value="Hero">Hero</ListBoxItem>
						<ListBoxItem bind:group={cardClass} name="medium" value="Shadow">Shadow</ListBoxItem>
						<ListBoxItem bind:group={cardClass} name="medium" value="Draconic">Draconic</ListBoxItem
						>
					</ListBox></svelte:fragment
				>
			</AccordionItem>
		</Accordion>
	{/if}

	{#each $filteredCardsToRender as card}
		<a href={'/single/' + card.unique_id} class="card card-hover p-4 flex flex-row w-full">
			<header class=" -m-4 w-24">
				<img class="" src={card.printings[0].image_url} />
			</header>
			<section class="p-4">{card.name}</section>
		</a>
	{/each}
</div>
