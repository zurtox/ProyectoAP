import supabase from '../src/config/supabaseClient.js';

// Select all Platform entries
export async function getAllPlatforms() {
    const { data, error } = await supabase
        .from('Platform')
        .select('*');
    return { data, error };
}

// Select Platform by id
export async function getPlatformById(id) {
    const { data, error } = await supabase
        .from('Platform')
        .select('*')
        .eq('id', id);
    return { data, error };
}

// Insert Platform
export async function insertPlatform(name) {
    const { data, error } = await supabase
        .from('Platform')
        .insert([{ name }]);
    return { data, error };
}

// Update Platform by id
export async function updatePlatform(id, name) {
    const { data, error } = await supabase
        .from('Platform')
        .update({ name })
        .eq('id', id);
    return { data, error };
}

// Delete Platform by id
export async function deletePlatform(id) {
    const { data, error } = await supabase
        .from('Platform')
        .delete()
        .eq('id', id);
    return { data, error };
}
