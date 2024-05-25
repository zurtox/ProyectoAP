import supabase from '../config/supabaseClient.js';
import { getContentById, insertContent, updateContent, deleteContent} from './Content.js';
import { deleteSeasonSerie } from './Season.js';

// Select all Serie entries
export async function getAllSeries() {
    const { data, error } = await supabase
        .from('Serie')
        .select('id, content');

    if (data === null || data.length === 0) {
        return { data: [], error };
    }

    let contentData = [];

    for (const item of data) {
        const content = await getContentById(item.content);
        contentData.push(content.data[0]);
    }

    return { data: contentData, documental: data, error };
}

// Select Serie by id
export async function getSerieById(id) {
    const { data, error } = await supabase
        .from('Serie')
        .select('id, content')
        .eq('id', id);

    if (data === null || data.length === 0) {
        return { data: [], error };
    }

    const { data: contentData, error: contentError } = await getContentById(data[0].content);

    return { data: contentData, documental: data, error: contentError };
}

// Insert Serie
export async function insertSerie({ title, publishYear, category, trailer, synopsis, price }) {
    const {data, error} = await insertContent({ title, publishYear, category, trailer, synopsis, price });

    const contentId = data[0].id;

    const { data: dataDocument, error: errorDocument } = await supabase
        .from('Serie')
        .insert([{ content: contentId }])
        .select('id');

    return { dataDocument, errorDocument };
}

// Update Serie by id
export async function updateSerie(id, { title, publishYear, category, trailer, synopsis, price }) {
    const { data, error } = await supabase
        .from('Serie')
        .select('content')
        .eq('id', id);

    if (data === null || data.length === 0) {
        return { data: [], error };
    }

    const contentId = data[0].content;

    const { data: contentData, error: contentError} =  await updateContent(contentId, { title, publishYear, category, trailer, synopsis, price });
    
    return { contentData, contentError };
}

// Delete Serie by id
export async function deleteSerie(id) {
    const { data: itemsToDelete, error: selectError } = await supabase
        .from('Serie')
        .select('id, content')
        .eq('id', id);

    if (itemsToDelete && itemsToDelete.length == 0) {
        return { data: null, error: selectError };
    }

    await deleteSeasonSerie(itemsToDelete[0].id);

    const { data, error } = await supabase
        .from('Documental')
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
