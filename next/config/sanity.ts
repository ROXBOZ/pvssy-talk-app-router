import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2021-10-21",
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
  useCdn: false,
});

export const builder = imageUrlBuilder(client);

export const urlFor = (source: string) => {
  return builder.image(source);
};

export { client };
