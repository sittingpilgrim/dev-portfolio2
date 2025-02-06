<script lang="ts">
    const { data } = $props();
    let { name, company, projectImageUrl, content, stack, dateAccomplished } =
        data.project;

    function getTagFromStyle(style: ProcessedTextContent["style"]): string {
        if (style === "normal") {
            return "p";
        } else {
            return style;
        }
    }
</script>

<main class="default-margin work-page">
    <h4>{company}</h4>
    <div class="underscore"></div>
    <h2 class="mb-s">{name}</h2>
    <img class="project-image" src={projectImageUrl} alt="" />
    <div class="project-container mt-m">
        <div class="meta-data">
            <h3 class="semi-bold">Date</h3>
            <p>{dateAccomplished.slice(0, 7)}</p>
            <h3 class="semi-bold mt-m">Stack</h3>
            <ul>
                {#each stack as item}
                    <li>{item}</li>
                {/each}
            </ul>
        </div>
        <div class="project-content mt-m">
            {#each content as item}
                {#if item?.type === "text"}
                    <svelte:element this={getTagFromStyle(item.style)}
                        >{item.textToRender}</svelte:element
                    >
                {:else}
                    <img class="content-image" src={item?.url} alt="" />
                {/if}
            {/each}
        </div>
    </div>
</main>

<style>
    .work-page {
        padding-top: 80px;
        padding-bottom: 140px;
    }

    .project-image {
        width: 100%;
        max-height: 500px;
        object-fit: cover;
    }

    .content-image {
        display: block;
        margin: 0 auto;
    }
</style>
