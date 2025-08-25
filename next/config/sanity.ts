// Custom hook to generate optimized image URLs from Sanity
import { useMemo } from "react";

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

export function useSanityImageUrl(
  ref?: string,
  options?: { width?: number; height?: number; quality?: number },
) {
  const DEFAULT_WIDTH = 600;
  const DEFAULT_HEIGHT = 500;
  const DEFAULT_QUALITY = 75;
  return useMemo(() => {
    if (!ref) return null;
    let builderInstance = urlFor(ref);
    const width = options?.width ?? DEFAULT_WIDTH;
    const height = options?.height ?? DEFAULT_HEIGHT;
    const quality = options?.quality ?? DEFAULT_QUALITY;
    builderInstance = builderInstance
      .width(width)
      .height(height)
      .quality(quality);
    builderInstance = builderInstance.auto("format");
    return builderInstance.url();
  }, [ref, options?.width, options?.height, options?.quality]);
}

export { client };
