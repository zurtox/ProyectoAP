import supabase from '../config/supabaseClient.js';

// Select all Episode entries
export async function getAllEpisodes() {
    const { data, error } = await supabase
        .from('Episode')
        .select('*');
    return { data, error };
}

// Select Episode by id
export async function getEpisodeById(id) {
    const { data, error } = await supabase
        .from('Episode')
        .select('*')
        .eq('id', id);
    return { data, error };
}

// Insert Episode
export async function insertEpisode({number, title, duration, season}) {
    const { data, error } = await supabase
        .from('Episode')
        .insert([{ number, title, duration, season }]);
    return { data, error };
}

// Update Episode by id
export async function updateEpisode(id, {number, title, duration, season}) {
    const { data, error } = await supabase
        .from('Episode')
        .update({ number, title, duration, season })
        .eq('id', id);
    return { data, error };
}

// Delete Episode by id
export async function deleteEpisode(id) {
    const { data, error } = await supabase
        .from('Episode')
        .delete()
        .eq('id', id);
    return { data, error };
}
