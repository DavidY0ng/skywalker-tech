<script lang="ts">
	import timeline from './timeline.json';
	import CircleLine from '../components/CircleLine.svelte';
	import Icon from '@iconify/svelte';
	import IntersectionObserver from 'svelte-intersection-observer';
	import { fly, scale, slide } from 'svelte/transition';

	let node: any;
</script>

<!-- empty div to let tailwind read the colour -->
<div
	class="bg-red-500 bg-orange-500 bg-green-500 bg-blue-500 border-red-500 border-green-500 border-blue-500 bg-primary-500"
></div>
<IntersectionObserver element={node} let:intersecting once>
	<div class="overflow-x-auto">
		<div
			bind:this={node}
			class="relative flex justify-center items-center h-[500px] px-[30px] w-[1600px]"
		>
			<div class="absolute">
				<hr class=" !border-t-8 !border-gray-700 w-[1500px]" />
				<Icon
					icon="teenyicons:right-solid"
					width="1.5em"
					height="1.5em"
					class="absolute top-0 right-0 text-gray-700 -translate-y-[32%] translate-x-[50%]"
				/>
			</div>

			{#each timeline as content, index}
				{#if index % 2 === 0}
					<!-- bottom content -->
					{#if intersecting}
						<div transition:fly={{ y: 80, duration: 700, delay: 300 }} class="relative w-[1500px]">
							<div class="absolute left-0 top-[50%] -translate-y-[50%]">
								<CircleLine position="top" circleColor={content.bgColor} />
							</div>

							<!-- description -->
							<div class="pl-[25px] pt-[25px] absolute top-0 w-[200px]">
								<div class="mb-5 font-bold text-white h4">
									{content.title}
								</div>
								<div class="text-sm text-gray-300">
									{content.description}
								</div>
							</div>
						</div>
					{/if}
				{:else}
					<!-- top content -->
					{#if intersecting}
						<div transition:fly={{ y: -80, duration: 700, delay: 300 }} class="relative w-[1500px]">
							<div class="absolute left-0 bottom-[50%] translate-y-[50%]">
								<CircleLine position="bottom" circleColor={content.bgColor} />
							</div>

							<!-- description -->
							<div class="pl-[25px] pb-[25px] -top-[180px] absolute w-[200px]">
								<div class="mb-5 font-bold text-white h4">
									{content.title}
								</div>
								<div class="text-sm text-gray-300">
									{content.description}
								</div>
							</div>
						</div>
					{/if}
				{/if}
			{/each}
		</div>
	</div>
</IntersectionObserver>
