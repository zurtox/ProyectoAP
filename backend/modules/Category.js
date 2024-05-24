import supabase from '../config/supabaseClient.js';

// Select all categories
export async function getAllCategories() {
    const { data, error } = await supabase
        .from('Category')
        .select('*');
    return { data, error };
}

// Select category by id
export async function getCategoryById(id) {
    const { data, error } = await supabase
        .from('Category')
        .select('*')
        .eq('id', id);
    return { data, error };
}

// Insert category
export async function insertCategory({name}) {
    const { data, error } = await supabase
        .from('Category')
        .insert([{ name }]);
    return { data, error };
}

// Update category by id
export async function updateCategory(id, {name}) {
    const { data, error } = await supabase
        .from('Category')
        .update({ name })
        .eq('id', id);
    return { data, error };
}

// Delete category by id
export async function deleteCategory(id) {
    const { data, error } = await supabase
        .from('Category')
        .delete()
        .eq('id', id);
    return { data, error };
}
