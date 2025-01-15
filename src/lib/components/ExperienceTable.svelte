<script lang="ts">
    import type { DevExperience } from "$lib/types/sanity";
    interface WorkExperience {
        jobTitle: string;
        company: string;
        startDate: string;
        endDate?: string;
    }


    interface AboutMeProps {
        workExperience: DevExperience[];
    }

    let { workExperience } = $props();

</script>

<section class="default-margin work-experience mt-m">
    <ul class="work-experience-list">
        {#each workExperience as job}
            <li class="work-item">
                <article>
                    <h4 class="bold mb-xs">{job.jobTitle}</h4>
                    <div class="company-and-date">
                        <p>{job.company}</p>
                        <p class="dark-grey">
                            {job.startDate.slice(0, 7)}
                            {#if job.endDate}
                                {` / ${job.endDate.slice(0, 7)}`}
                            {:else}
                                / present
                            {/if}
                        </p>
                    </div>
                </article>
            </li>
        {/each}
    </ul>
    <h3 class="headline">Past work <br /> Experience</h3>
</section>

<style>
    .work-experience {
        display: flex;
        justify-content: space-between;
        width: 100%;
    }
    .work-experience-list {
        width: 50%;
    }
    .headline {
        text-align: right;
    }
    .work-item {
        border-bottom: 1px solid var(--color-grey);
        padding-bottom: 12px;
    }
    .work-item:not(:first-of-type) {
        margin-top: 16px;
    }
    .work-item p {
        margin-bottom: 0;
    }
    .company-and-date {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
    }
</style>
