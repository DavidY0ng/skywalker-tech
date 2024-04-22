<script>
     import Icon from '@iconify/svelte';
</script>

<div class="flex items-center">
    <div class="text-primary-500">
        <Icon icon="material-symbols:circle" width="10px" height="10px" />
    </div>
    <div class="text-white font-bold px-2 text-[16px]">
        <slot/>
    </div>
    
    <div class="text-primary-500">
        <Icon icon="material-symbols:circle" width="10px" height="10px" />
    </div>
</div>
