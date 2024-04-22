<script>
    import Introduction from "./home/Introduction.svelte";
    import WhoWeAre from "./home/WhoWeAre.svelte";
    import WhatWeDo from "./home/WhatWeDo.svelte";
    import WorkFlow from "./home/workflow/WorkFlow.svelte";
    import Contact from "./home/Contact.svelte";
    import { scrollToSection } from '$lib/store/store';

    $: scrollToSection.subscribe((value) => {
        if (value) {
            const element = document.querySelector(`#${value}`);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
                scrollToSection.set(null);
            }
        }
    });
</script>

<div>
    <div id="introduction">
        <Introduction />
    </div>
    
    <div id="about-us">
        <WhoWeAre />
    </div>
   <div id="key-features">
        <WhatWeDo />
   </div>
    <div id="workflow">
        <WorkFlow />
    </div>
    
    <div id="contact">
        <Contact />
    </div>
    
</div>