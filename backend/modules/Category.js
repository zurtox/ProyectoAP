import supabase from '../config/supabaseClient.js';

// Select all categories
export const getAllCategories = async(req, res) => {
    const { data, error } = await supabase
        .from('Category')
        .select('id, name');
    res.send({ data, error });
}

// Select category by id
export const getCategoryById = async(req, res) => {
    const id = req.params.id
    const { data, error } = await supabase
        .from('Category')
        .select('id, name')
        .eq('id', id);
    res.send({ data, error });
}

// Insert category
export const insertCategory = async(req, res) => {
    const name = req.body.name
    const { data, error } = await supabase
        .from('Category')
        .insert([{ name }])
        .select('id');
    res.send({ data, error });
}

// Update category by id
export const updateCategory = async(req, res) => {
    const name = req.body.name
    const id = req.body.id
    const { data, error } = await supabase
        .from('Category')
        .update({ name })
        .eq('id', id);
    res.send({ data, error });
}

// Delete category by id
export const deleteCategory = async(req, res) => {
    const id = req.body.id
    const { data, error } = await supabase
        .from('Category')
        .delete()
        .eq('id', id);
    res.send({ data, error });
}
