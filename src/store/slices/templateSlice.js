import { createSlice } from '@reduxjs/toolkit';

const data = [];

export const templatesSlice = createSlice({
    name: "templatesSlice",
    initialState: data,
    reducers: {
        addTemplate: (state, action) => {
            state.data.push(action.payload);
        },
        deleteTemplate: (state, action) => {
            state.data = state.data.filter(item => item.id != action.payload)
        },
        toggleTemplate(state, action) {
            let templateToFind = state.data.find(item => item.id === action.payload.id)

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
        }
    }
})

export const { addTemplate, deleteTemplate, toggleTemplate } = templatesSlice.actions

