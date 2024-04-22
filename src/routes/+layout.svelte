<script>
    import "../app.css";
    import { AppShell } from '@skeletonlabs/skeleton';
    import TopNav from '$lib/components/TopNav.svelte';
</script>
  

<AppShell >
    <svelte:fragment slot="header">
        <div class="max-w-[1400px]">
            <TopNav />
        </div>
        



    </svelte:fragment>
    <!-- (sidebarLeft) -->
    <!-- (sidebarRight) -->
    <!-- (pageHeader) -->
    <!-- Router Slot -->
    <div class="">
        
        <slot />

    </div>
    

    <!-- <div class="max-w-[1400px] p-7">
        <slot />
    </div> -->
    
    
    <!-- ---- / ---- -->
    <svelte:fragment slot="pageFooter">
        <!-- <Footer /> -->
    </svelte:fragment>
    <!-- (footer) -->

</AppShell>