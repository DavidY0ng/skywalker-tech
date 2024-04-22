<script>
    import "../app.css";
    import { AppShell } from '@skeletonlabs/skeleton';
    import TopNav from '$lib/components/TopNav.svelte';
    import { navigating } from "$app/stores";
    import Spinner from "$lib/components/Spinner.svelte";
    import { loading } from '$lib/store/store'
    
    
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
  
    {#if $navigating}
    <Spinner />
  {:else}
    <div class="">
      <slot />
    </div>
  {/if}
    
    
    

    <!-- <div class="max-w-[1400px] p-7">
        <slot />
    </div> -->
    
    
    <!-- ---- / ---- -->
    <svelte:fragment slot="pageFooter">
        <!-- <Footer /> -->
    </svelte:fragment>
    <!-- (footer) -->

</AppShell>