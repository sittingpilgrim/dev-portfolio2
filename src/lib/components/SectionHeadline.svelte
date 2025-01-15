<script lang="ts">
    import type { Snippet } from "svelte";

    interface SectionHeadlineProps {
        children: Snippet;
        sectionName: string;
    }

    let { children, sectionName }: SectionHeadlineProps = $props();
</script>

<div class="default-margin" id={sectionName}>
    <h3>{@render children()}</h3>
    <div class="underscore mb-s"></div>
</div>
