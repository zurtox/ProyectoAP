import supabase from '../config/supabaseClient.js';

import { actualUserId } from './User.js';

// Select all FavoriteMovie Movie by user
export async function getAllFavoriteMovies() {
    const userF = await actualUserId(); 

    if (userF.data == null) {
        return { data: null, error: userF.error };
    }

    const user = userF.data[0].id;

    const { data, error } = await supabase
        .from('FavoriteMovie')
        .select('content')
        .eq('user', user);
    return { data, error };
}

// Insert FavoriteMovie
export async function updateFavorite({content}) {
    const userF = await actualUserId(); 

    if (userF.data == null) {
        return { data: null, error: userF.error };
    }

    const user = userF.data[0].id;

    const { data: existingData, error: existingError } = await supabase
        .from('FavoriteMovie')
        .select('*')
        .eq('user', user)
        .eq('content', content);

    if (existingData.length > 0) {
        const { dataDelete, errorDelete } = await supabase
            .from('FavoriteMovie')
            .delete()
            .eq('user', user)
            .eq('content', content);

        return { data: dataDelete, error: errorDelete };
    }

    const { data, error } = await supabase
        .from('FavoriteMovie')
        .insert([{ user, content }]);

    return { data, error };
}

// Is content a use favorite? 
export async function isFavorite({content}) {
    const userF = await actualUserId(); 

    if (userF.data == null) {
        return { data: null, error: userF.error };
    }

    const user = userF.data[0].id;

    const { data, error } = await supabase
        .from('FavoriteMovie')
        .select('content')
        .eq('user', user)
        .eq('content', content);

    return data.length > 0;
}