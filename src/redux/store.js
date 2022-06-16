import { configureStore } from "@reduxjs/toolkit";

import productModalSliceJs from "./productModalSlice.js";

export const store = configureStore({
    reducer: {productModalSliceJs}
}) 