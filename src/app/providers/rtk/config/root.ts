import { configureStore } from "@reduxjs/toolkit";

import { reducers } from "./reducers";
import { $api } from "@/shared/api";
import { IS_DEV } from "@/shared/lib/constants";

export const store = configureStore({
  reducer: reducers,
  devTools: IS_DEV,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat($api.middleware),
});
