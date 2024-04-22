<script lang='ts'>
    import Icon from '@iconify/svelte';
    import CircleHeader from '$lib/components/CircleHeader.svelte';
    import IntersectionObserver from "svelte-intersection-observer";
    import { fly, scale, slide } from 'svelte/transition';

    let node:any
</script>
<IntersectionObserver element={node} let:intersecting once>
    <div bind:this={node} class="bg-transparent flex pt-[150px] px-[50px]">
        <div class="flex max-w-[1800px] mx-auto">
            {#if intersecting}
            <div class="flex flex-col items-center justify-center w-full md:flex-row p-15">
                <div transition:fly={{ x: -80, duration: 700, delay: 600 }} class="h-[550px] w-full lg:flex items-center justify-center hidden">
                    <img src="/assets/img/work_flow/why_choose_us/document_img.png" alt="pic1" class="lg:h-[550px]">
                </div>
                
                <div transition:fly={{ x: 80, duration: 700, delay: 600 }} class="text-start lg:text-start">
                    <div class="flex justify-start mb-10">
                        <CircleHeader>
                            WHY CHOOSE US
                        </CircleHeader>
                    </div>
                   
                    <div class="h1 text-[40px] md:text-[40px] lg:text-[45px] xl:text-[70px] text-white mb-10">
                        <div >
                            Realiable Ally in Decentralized <span class="text-primary-500">Frontier</span> 
                        </div>
                   
                    </div>
    
                    <div class="mb-10 text-white pl-7 h3 lg:mb-0">
                        <ul class="list-disc">
                            <li>
                                Expertise
                            </li>
                            <li>
                                Tailored Solutions
                            </li>
                            <li>
                                Dependable reliability
                            </li>
                        </ul>
                    </div>
                   
                    <!-- in mobile view the pictures goes to bottom -->
                    <div transition:fly={{ x: -80, duration: 700, delay: 600 }} class="flex items-center justify-center w-full lg:flex lg:hidden">
                        <img src="/assets/img/work_flow/why_choose_us/document_img.png" alt="pic1" class="lg:h-[550px]">
                    </div>
                </div>
                
            </div>
            {/if}
            
    
            
        </div>
    
    </div>
</IntersectionObserver>
