import supabase from '../config/supabaseClient.js';
import { getContentById, insertContent, updateContent, deleteContent } from './Content.js';

// Select all Movie entries
export const getAllMovies = async (req, res) => {
    const { data, error } = await supabase
        .from('Movie')
        .select('id, content, duration');

    if (data === null || data.length === 0) {
        return res.send({ data: [], error });
    }

    let contentData = [];

    for (const item of data) {
        const { data, error } = await supabase
        .from('Content')
        .select('id, title, category, trailer, synopsis, price, publishYear, active')
        .eq('id', item.content);
        contentData.push(data[0]);
    }

    console.log(contentData)

    res.send({ data: contentData, error });
};

// Select Movie by id
export const getMovieById = async (req, res) => {
    const { id } = req.params;
    const { data, error } = await supabase
        .from('Movie')
        .select('id, content, duration')
        .eq('id', id);

    if (data === null || data.length === 0) {
        return res.send({ data: [], error });
    }

    const { data: contentData, error: contentError } = await getContentById(data[0].content);

    res.send({ data: contentData, movie: data, error: contentError });
};

// Insert Movie
export const insertMovie = async (req, res) => {
    const { title, publishYear, category, trailer, synopsis, price, duration, photo } = req.body;
    const { data, error } = await insertContent({ title, publishYear, category, trailer, synopsis, price, photo });

    if (error) {
        return res.send({ data: null, error });
    }

    const contentId = data[0].id;

    const { data: dataMovie, error: errorMovie } = await supabase
        .from('Movie')
        .insert([{ content: contentId, duration }])
        .select('id');

    res.send({ data: dataMovie, error: errorMovie });
};

// Update Movie by id
export const updateMovie = async (req, res) => {
    const { id } = req.params;
    const { title, publishYear, category, trailer, synopsis, price, duration } = req.body;
    const { data, error } = await supabase
        .from('Movie')
        .update({ duration })
        .eq('id', id)
        .select('content');

    if (data === null || data.length === 0) {
        return res.send({ data: [], error });
    }

    const contentId = data[0].content;

    const { data: contentData, error: contentError } = await updateContent(contentId, { title, publishYear, category, trailer, synopsis, price });

    res.send({ contentData, error: contentError });
};

// Delete Movie by id
export const deleteMovie = async (req, res) => {
    const { id } = req.params;
    const { data: itemsToDelete, error: selectError } = await supabase
        .from('Movie')
        .select('id, content')
        .eq('id', id);

    if (itemsToDelete && itemsToDelete.length === 0) {
        return res.send({ data: null, error: selectError });
    }

    const { data, error } = await supabase
        .from('Movie')
        .delete()
        .eq('id', id)
        .select('id');

    if (data === null || data.length === 0) {
        return res.send({ data: null, error });
    }

    const contentId = itemsToDelete[0].content;

    const { data: dataContent, error: errorContent } = await deleteContent(contentId);

    res.send({ data: dataContent, error: errorContent });
};
