<script>
    import CircleHeader from "$lib/components/CircleHeader.svelte";
    import Timeline from "./section/Timeline.svelte";
    import WhyChooseUs from "./section/WhyChooseUs.svelte";
</script>

<div class="bg-surface-500 lg:pt-[120px] pt-[350px] pb-[100px]">
    <div class="mb-10 text-center">
        <div class="flex justify-center mb-10">
            <CircleHeader>WORK FLOW</CircleHeader>
        </div>

        <div class="h1 text-[40px] md:text-[40px] lg:text-[45px] xl:text-[70px] text-white ">
            <div>
                Strategy and <span class="text-primary-500">Plan</span>
            </div>
        </div>
    </div>
   
    <div class="bg-[url('/assets/img/work_flow/area_bg.png')] bg-no-repeat bg-cover relative">
        <div class="flex justify-center pt-[100px] overflow-x-auto">
            <Timeline />
        </div>
        
        <WhyChooseUs />
    </div>
</div>
