import { configureStore } from "@reduxjs/toolkit";
import { templatesSlice } from "./slices/templateSlice";

export const store = configureStore({
    reducer: {
        templates: templatesSlice.reducer,
    },
});
