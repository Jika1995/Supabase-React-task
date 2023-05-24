import { createSlice } from '@reduxjs/toolkit';

export const templatesSlice = createSlice({
    name: "templatesSlice",
    initialState: [],
    reducers: {
        addTemplate: (state, action) => {
            state.push(action.payload);
        },
        deleteTemplate: (state, action) => {
            state = state.filter(item => item.id !== action.payload)
        },
        toggleTemplate: (state, action) => {
            let templateToFind = state.find(item => item.id === action.payload.id)

            return state.map((template) => {
                if (template !== templateToFind) return template

                return {
                    ...template,
                    font: template.font,
                    font_size: template.font_size,
                    html_export: template.html_export,
                    name: template.name,
                    author: template.author
                }
            })
        },
        getOneTemplate: (state, action) => {
            let templateToFind = state.find((item) => item.id === action.payload)
            return templateToFind
        },
    }

})

export const { addTemplate, deleteTemplate, toggleTemplate, getOneTemplate } = templatesSlice.actions

