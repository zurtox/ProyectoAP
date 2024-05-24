import supabase from '../config/supabaseClient.js';

// Select all MovieParticipant entries
export async function getAllMovieParticipants() {
    const { data, error } = await supabase
        .from('MovieParticipant')
        .select('*');
    return { data, error };
}

// Select MovieParticipant by id
export async function getMovieParticipantById(id) {
    const { data, error } = await supabase
        .from('MovieParticipant')
        .select('*')
        .eq('id', id);
    return { data, error };
}

// Insert MovieParticipant
export async function insertMovieParticipant({person, content, role}) {
    const { data, error } = await supabase
        .from('MovieParticipant')
        .insert([{ person, content, role }]);
    return { data, error };
}

// Update MovieParticipant by id
export async function updateMovieParticipant(id, {person, content, role}) {
    const { data, error } = await supabase
        .from('MovieParticipant')
        .update({ person, content, role })
        .eq('id', id);
    return { data, error };
}

// Delete MovieParticipant by id
export async function deleteMovieParticipant(id) {
    const { data, error } = await supabase
        .from('MovieParticipant')
        .delete()
        .eq('id', id);
    return { data, error };
}
