import supabase from '../config/supabaseClient.js';

// Select all Movie entries
export async function getAllMovies() {
    const { data, error } = await supabase
        .from('Movie')
        .select('*');
    return { data, error };
}

// Select Movie by id
export async function getMovieById(id) {
    const { data, error } = await supabase
        .from('Movie')
        .select('*')
        .eq('id', id);
    return { data, error };
}

// Insert Movie
export async function insertMovie(content, duration) {
    const { data, error } = await supabase
        .from('Movie')
        .insert([{ content, duration }]);
    return { data, error };
}

// Update Movie by id
export async function updateMovie(id, content, duration) {
    const { data, error } = await supabase
        .from('Movie')
        .update({ content, duration })
        .eq('id', id);
    return { data, error };
}

// Delete Movie by id
export async function deleteMovie(id) {
    const { data, error } = await supabase
        .from('Movie')
        .delete()
        .eq('id', id);
    return { data, error };
}
