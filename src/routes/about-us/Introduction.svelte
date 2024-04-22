<script lang="ts">
	import IntersectionObserver from 'svelte-intersection-observer';
	import { fly, scale, slide } from 'svelte/transition';

	let node: any;
</script>
<IntersectionObserver element={node} let:intersecting once>
    <div bind:this={node} class="relative flex justify-center bg-surface-500">
        <img src="/assets/img/introduction/banner_bg.jpg" alt="bg" class=" w-full max-h-[900px] h-[800px] object-cover opacity-40" />
        <div class="flex max-w-[1400px] w-full h-full absolute justify-center items-center px-[30px]">
            {#if intersecting}
            <div class="text-center ">
                <div transition:fly={{ y: -80, duration: 700, delay: 600 }}  class="h1 text-[40px] md:text-[40px] lg:text-[45px] xl:text-[70px] text-white mb-10">
                    <div >
                        About Skywalker <span class="text-primary-500">Tech</span>
                    </div>
                </div>
                
                <div transition:fly={{ y: -80, duration: 700, delay: 1000 }} class="text-white h3 neon-text">
                    We pioneer the fusion of blockchain and Web3 technologies to create a future where digital progress benefits all. Our dedication to excellence empowers businesses and individuals with Web3's transformative potential, fostering growth and positive change.
                </div>
            </div>
            {/if}
        </div>
        <img src="/assets/img/introduction/banner_shape01.png" alt="bg" class="absolute top-[5%] left-0" />
        <img src="/assets/img/introduction/banner_shape02.png" alt="bg" class="absolute top-[28%] right-[15%] hidden lg:block" />
        <!-- <img src="/assets/img/introduction/banner_shape03.png" alt="bg" class="absolute bottom-0 right-[5%]" /> -->
    </div>
</IntersectionObserver>





