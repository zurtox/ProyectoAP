import supabase from '../config/supabaseClient.js';

// Get episode by ID
export const getEpisodeById = async (req, res) => {
    const { id } = req.params;
    const { data, error } = await supabase
        .from('Episode')
        .select('id, number, title, duration, season')
        .eq('id', id);
    res.send({ data, error });
};

// Get all episodes by season
export const getEpisodesBySeason = async (req, res) => {
    const { id } = req.params;
    const { data, error } = await supabase
        .from('Episode')
        .select('id, number, title, duration, season')
        .eq('season', id);
    res.send({ data, error });
};

// Insert Episode
export const insertEpisode = async (req, res) => {
    const { number, title, duration, season } = req.body;
    const { data, error } = await supabase
        .from('Episode')
        .insert([{ number, title, duration, season }])
        .select('id');
    res.send({ data, error });
};

// Update Episode by id
export const updateEpisode = async (req, res) => {
    const { id } = req.params;
    const { number, title, duration, season } = req.body;
    const { data, error } = await supabase
        .from('Episode')
        .update({ number, title, duration, season })
        .eq('id', id)
        .select('id');
    res.send({ data, error });
};

// Delete Episode by id
export const deleteEpisode = async (req, res) => {
    const { id } = req.params;
    const { data, error } = await supabase
        .from('Episode')
        .delete()
        .eq('id', id)
        .select('id');
    res.send({ data, error });
};

// Delete all episodes by season id
export const deleteEpisodeSeason = async (req, res) => {
    const { id } = req.params;
    const { data, error } = await supabase
        .from('Episode')
        .delete()
        .eq('season', id);
    res.send({ data, error });
};
