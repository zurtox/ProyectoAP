import supabase from '../config/supabaseClient.js';

// Select all Documental entries
export async function getAllDocumentals() {
    const { data, error } = await supabase
        .from('Documental')
        .select('*');
    return { data, error };
}

// Select Documental by id
export async function getDocumentalById(id) {
    const { data, error } = await supabase
        .from('Documental')
        .select('*')
        .eq('id', id);
    return { data, error };
}

// Insert Documental
export async function insertDocumental({content}) {
    const { data, error } = await supabase
        .from('Documental')
        .insert([{ content }]);
    return { data, error };
}

// Update Documental by id
export async function updateDocumental(id, {content}) {
    const { data, error } = await supabase
        .from('Documental')
        .update({ content })
        .eq('id', id);
    return { data, error };
}

// Delete Documental by id
export async function deleteDocumental(id) {
    const { data, error } = await supabase
        .from('Documental')
        .delete()
        .eq('id', id);
    return { data, error };
}
