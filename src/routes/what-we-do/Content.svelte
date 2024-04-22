<script lang='ts'>
	import defiContents from './contents/defi-content.json';
	import cryptoContents from './contents/crypto-content.json';
	import nftContents from './contents/nft-content.json';
	import { page } from '$app/stores';
	import { onDestroy } from 'svelte';
	import IntersectionObserver from 'svelte-intersection-observer';
	import { fly, scale, slide } from 'svelte/transition';

	let node: any;
	let currentContent:any;
	let picPath = ['']
	
	const unsubscribe = page.subscribe((url) => {
		const path = $page.url.pathname; // Remove leading slash

		switch (path) {
			case '/what-we-do/defi-&-smart-contract':
				currentContent = defiContents;
				break;
			case '/what-we-do/crypto-exchange':
				currentContent = cryptoContents;
				break;
			case '/what-we-do/nft':
				currentContent = nftContents;
				break;
			default:
				// Handle default content or error
				currentContent = null; // Or display a default message
		}
	});

	onDestroy(() => unsubscribe());
</script>
<IntersectionObserver element={node} let:intersecting once>
	<div  class="flex justify-center bg-white">
		<div  bind:this={node} class="flex max-w-[1400px] w-full h-full py-[100px]">
			<div class="flex flex-col px-[30px]">
				{#if currentContent}
				{#each currentContent as content, index}
					{#if intersecting}
					<div
						class="flex {index % 2 == 1
							? 'lg:flex-row-reverse flex-col-reverse'
							: 'lg:flex-row flex-col-reverse'} items-center mb-10"
					>
						<div transition:fly={{ y: -80, duration: 700, delay: 600 }} class="flex flex-col w-full">
							<div class="mb-5 font-bold text-primary-500 h1">
								{content.coloredTitle} <span class="text-black">{content.uncoloredTitle}</span>
							</div>
							<div class="h3">
								{content.description}
							</div>
						</div>
	
						<div transition:fly={{ x: 80, duration: 700, delay: 600 }}
							class="flex lg:w-[60%] w-full {index % 2 == 1
								? 'lg:justify-start justify-center'
								: 'lg:justify-end justify-center'} mb-5 lg:mb-0"
						>
							<img
								src="/assets/img{$page.url.pathname}/{content.pic}.png"
								alt="pic{content.pic}"
								class="object-cover h-[275px] w-[445px]"
							/>
						</div>
					</div>
					{/if}
				{/each}
				{/if}
			</div>
		</div>
	</div>
</IntersectionObserver>

