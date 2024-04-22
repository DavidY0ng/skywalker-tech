<script lang='ts'>
    export let position = ''
    export let circleColor = ''
</script>

<div class="relative flex items-center justify-center">
    <!-- Outer circle -->
    <div class="bg-{circleColor}-500 h-[32px] w-[32px] rounded-full absolute opacity-20">
        <!-- Inner circle -->
    </div>
    <span class="bg-{circleColor}-500 h-[16px] w-[16px] rounded-full inline-block"></span>
    <div class="divider-vertical !border-r-2 border-{circleColor}-500 absolute h-[200px] {position}-0"></div>
</div>
