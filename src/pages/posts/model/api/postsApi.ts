import { $api } from "@/shared/api";

export const postsApi = $api
  .enhanceEndpoints({ addTagTypes: ["Post"] })
  .injectEndpoints({
    endpoints: () => ({}),
    overrideExisting: false,
  });
