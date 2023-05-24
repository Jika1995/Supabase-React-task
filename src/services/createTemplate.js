// create function
import { supabase } from "../lib/supabase";

export const createTemplate = async (newTemplate) => {

    let { error } = await supabase
        .from('templates')
        .insert(newTemplate)
        .select()
        .single();
    if (error) {
        return alert(`${error.message}`)
    }
}