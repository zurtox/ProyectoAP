import supabase from '../config/supabaseClient.js';

// Get episode by ID
export async function getEpisodeById(id) {
    const { data, error } = await supabase
        .from('Episode')
        .select('id, number, title, duration, season')
        .eq('id', id);
    return { data, error };
}

// Get all episodes by season
export async function getEpisodesBySeason(id) {
    const { data, error } = await supabase
        .from('Episode')
        .select('id, number, title, duration, season')
        .eq('season', id);
    return { data, error };
}

// Insert Episode
export async function insertEpisode({number, title, duration, season}) {
    const { data, error } = await supabase
        .from('Episode')
        .insert([{ number, title, duration, season }])
        .select('id');
    
    return { data, error };
}

// Update Episode by id
export async function updateEpisode(id, {number, title, duration, season}) {
    const { data, error } = await supabase
        .from('Episode')
        .update({ number, title, duration, season })
        .eq('id', id)
        .select('id');
    return { data, error };
}

// Delete Episode by id
export async function deleteEpisode(id) {
    const { data, error } = await supabase
        .from('Episode')
        .delete()
        .eq('id', id)
        .select('id');
    return { data, error };
}

export async function deleteEpisodeSeason(id) {
    const { data, error } = await supabase
        .from('Episode')
        .delete()
        .eq('season', id);
    return { data, error };
}
