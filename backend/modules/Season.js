import supabase from '../src/config/supabaseClient.js';

// Select all Season entries
export async function getAllSeasons() {
    const { data, error } = await supabase
        .from('Season')
        .select('*');
    return { data, error };
}

// Select Season by id
export async function getSeasonById(id) {
    const { data, error } = await supabase
        .from('Season')
        .select('*')
        .eq('id', id);
    return { data, error };
}

// Insert Season
export async function insertSeason(number, serie) {
    const { data, error } = await supabase
        .from('Season')
        .insert([{ number, serie }]);
    return { data, error };
}

// Update Season by id
export async function updateSeason(id, number, serie) {
    const { data, error } = await supabase
        .from('Season')
        .update({ number, serie })
        .eq('id', id);
    return { data, error };
}

// Delete Season by id
export async function deleteSeason(id) {
    const { data, error } = await supabase
        .from('Season')
        .delete()
        .eq('id', id);
    return { data, error };
}
