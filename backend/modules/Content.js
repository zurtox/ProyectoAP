import supabase from '../config/supabaseClient.js';

// Select all content
export async function getAllContent() {
    const { data, error } = await supabase
        .from('Content')
        .select('*');
    return { data, error };
}

// Select content by id
export async function getContentById(id) {
    const { data, error } = await supabase
        .from('Content')
        .select('*')
        .eq('id', id);
    return { data, error };
}

// Insert content
export async function insertContent({ title, publishYear, category, trailer, synopsis, price }) {
    const { data, error } = await supabase
        .from('Content')
        .insert([{ title, publishYear, category, trailer, synopsis, price }]);
    return { data, error };
}

// Update content by id
export async function updateContent(id, { title, publishYear, category, trailer, synopsis, price }) {
    const { data, error } = await supabase
        .from('Content')
        .update({ title, publishYear, category, trailer, synopsis, price })
        .eq('id', id);
    return { data, error };
}

// Delete content by id
export async function deleteContent(id) {
    const { data, error } = await supabase
        .from('Content')
        .delete()
        .eq('id', id);
    return { data, error };
}

// Activate Content
export async function activateContent(id) {
    const { data, error } = await supabase
        .from('Content')
        .update({ active: true })
        .eq('id', id);
    return { data, error };
}

// Deactivate Content
export async function deactivateContent(id) {
    const { data, error } = await supabase
        .from('Content')
        .update({ active: false })
        .eq('id', id);
    return { data, error };
}