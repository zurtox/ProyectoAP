import supabase from '../config/supabaseClient.js';
import { getContentById, insertContent, updateContent, deleteContent} from './Content.js';
import { deleteSeasonDocumental } from './Season.js';

// Select all Documental entries
export async function getAllDocumentals() {
    const { data, error } = await supabase
        .from('Documental')
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

// Select Documental by id
export async function getDocumentalById(id) {
    const { data, error } = await supabase
        .from('Documental')
        .select('id, content')
        .eq('id', id);

    if (data === null || data.length === 0) {
        return { data: [], error };
    }

    const { data: contentData, error: contentError } = await getContentById(data[0].content);

    return { data: contentData, documental: data, error: contentError };
}

// Insert Documental
export async function insertDocumental({ title, publishYear, category, trailer, synopsis, price }) {
    const {data, error} = await insertContent({ title, publishYear, category, trailer, synopsis, price });

    const contentId = data[0].id;

    const { data: dataDocument, error: errorDocument } = await supabase
        .from('Documental')
        .insert([{ content: contentId }])
        .select('id');

    return { dataDocument, errorDocument };
}

// Update Documental by id
export async function updateDocumental(id, { title, publishYear, category, trailer, synopsis, price }) {
    const { data, error } = await supabase
        .from('Documental')
        .select('content')
        .eq('id', id);

    if (data === null || data.length === 0) {
        return { data: [], error };
    }

    const contentId = data[0].content;

    const { data: contentData, error: contentError} =  await updateContent(contentId, { title, publishYear, category, trailer, synopsis, price });
    
    return { contentData, contentError };
}

// Delete Documental by id
export async function deleteDocumental(id) {
    const { data: itemsToDelete, error: selectError } = await supabase
        .from('Documental')
        .select('id, content')
        .eq('id', id);

    if (itemsToDelete && itemsToDelete.length == 0) {
        return { data: null, error: selectError };
    }

    await deleteSeasonDocumental(itemsToDelete[0].id);

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
