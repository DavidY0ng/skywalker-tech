<script lang="ts">
	import IntersectionObserver from 'svelte-intersection-observer';
	import { fly, scale, slide } from 'svelte/transition';

	let node: any;
</script>

<IntersectionObserver element={node} let:intersecting once>
    <div bind:this={node} class="relative flex justify-center bg-surface-500 pb-[100px] lg:pt-[100px] px-[30px]">
    
        <div class="flex-col max-w-[1400px] w-full h-full justify-center items-center flex">
            <div class="mb-20 h-[150px] w-[150px]">
                <img src='/assets/gif/about_us/gem.gif' alt='gif1'>
            </div>
            {#if intersecting}
            <div transition:fly={{ y: -80, duration: 700, delay: 600 }} class="text-center ">
                <div class="h1 text-[40px] md:text-[40px] lg:text-[45px] xl:text-[70px] text-white mb-10">
                    <div >
                        Embrace the limitless possibilities of <span class="text-primary-500">Web3</span>, where innovation propels us into a boundless digital frontier.
                    </div>
                </div>
            </div>
            {:else}
            <div class="h-[160px]">
                
            </div>
            {/if}
            
        </div>
    </div>
</IntersectionObserver>
