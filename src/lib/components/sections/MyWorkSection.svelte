<script lang="ts">
    import { SectionHeadline } from "$components";
    interface MyWorkSectionProps {
        projects: ProcessedProject[];
    }

    let { projects }: MyWorkSectionProps = $props();
    const mainProject = projects[0];
</script>

<section class="mt-lg">
    <div class="container">
        <SectionHeadline sectionName="my-work">My Work</SectionHeadline>
        <div class="default-margin projects-container mt-m">
            <article class="main-project mb-s">
                <a href={`/work/${mainProject.slug}`}>
                    <img src={mainProject.projectImageUrl} alt="" />
                </a>
                <div class="project-info mt-s">
                    <div class="title-and-company">
                        <h4 class="semi-bold">{mainProject.name}</h4>
                        <p class="company-name dark-gray">
                            {mainProject.company}
                        </p>
                    </div>
                    <a href={`/work/${mainProject.slug}`} class="btn-to-article"
                        >&rarr;</a
                    >
                </div>
            </article>
            <div class="more-projects-container">
                {#each projects.slice(1) as project}
                    <article class="project">
                        <a href={`/work/${project.slug}`}>
                            <img src={project.projectImageUrl} alt="" />
                        </a>
                        <div class="project-info mt-s">
                            <div class="title-and-company">
                                <h4 class="semi-bold">{project.name}</h4>
                                <p class="company-name dark-gray">
                                    {project.company}
                                </p>
                            </div>
                            <a
                                href={`/work/${project.slug}`}
                                class="btn-to-article">&rarr;</a
                            >
                        </div>
                    </article>
                {/each}
            </div>
        </div>
    </div>
</section>

<style>
    img {
        width: 100%;
        object-fit: cover;
        border-radius: 20px;
        cursor: pointer;
    }

    .more-projects-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    .more-projects-container img {
        height: 350px;
    }

    .project {
        width: 48%;
    }

    .project img {
        max-height: 350px;
    }

    .project-info {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .btn-to-article {
        display: block;
        font-size: 40px;
        border: 1px solid black;
        border-radius: 40px;
        padding: 0px 24px;
        padding-bottom: 5px;
    }

    .btn-to-article:hover {
        background-color: black;
        color: white;
    }

    .company-name {
        font-size: 16px;
        font-weight: 400;
        margin-bottom: 0;
    }
</style>
