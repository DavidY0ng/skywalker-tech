<script lang='ts'>
	import Icon from '@iconify/svelte';
	import CircleHeader from '$lib/components/CircleHeader.svelte';
	import { scrollToSection } from '$lib/store/store';
	import IntersectionObserver from 'svelte-intersection-observer';
	import { fly, scale, slide } from 'svelte/transition';

	let node: any;

	let contents = [
		{
            icon: 'mingcute:exchange-bitcoin-line',
			title: 'Our Vision',
			description: 'Our vision is to cultivate a future where Web3 technology acts as a catalyst for global change, fostering innovation, inclusivity, and empowerment across all sectors of society.',

		},
		{
            icon: 'ri:nft-fill',
			title: 'Our Mission',
			description: 'We strive to lead the integration and advancement of Web3 technologies, empowering businesses and individuals with innovative solutions that unlock new opportunities, fuel growth, and promote positive societal impact.',

		}
	];

	function scrollToSectionHandler(id) {
		scrollToSection.set(id);
	}

</script>
<IntersectionObserver element={node} let:intersecting once threshold={0.6}>
	<div bind:this={node}  class="relative flex justify-center h-[1300px] lg:h-full bg-surface-500">
		<img
			src="/assets/img/what_we_do/earth.jpg"
			alt="bg"
			class=" w-full lg:h-[900px] h-full object-cover"
		/>
		<div
			class="flex-col max-w-[1400px] w-full h-full absolute justify-center px-[30px] py-[150px] flex lg:flex-row "
		>
			<div class="w-full">
	
				<div class=" border-gray-700 card bg-transparent p-[30px] rounded-3xl">
					<div class="mb-10 text-white h2">
						Our Values
					</div>
					<div class="mb-10 text-gray-400 h3">
						As pioneers in transformative solutions, we harness the complete potential of Web3 technology, fostering innovation and enabling growth in the digital sphere.
					</div>
					<button on:click|preventDefault={() => scrollToSectionHandler('contact')} class="w-[40%] text-white btn variant-ringed-primary hover:bg-primary-500">
						Let's Talk
					</button>
				</div>
			</div>
			
			<div class="flex flex-col justify-between w-full gap-5 lg:gap-10">
				{#each contents as content, index}
				{#if intersecting}
					<!-- svelte-ignore a11y-no-static-element-interactions -->
					<div
					transition:fly={{ x: 80, duration: 700, delay: index * 600 }}
					class="flex flex-col lg:h-[450px] h-[400px] w-full bg-transparent border border-gray-700 card p-[30px] rounded-3xl"
	
					>
						<div class="mb-10 text-white h2">
							{content.title}
						</div>
						<div class="text-gray-400 h3">
							{content.description}
						</div>
					</div>
					{/if}
				{/each}
			</div>
		</div>
	</div>
</IntersectionObserver>

