<script lang="ts">
    import { goto } from "$app/navigation";
    import { Button } from "$components";

    function onclick() {
        goto("/#contact-form");
    }
</script>

<section class="hero-section default-margin">
    <h3>Hello I'm Tom</h3>
    <div class="underscore mb-m"></div>
    <h2 class="mb-s">I'm a web application developer based in the US building web applications with SvelteKit.</h2>
    <Button {onclick}>Let's Talk</Button>
</section>


<style>
    .hero-section {
        padding-top: 60px;
    }

</style>

