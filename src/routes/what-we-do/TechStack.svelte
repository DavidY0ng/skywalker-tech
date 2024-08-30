<script>
	let img = [1, 2, 3, 4, 5, 6, 7, 8, 9];
</script>

<div class="">
	<div class="flex justify-center bg-[#292929] lg:w-full items-center">
		<div class="flex max-w-[1600px] h-full justify-center items-center py-[100px]">
			<div class="flex flex-col text-center lg:w-full">
				
				<div class="h1 text-[40px] md:text-[40px] lg:text-[45px] xl:text-[70px] text-white mb-10">
					<div class="mb-10">
						Our <span class="text-primary-500">Tech </span>Stack
					</div>
				</div>

				<div class="w-full overflow-x-auto lg:overflow-hidden ">
					<div class="w-[50px] md:w-full px-[30px]"> 

						<div
						class="grid items-center grid-cols-3 xl:gap-x-[150px] xl:gap-y-[150px] gap-y-10 md:gap-20 lg:gap-40 justify-items-center w-[650px] md:w-full lg:w-full xl:w-[1400px]"
					>
						{#each img as img}
							<!-- <div class="flex w-[50%] h-[80%] "> -->
							<div class="flex md:h-none md:w-none">
								<img
									src="/assets/img/defi_smart_contract/tech/{img}.png"
									alt="pic{img}"
									class="lg:h-full lg:w-full"
								/>
							</div>
						{/each}
					</div>
					</div>
						
					
				</div>

				
			</div>
		</div>
	</div>
</div>
