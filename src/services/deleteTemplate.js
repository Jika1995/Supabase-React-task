// delete function

import { supabase } from "../lib/supabase";

export const removeTemplate = async (templateId) => {
    let { error } = await supabase
        .from('templates')
        .delete()
        .eq('id', templateId)
    if (error) {
        return alert(`${error.message}`)
    }
}