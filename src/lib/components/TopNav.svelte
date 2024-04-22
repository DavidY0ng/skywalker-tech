<script>
	import Icon from '@iconify/svelte';
	import { slide } from 'svelte/transition';
	import { scrollToSection } from '$lib/store/store';
	import { goto } from '$app/navigation';
	import Menu from './dropdown/Menu.svelte';
	import MenuItem from './dropdown/MenuItem.svelte';

	let isExpanded = false;
	let featureExpand = false;

	function onExpandMenu() {
		isExpanded = !isExpanded;
	}

	function keyFeaturesExpand() {
		featureExpand = !featureExpand;
	}

	function scrollToSectionHandler(id) {
		scrollToSection.set(id);
	}
</script>

<div class="fixed w-full bg-surface-500">
	<div class="max-w-[1800px] mx-auto">
		<div class="w-full flex justify-between p-5 text-white md:px-[30px]">
			<a class="font-bold h1" href="/#introduction">
				<span class=""> SKYWALKER </span>

				<span
					class="text-transparent bg-gradient-to-b from-primary-500 to-primary-500 bg-clip-text box-decoration-clone"
					>TECH</span
				>
			</a>
			<div>
				{#if !isExpanded}
					<button on:click={onExpandMenu} class="z-10 lg:hidden">
						<Icon icon="charm:menu-hamburger" width="1.9em" height="1.9em" />
					</button>
				{:else}
					<button on:click={onExpandMenu} class="z-10">
						<Icon icon="maki:cross" width="1.9em" height="1.9em" />
					</button>
				{/if}

				<div class="z-10 items-center hidden gap-8 text-lg lg:flex">
					<!-- <a
						href="/#about-us"
						class="hover-underline-animation"
						on:click|preventDefault={() => scrollToSectionHandler('about-us')}
					>
						About Us
					</a> -->
					<a href="/about-us#introduction" class="hover-underline-animation"> About Us </a>
					<Menu>
						<span slot="toggle">Key Features</span>
						<div class="flex flex-col variant-glass-secondary rounded-xl">
							<MenuItem
								><a
									href="/what-we-do/defi-&-smart-contract#introduction"
									class="hover-underline-animation">Defi & Smart Contract</a
								></MenuItem
							>
							<MenuItem
								><a
									href="/what-we-do/crypto-exchange#introduction"
									class="hover-underline-animation">Crypto Exchange</a
								></MenuItem
							>
							<MenuItem
								><a href="/what-we-do/nft#introduction" class="hover-underline-animation">NFT</a
								></MenuItem
							>
						</div>
					</Menu>
					<!-- <a
						href="/#key-features"
						class=" hover-underline-animation"
						on:click|preventDefault={() => scrollToSectionHandler('key-features')}
					>
						Key Features
					</a> -->
					<a
						href="/#contact"
						class="hover-underline-animation"
						on:click|preventDefault={() => scrollToSectionHandler('contact')}
					>
						Contact
					</a>
				</div>

				{#if isExpanded}
					<div
						transition:slide
						class="absolute top-[80%] right-[6%] flex flex-col p-5 rounded-lg variant-glass-secondary h5 z-10 gap-5 px-[20px] items-start w-[220px]"
					>
						<button class="flex items-center gap-2" on:click={keyFeaturesExpand}
							>Key Features <span
								><Icon
									icon="bxs:down-arrow"
									width="0.8em"
									height="0.8em"
									class={featureExpand ? 'rotate-180' : ''}
								/></span
							></button
						>
						{#if featureExpand}
							<div transition:slide class="flex flex-col pl-5 gap-y-2">
								<a href="/what-we-do/defi-&-smart-contract#introduction"> Defi & Smart Contract </a>
								<a href="/what-we-do/crypto-exchange#introduction"> Crypto Exchange </a>
								<a href="/what-we-do/nft#introduction"> NFT </a>
							</div>
						{/if}

						<a href="/about-us#introduction">About Us</a>
						<button on:click|preventDefault={() => scrollToSectionHandler('contact')}
							>Contact</button
						>
					</div>
				{/if}
			</div>
		</div>
	</div>
</div>

<style>
	.hover-underline-animation {
		display: inline-block;
		position: relative;
	}

	.hover-underline-animation::after {
		content: '';
		position: absolute;
		width: 100%;
		transform: scaleX(0);
		height: 2px;
		bottom: 0;
		left: 0;
		background-color: #04c7e0;
		transform-origin: bottom;
		transition: transform 0.25s ease-out;
	}

	.hover-underline-animation:hover::after {
		transform: scaleX(1);
		transform-origin: bottom;
	}
</style>
