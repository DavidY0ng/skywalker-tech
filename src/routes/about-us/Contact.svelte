<script>
	import Icon from '@iconify/svelte';
	import CircleHeader from '$lib/components/CircleHeader.svelte';

	let contents = [
		{
			icon: 'ic:baseline-email',
			info: 'sky@gmail.com',
			borderColor: 'border-orange-500',
            textColor: 'text-orange-500'
		},
		{
			icon: 'carbon:phone-filled',
			info: '012-12345678',
			borderColor: 'border-red-500',
            textColor: 'text-red-500'
		},
		{
			icon: 'mdi:location',
			info: 'Scott Garden, KL',
			borderColor: 'border-primary-500',
            textColor: 'text-primary-500'
		}
	];
</script>

<div class="bg-surface-500 flex py-[100px] px-[30px]">
	<div class="flex max-w-[1800px] mx-auto">
		<div class="flex items-center justify-between w-full gap-20 md:flex-row p-15">
			<div class="w-full">
				<div class="flex justify-center mb-10">
					<CircleHeader>CONTACT</CircleHeader>
				</div>

				<div
					class="h1 text-[40px] md:text-[40px] lg:text-[45px] xl:text-[65px] text-white mb-20 text-center"
				>
					<div>
						Contact Skywalker <span class="text-primary-500">Tech</span>
					</div>
				</div>

				<div class="flex flex-col justify-between w-full gap-10 md:flex-row">
					{#each contents as content, index}
						<div class="flex flex-col items-center justify-center">
							<div
								class="mb-5 border rounded-full h-[83px] w-[83px] {content.borderColor} {content.textColor} bg-gray-800 flex justify-center items-center border-4"
							>
								<Icon icon={content.icon} width="28px" height="29px" />
							</div>
							<div class="text-white h3">
								{content.info}
							</div>
						</div>
						<div class="items-center hidden -translate-y-5 lg:flex">
							{#if index !== contents.length - 1}
								<img src="/assets/img/contact/line.png" alt="line" />
							{/if}
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</div>
