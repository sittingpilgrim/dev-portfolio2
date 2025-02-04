<script lang="ts">
    import SectionHeadline from "$components/SectionHeadline.svelte";

    interface SkillsSectionProps {
        skills: Skill[];
    }
    const { skills }: SkillsSectionProps = $props();
</script>

<section class="mt-l">
    <SectionHeadline sectionName="skills">Skills</SectionHeadline>
    <div class="wrapper default-margin">
        <div class="skills-container default-margin">
            {#each skills as skill}
                <div class="skill-item">
                    <i class={skill.iconClass}></i>
                    <span class="skill-name">{skill.name}</span>
                </div>
            {/each}
        </div>
    </div>
</section>

<style>
    .wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .skills-container {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        width: 60%;
    }
    .skill-item {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    i {
        font-size: 4rem;
    }
    .skill-name {
        position: absolute;
        top: 25px;
        background-color: rgba(0, 0, 0, 0.8);
        color: white;
        padding: 4px 8px;
        border-radius: 4px;
        font-size: 0.8rem;
        opacity: 0;
        transition: opacity 0.2s ease-in-out;
        pointer-events: none;
    }
    .skill-item:hover .skill-name {
        opacity: 1;
    }
</style>
