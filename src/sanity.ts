import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

const client = createClient({
  projectId: import.meta.env.VITE_PROJECT_ID, 
  dataset: "production",     
  useCdn: false,                
  apiVersion: "2022-03-07",     
});

const builder = imageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
    return builder.image(source);
}

export default client;
