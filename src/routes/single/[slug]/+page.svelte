<script lang="ts">
	import { ProgressRadial } from '@skeletonlabs/skeleton';
	import StatsSquare from '../../../components/StatsSquare/StatsSquare.svelte';
	import TypeTags from '../../../components/TypeTags/TypeTags.svelte';
	import { getSingleCardName, type Card } from '../../../data/helpers';
	import type { PageData } from './$types';
	import { getContext } from 'svelte';

	export let data: PageData;

	const user = getContext('user');
</script>

<div class="flex flex-col items-center p-4">
	<!-- <div>Hello {$user.name}</div> -->
	{#if data == undefined}
		<ProgressRadial />
	{/if}
	<!-- <div>{JSON.stringify(card)}</div> -->
	{#if data != undefined}
		{console.log('here is the card', data)}
		<div class="flex flex-col gap-2">
			<!-- 450 628 -->
			<div class="w-[315px] h-[440px]">
				<img
					loading="eager"
					src={data.printings[0]?.image_url ??
						'https://upload.wikimedia.org/wikipedia/en/0/0c/Sonic_2_US_Cover.jpg'}
					alt={`Image of the card ${data.name}`}
				/>
			</div>
			<span class="text-xl text-center">{data.name}</span>

			<TypeTags types={data.types} />

			<TypeTags types={data.card_keywords} />

			{#if data.abilities_and_effects && data.abilities_and_effects.length > 0}
				<TypeTags types={data.abilities_and_effects} />
			{/if}

			{#if data.ability_and_effect_keywords && data.ability_and_effect_keywords.length > 0}
				<TypeTags types={data.ability_and_effect_keywords} />
			{/if}

			{#if !data.types?.includes('Hero')}
				<div class="flex gap-2 justify-center">
					<StatsSquare stat={data.pitch} label="Pitch" />
					<StatsSquare stat={data.cost} label="Cost" />
					<StatsSquare stat={data.power} label="Power" />
					<StatsSquare stat={data.defense} label="Defense" />
				</div>
			{/if}

			{#if data.types?.includes('Hero')}
				<div class="flex gap-2 justify-center">
					<StatsSquare stat={data.intelligence} label="Intellect" />
					<StatsSquare stat={data.health} label="Health" />
				</div>
			{/if}

			<div class="flex flex-col gap-2">
				<nav class="list-nav bg-slate-500 rounded-md p-2">
					<label>Referenced cards</label>
					{#if data.referenced_cards}
						<ul>
							{#each data.referenced_cards as refCard}
								<li>
									<a href={'/single/' + refCard}>
										<span class="badge bg-primary-500">💀</span>
										<span class="flex-auto">{getSingleCardName(refCard)}</span>
									</a>
								</li>
							{/each}
						</ul>
					{/if}
				</nav>

				<nav class="list-nav bg-slate-500 rounded-md p-2">
					<label>Referenced by</label>
					{#if data.cards_referenced_by}
						<ul>
							{#each data.cards_referenced_by as refCard}
								<li>
									<a href={'/single/' + refCard}>
										<span class="badge bg-primary-500">💀</span>
										<span class="flex-auto">{getSingleCardName(refCard)}</span>
									</a>
								</li>
							{/each}
						</ul>
					{/if}
				</nav>
			</div>
		</div>
	{/if}
</div>
