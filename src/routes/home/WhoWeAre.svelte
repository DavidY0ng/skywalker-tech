<script lang='ts'>
    import Icon from '@iconify/svelte';
    import CircleHeader from '$lib/components/CircleHeader.svelte';
    import { goto } from '$app/navigation';
    import IntersectionObserver from "svelte-intersection-observer";
    import { fly, scale, slide } from 'svelte/transition';
    
    let node: any
    
</script>

<div class="bg-surface-500 flex py-[100px] px-[30px]">
    <div class="flex max-w-[1800px] mx-auto">
        <IntersectionObserver element={node} let:intersecting once>
            <div bind:this={node} class="flex items-center justify-between w-full gap-20 md:flex-row p-15">
                {#if intersecting}
                <div class="h-[700px] w-full lg:flex items-center hidden" transition:fly={{ x: -80, duration: 700, delay: 600 }}>
                    <img src="/assets/img/who_we_are/pic1.png" alt="pic1" class="lg:h-[550px]">
                </div>
                <div class="text-center lg:text-start" transition:fly={{ x: 80, duration: 700, delay: 600 }}>
                    
                    <div class="flex justify-center mb-10 lg:justify-start">
                        <CircleHeader>
                            WHO WE ARE
                        </CircleHeader>
                    </div>
                   
                    <div class="h1 text-[40px] md:text-[40px] lg:text-[45px] xl:text-[70px] text-white mb-20">
                        <div >
                            Pioneers in Innovation <span class="text-primary-500">Revolutionizing</span> Digital Experience
                        </div>
                   
                    </div>
    
                    <div>
                        <button on:click={() => goto('/about-us#introduction')}  class="text-white btn border border-primary-500 w-[50%] text-lg font-bold hover:bg-primary-500 transition ease-in-out  duration-11300 delay-11450">
                            Explore
                        </button>
                    </div>
                   
                </div>
                {:else}
                <div class="h-[700px]">

                </div>
                {/if}
            </div>
        </IntersectionObserver>
        
        
    </div>

</div>
