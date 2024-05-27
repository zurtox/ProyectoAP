import supabase from '../config/supabaseClient.js';
import { getContentById, insertContent, updateContent, deleteContent} from './Content.js';

// Select all Movie entries
export async function getAllMovies() {
    const { data, error } = await supabase
        .from('Movie')
        .select('id, content, duration');

    if (data === null || data.length === 0) {
        return { data: [], error };
    }

    let contentData = [];

    for (const item of data) {
        const content = await getContentById(item.content);
        contentData.push(content.data[0]);
    }

    return { data: contentData, movie: data, error };
}

// Select Movie by id
export async function getMovieById(id) {
    const { data, error } = await supabase
        .from('Movie')
        .select('id, content, duration')
        .eq('id', id);

    if (data === null || data.length === 0) {
        return { data: [], error };
    }

    const { data: contentData, error: contentError } = await getContentById(data[0].content);

    return { data: contentData, movie: data, error: contentError };
}

// Insert Movie
export async function insertMovie({ title, publishYear, category, trailer, synopsis, price, duration }) {
    const {data, error} = await insertContent({ title, publishYear, category, trailer, synopsis, price });

    const contentId = data[0].id;

    const { data: dataDocument, error: errorDocument } = await supabase
        .from('Movie')
        .insert([{ content: contentId, duration }])
        .select('id');

    return { dataDocument, errorDocument };
}

// Update Movie by id
export async function updateMovie(id, { title, publishYear, category, trailer, synopsis, price, duration }) {
    const { data, error } = await supabase
        .from('Movie')
        .update({duration})
        .eq('id', id)
        .select('content');

    if (data === null || data.length === 0) {
        return { data: [], error };
    }

    const contentId = data[0].content;

    const { data: contentData, error: contentError} =  await updateContent(contentId, { title, publishYear, category, trailer, synopsis, price });
    
    return { contentData, contentError };
}

// Delete Movie by id
export async function deleteMovie(id) {
    const { data: itemsToDelete, error: selectError } = await supabase
        .from('Movie')
        .select('id, content')
        .eq('id', id);

    if (itemsToDelete && itemsToDelete.length == 0) {
        return { data: null, error: selectError };
    }

    const { data, error } = await supabase
        .from('Movie')
        .delete()
        .eq('id', id)
        .select('id');

    if (itemsToDelete && itemsToDelete.length == 0) {
        return { data: null, error: error };
    }

    const contentId = itemsToDelete[0].content;

    const { data: dataContent, error: errorContent } = await deleteContent(contentId);

    return { data: dataContent, error: errorContent };
}
