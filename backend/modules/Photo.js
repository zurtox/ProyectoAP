import supabase from '../config/supabaseClient.js';

// Select all Photo entries
export async function getAllPhotos() {
    const { data, error } = await supabase
        .from('Photo')
        .select('id, name');
    return { data, error };
}

// Select Photo by id
export async function getPhotoById(id) {
    const { data, error } = await supabase
        .from('Photo')
        .select('id, name')
        .eq('id', id);
    return { data, error };
}

// Insert Photo
export async function insertPhoto({name}) {
    const { data, error } = await supabase
        .from('Photo')
        .insert([{ name }]);
    return { data, error };
}

// Update Photo by id
export async function updatePhoto(id, {name}) {
    const { data, error } = await supabase
        .from('Photo')
        .update({ name })
        .eq('id', id);
    return { data, error };
}

// Delete Photo by id
export async function deletePhoto(id) {
    const { data, error } = await supabase
        .from('Photo')
        .delete()
        .eq('id', id);
    return { data, error };
}
