import supabase from '../config/supabaseClient.js';
import { actualUserId } from './User.js';

// Select all FavoriteMovie entries by user
export const getAllFavoriteMovies = async (req, res) => {
    const userF = await actualUserId(); 

    if (userF.data == null) {
        return res.send({ data: null, error: userF.error });
    }

    const user = userF.data[0].id;

    const { data, error } = await supabase
        .from('FavoriteMovie')
        .select('content')
        .eq('user', user);
    res.send({ data, error });
};

// Insert or Remove FavoriteMovie
export const updateFavorite = async (req, res) => {
    const { content } = req.body;
    const userF = await actualUserId(); 

    if (userF.data == null) {
        return res.send({ data: null, error: userF.error });
    }

    const user = userF.data[0].id;

    const { data: existingData, error: existingError } = await supabase
        .from('FavoriteMovie')
        .select('*')
        .eq('user', user)
        .eq('content', content);

    if (existingData && existingData.length > 0) {
        const { data: dataDelete, error: errorDelete } = await supabase
            .from('FavoriteMovie')
            .delete()
            .eq('user', user)
            .eq('content', content);

        return res.send({ data: dataDelete, error: errorDelete });
    }

    const { data, error } = await supabase
        .from('FavoriteMovie')
        .insert([{ user, content }]);

    res.send({ data, error });
};

// Is content a user favorite?
export const isFavorite = async (req, res) => {
    const { content } = req.body;
    const userF = await actualUserId(); 

    if (userF.data == null) {
        return res.send({ data: null, error: userF.error });
    }

    const user = userF.data[0].id;

    const { data, error } = await supabase
        .from('FavoriteMovie')
        .select('content')
        .eq('user', user)
        .eq('content', content);

    res.send({ isFavorite: data.length > 0, error });
};
