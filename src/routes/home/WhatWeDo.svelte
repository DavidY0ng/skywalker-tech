<script lang='ts'>
	import Icon from '@iconify/svelte';
	import CircleHeader from '$lib/components/CircleHeader.svelte';
	import { goto } from '$app/navigation';
	import IntersectionObserver from "svelte-intersection-observer";
    import { fly, scale, slide } from 'svelte/transition';
	
	let path = '/what-we-do'
	let contents = [
		{
			link: `${path}/defi-&-smart-contract#introduction`,
            icon: 'material-symbols:contract',
			title: 'Defi & Smart Contract',
			subtitle: 'Utilize blockchain technology for decentralized finance solutions and automated contract execution.',
            hover: false
		},
		{
			link: `${path}/crypto-exchange#introduction`,
            icon: 'mingcute:exchange-bitcoin-line',
			title: 'Crypto Exchange Platform',
			subtitle: 'Build a secure and scalable cryptocurrency exchange platform.',
            hover: false
		},
		{
			link: `${path}/nft#introduction`,
            icon: 'ri:nft-fill',
			title: 'NFT Assets Development ',
			subtitle: 'Create unique digital assets using blockchain technology for ownership, provenance, and collectibility.',
            hover: false
		}
	];

	let node: any
</script>

<IntersectionObserver element={node} let:intersecting once>
	<div bind:this={node} class="relative flex justify-center h-[1300px] lg:h-full bg-surface-500">
		<img
			src="/assets/img/what_we_do/earth.jpg"
			alt="bg"
			class=" w-full lg:h-[900px] h-full object-cover"
		/>
		<div
			class="flex-col max-w-[1300px] w-full h-full absolute justify-center items-center px-[30px] py-[150px]"
		>
		{#if intersecting}
			<div class="text-center">
				<div class="flex justify-center mb-10">
					<CircleHeader>WHAT WE DO</CircleHeader>
				</div>
	
				<div transition:fly={{ y: -80, duration: 700, delay: 600 }} class="h1 text-[40px] md:text-[40px] lg:text-[45px] xl:text-[70px] text-white mb-10">
					<div>
						Pioneers in <span class="text-primary-500">Innovation</span>
					</div>
				</div>
			</div>
			<div transition:fly={{ y: -80, duration: 700, delay: 1000 }} class="flex flex-col justify-between gap-5 lg:gap-10 lg:flex-row">
				{#each contents as content}
					<!-- svelte-ignore a11y-no-static-element-interactions -->
					<a
					href = '{content.link}'
					class="flex flex-col lg:h-[450px] h-[400px] w-full bg-transparent border border-gray-700 card p-[30px] rounded-3xl hover:scale-105 transition ease-in-out delay-150"
						on:mouseenter={() => content.hover = true}
						on:mouseleave={() => content.hover = false}
					>
						<div
							class="flex items-center justify-center w-20 h-20 mb-10 bg-gray-900 border border-4 border-gray-700 rounded-full text-primary-500"
							 class:selected={content.hover}    
						>
							<Icon icon={content.icon} width="3em" height="3em"/>
						</div>
						<div class="lg:h-[90px] mb-10 text-white h2">
							{content.title}
						</div>
						<div class="text-gray-400 h3">
							{content.subtitle}
						</div>
					</a>
				{/each}
			</div>
			{/if}
		</div>
		
	</div>
</IntersectionObserver>


<style>
    .selected {
        border-color: var(--primary-color);
        transition: border-color 0.5s ease-in-out;
    }
</style>