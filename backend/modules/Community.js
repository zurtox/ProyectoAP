import supabase from '../config/supabaseClient.js';

// Select all communities
export async function getAllCommunities() {
    const { data, error } = await supabase
        .from('Community')
        .select('id, name');
    return { data, error };
}

// Select community by id
export async function getCommunityById(id) {
    const { data, error } = await supabase
        .from('Community')
        .select('id, name')
        .eq('id', id);
    return { data, error };
}

// Insert community
export async function insertCommunity({name}) {
    const { data, error } = await supabase
        .from('Community')
        .insert([{ name }])
        .select('id');
    return { data, error };
}

// Update community by id
export async function updateCommunity(id, {name}) {
    const { data, error } = await supabase
        .from('Community')
        .update({ name })
        .eq('id', id);
    return { data, error };
}

// Delete community by id
export async function deleteCommunity(id) {
    const { data, error } = await supabase
        .from('Community')
        .delete()
        .eq('id', id);
    return { data, error };
}
