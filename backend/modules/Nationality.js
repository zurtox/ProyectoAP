import supabase from '../src/config/supabaseClient.js';

// Select all Nationality entries
export async function getAllNationalities() {
    const { data, error } = await supabase
        .from('Nationality')
        .select('*');
    return { data, error };
}

// Select Nationality by id
export async function getNationalityById(id) {
    const { data, error } = await supabase
        .from('Nationality')
        .select('*')
        .eq('id', id);
    return { data, error };
}

// Insert Nationality
export async function insertNationality(name) {
    const { data, error } = await supabase
        .from('Nationality')
        .insert([{ name }]);
    return { data, error };
}

// Update Nationality by id
export async function updateNationality(id, name) {
    const { data, error } = await supabase
        .from('Nationality')
        .update({ name })
        .eq('id', id);
    return { data, error };
}

// Delete Nationality by id
export async function deleteNationality(id) {
    const { data, error } = await supabase
        .from('Nationality')
        .delete()
        .eq('id', id);
    return { data, error };
}
