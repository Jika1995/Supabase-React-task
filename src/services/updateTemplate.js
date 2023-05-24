// update function

import { supabase } from "../lib/supabase";

export const updateTemplate = async (editedTemplate) => {
    let { error } = await supabase
        .from('templates')
        .update(editedTemplate)
        .eq('id', editedTemplate.id)
        .select()
        .single();
    if (error) {
        return alert('error')
    }
}