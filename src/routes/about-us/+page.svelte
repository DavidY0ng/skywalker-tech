<script>
    import Introduction from './Introduction.svelte'
    import Quote from './Quote.svelte'
    import Values from './Values.svelte'
    import Contact from './Contact.svelte';
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
   
    <Quote />
    <Values />
    <div id="contact">
        <Contact />
    </div>
    
</div>