<script lang="ts">
	import IntersectionObserver from 'svelte-intersection-observer';
	import { fly, scale, slide } from 'svelte/transition';

	let node: any;
</script>

<IntersectionObserver element={node} let:intersecting once>
	<div bind:this={node} class="relative flex justify-center bg-surface-500">
		
			<img
				src="/assets/img/introduction/banner_bg.jpg"
				alt="bg"
				class=" w-full max-h-[900px] h-[800px] object-cover opacity-40"
			/>
            {#if intersecting}
			<div class="flex max-w-[1400px] w-full h-full absolute justify-center items-center">
				<div class="text-center">
					<div transition:fly={{ y: -80, duration: 700, delay: 600 }} class="h1 text-[40px] md:text-[40px] lg:text-[45px] xl:text-[70px] text-white mb-10">
						<div>
							Unleashing <span class="text-primary-500">Web3</span>
						</div>
						<div>Innovation</div>
					</div>

					<div transition:fly={{ y: -80, duration: 700, delay: 1000 }} class="text-white h2 neon-text">
						Empowering Your Digital Journey with Cutting-Edge Web3 Solution
					</div>
				</div>
			</div>
			<img transition:fly={{ x: -80, duration: 700, delay: 1400 }}
				src="/assets/img/introduction/banner_shape01.png"
				alt="bg"
				class="absolute top-[5%] left-0 animate-bounce-x"
			/>
			<img
				src="/assets/img/introduction/banner_shape02.png"
				alt="bg"
				class="absolute top-[28%] right-[15%] animate-spin"
			/>
			<img transition:fly={{ y: -80, duration: 700, delay: 1400 }}
				src="/assets/img/introduction/banner_shape03.png"
				alt="bg"
				class="absolute bottom-0 right-[5%] animate-bounce-y"
			/>
            {/if}
		
	</div>
</IntersectionObserver>

<style>
	.neon-text {
		text-shadow:
			#ffffff 0 0 12px,
			#ffffff 0 0 25px,
			#ffffff 0 0 35px;

		text-align: center;
		color: #fff;
	}

	@keyframes bounceY {
		0%,
		100% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(-10px);
		}
	}

	@keyframes bounceX {
		0%,
		100% {
			transform: translateX(0);
		}
		50% {
			transform: translateX(-10px);
		}
	}

	.animate-bounce-y {
		animation: bounceY 2s ease-in-out infinite; /* Adjust as needed */
	}

	.animate-bounce-x {
		animation: bounceX 2s ease-in-out infinite; /* Adjust as needed */
	}

	.animate-spin {
		animation: spin 8s linear infinite; /* Adjust as needed */
	}

	@keyframes spin {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}
</style>
