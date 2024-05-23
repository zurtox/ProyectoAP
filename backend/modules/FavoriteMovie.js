import supabase from '../config/supabaseClient.js';

// Select all FavoriteMovie Movie by user
export async function getAllFavoriteMovies(user) {
    const { data, error } = await supabase
        .from('FavoriteMovie')
        .select('*')
        .eq('user', user);
    return { data, error };
}

// Insert FavoriteMovie
export async function insertFavoriteMovie(user, content) {
    const { data, error } = await supabase
        .from('FavoriteMovie')
        .insert([{ user, content }]);
    return { data, error };
}

// Delete FavoriteMovie by id
export async function deleteFavoriteMovie(user, content) {
    const { data, error } = await supabase
        .from('FavoriteMovie')
        .delete()
        .eq('user', user)
        .eq('content', content);
    return { data, error };
}