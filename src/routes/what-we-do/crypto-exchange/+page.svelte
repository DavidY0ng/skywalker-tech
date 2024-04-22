<script>
    import Introduction from '../Introduction.svelte';
    import Content from '../Content.svelte';
    import TechStack from '../TechStack.svelte';
    import Services from '../Services.svelte';
    import Contact from '../Contact.svelte';
</script>

<div>
    <div id="introduction">
        <Introduction />
    </div>
    
    <Content />
    <TechStack />
    <Services />
    <div id="contact">
        <Contact />
    </div>
    
</div>