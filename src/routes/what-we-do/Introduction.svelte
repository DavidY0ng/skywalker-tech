<script lang="ts">
	import { page } from '$app/stores';
	import { onDestroy } from 'svelte';

	let currentContent: any;
	let path = '/what-we-do'
	let contents = [
		{
			path: `${path}/defi-&-smart-contract`,
			title: 'Defi &',
			highlight: 'Smart Contract',
			description:
				'At Skywalker Tech , we harness the power of blockchain technology to provide innovative solutions for decentralized finance and automated contract execution. '
		},
		{
			path: `${path}/crypto-exchange`,
			title: 'Crypto',
			highlight: 'Exchange',
			description:
				'Launch your cryptocurrency exchange with us. Secure, scalable solutions for seamless trading experiences. '
		},
		{
			path: `${path}/nft`,
			title: 'Non-Fungible Token',
			highlight: '(NFT)',
			description:
				'Dive into the world of digital ownership with our comprehensive NFT development services. From creating unique digital assets to establishing robust marketplaces, we empower you to harness the potential of blockchain technology for ownership, provenance, and collectibility.'
		}
	];

    const unsubscribe = page.subscribe((url) => {
        currentContent = contents.find((content) => content.path === $page.url.pathname);
    });

	onDestroy(() => unsubscribe());
</script>

<div class="relative flex justify-center bg-surface-500">
	<img
		src="/assets/img/defi_smart_contract/choose_bg.jpg"
		alt="bg"
		class=" w-full max-h-[900px] h-[800px] object-cover opacity-40"
	/>
	<div class="flex max-w-[1400px] w-full h-full absolute justify-center items-center px-[30px]">
		{#if currentContent}
			<div class="text-center">
				<div class="h1 text-[40px] md:text-[40px] lg:text-[45px] xl:text-[70px] text-white mb-10">
					<div>
						{currentContent.title} <span class="text-primary-500">{currentContent.highlight}</span>
					</div>
				</div>

				<div class="text-white h2 neon-text">
					{currentContent.description}
				</div>
			</div>
		{/if}
	</div>
</div>
