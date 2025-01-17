import { createClient, type ClientConfig } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const config: ClientConfig = {
    projectId: "h5o26d1a",
    dataset: "production",
    apiVersion: "2025-01-11",
    useCdn: true,
};

const sanityClient = createClient(config);
export default sanityClient;

export function processProjectEntries(rawProject: SanityProject) {
    const builder = imageUrlBuilder(sanityClient);
    const projectImageUrl = builder.image(rawProject.image).url();

    const processedProject: ProcessedProject = {
        name: rawProject.name,
        company: rawProject.company,
        dateAccomplished: rawProject.dateAccomplished,
        stack: rawProject.stack,
        slug: rawProject.slug,
        projectImageUrl,
        // content: processProjectContent(rawProject.content),
        content: rawProject.content.map(processProjectContent),
    };
    return processedProject;
}

function processProjectContent(content: RawTextContent | RawImageContent) {
    if (content._type === "image") {
        const builder = imageUrlBuilder(sanityClient);
        const imageUrl = builder.image(content.asset).url();
        const processedImageContent: ProcessedImageContent = {
            type: "image",
            url: imageUrl,
        };
        return processedImageContent;
    } else if (content._type === "block") {
        const processedTextContent: ProcessedTextContent = {
            type: "text",
            style: content.style,
            textToRender: content.children
                .map((child) => child.text)
                .join("\n"),
        };
        return processedTextContent;
    }
    return null;
}
