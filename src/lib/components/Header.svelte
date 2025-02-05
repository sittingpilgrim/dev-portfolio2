<script lang="ts">
    import { goto } from "$app/navigation";
    import { Button } from "$components";

    function onclick() {
        goto("#contact-form");
    }
</script>

<nav class="navbar default-margin">
    <a href="/" class="logo">Home</a>
    <div class="navbar-links">
        <a href="/#about-me">About</a>
        <a href="/#my-work">Projects</a>
        <a href="/#skills">Skills</a>
        <Button className="nav-bar" {onclick}>Contact</Button>
    </div>
</nav>

<style>
    .navbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem 0;
    }
    .navbar-links {
        display: flex;
        gap: 1rem;
        align-items: center;
    }
    .navbar-links a:hover {
        text-decoration: underline;
    }
</style>
