import { createClient, type ClientConfig } from "@sanity/client";

const config: ClientConfig = {
    projectId: "h5o26d1a",
    dataset: "production",
    apiVersion: "2025-01-11",
    useCdn: true,
};

const sanityClient = createClient(config);
export default sanityClient;
