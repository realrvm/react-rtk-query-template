import { postsApi } from "@/pages/posts";

import { combineSlices } from "@reduxjs/toolkit";

export const reducers = combineSlices(postsApi);
