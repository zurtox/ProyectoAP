import supabase from '../config/supabaseClient.js';

// Select all Serie entries
export async function getAllSeries() {
    const { data, error } = await supabase
        .from('Serie')
        .select('*');
    return { data, error };
}

// Select Serie by id
export async function getSerieById(id) {
    const { data, error } = await supabase
        .from('Serie')
        .select('*')
        .eq('id', id);
    return { data, error };
}

// Insert Serie
export async function insertSerie({content}) {
    const { data, error } = await supabase
        .from('Serie')
        .insert([{ content }]);
    return { data, error };
}

// Update Serie by id
export async function updateSerie(id, {content}) {
    const { data, error } = await supabase
        .from('Serie')
        .update({ content })
        .eq('id', id);
    return { data, error };
}

// Delete Serie by id
export async function deleteSerie(id) {
    const { data, error } = await supabase
        .from('Serie')
        .delete()
        .eq('id', id);
    return { data, error };
}
