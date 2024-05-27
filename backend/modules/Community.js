import supabase from '../config/supabaseClient.js';

// Select all communities
export const getAllCommunities = async (req, res) => {
    const { data, error } = await supabase
        .from('Community')
        .select('id, name');
    res.send({ data, error });
}

// Select community by id
export const getCommunityById = async (req, res) => {
    const id = req.params.id
    const { data, error } = await supabase
        .from('Community')
        .select('id, name')
        .eq('id', id);
    res.send({ data, error });
}

// Insert community
export const insertCommunity = async (req, res) => {
    const name = req.body.name
    const { data, error } = await supabase
        .from('Community')
        .insert([{ name }])
        .select('id');
    res.send({ data, error });
}

// Update community by id
export const updateCommunity = async (req, res) => {
    const name = req.body.name
    const id = req.body.id
    const { data, error } = await supabase
        .from('Community')
        .update({ name })
        .eq('id', id);
    res.send({ data, error });
}

// Delete community by id
export const deleteCommunity = async (req, res) => {
    const id = req.body.id
    const { data, error } = await supabase
        .from('Community')
        .delete()
        .eq('id', id);
    res.send({ data, error });
}
