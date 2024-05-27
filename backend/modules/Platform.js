import supabase from '../config/supabaseClient.js';

// Select all Platform entries
export const getAllPlatforms = async (req, res) => {
    const { data, error } = await supabase
        .from('Platform')
        .select('id, name');
    res.send({ data, error });
};

// Select Platform by id
export const getPlatformById = async (req, res) => {
    const { id } = req.params;
    const { data, error } = await supabase
        .from('Platform')
        .select('id, name')
        .eq('id', id);
    res.send({ data, error });
};

// Insert Platform
export const insertPlatform = async (req, res) => {
    const { name } = req.body;
    const { data, error } = await supabase
        .from('Platform')
        .insert([{ name }]);
    res.send({ data, error });
};

// Update Platform by id
export const updatePlatform = async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    const { data, error } = await supabase
        .from('Platform')
        .update({ name })
        .eq('id', id);
    res.send({ data, error });
};

// Delete Platform by id
export const deletePlatform = async (req, res) => {
    const { id } = req.params;
    const { data, error } = await supabase
        .from('Platform')
        .delete()
        .eq('id', id);
    res.send({ data, error });
};
