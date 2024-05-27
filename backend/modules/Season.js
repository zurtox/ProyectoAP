import supabase from '../config/supabaseClient.js';
import { deleteEpisodeSeason } from './Episode.js';

// Select all Season entries
export const getAllSeasons = async (req, res) => {
    const { data, error } = await supabase
        .from('Season')
        .select('id, serie, documental, number');
    res.send({ data, error });
};

// Select Season by id
export const getSeasonById = async (req, res) => {
    const { id } = req.params;
    const { data, error } = await supabase
        .from('Season')
        .select('id, serie, documental, number')
        .eq('id', id);
    res.send({ data, error });
};

// Delete Season by documental id
export const deleteSeasonDocumental = async (req, res) => {
    const { id } = req.params;
    const { data, error } = await supabase
        .from('Season')
        .select('id')
        .eq('documental', id);

    console.log("Seasons to delete:");
    data.forEach(async (item) => {
        await deleteEpisodeSeason(item.id);
        await deleteSeason(item.id);
    });

    res.send({ data, error });
};

// Delete Season by serie id
export const deleteSeasonSerie = async (req, res) => {
    const { id } = req.params;
    const { data, error } = await supabase
        .from('Season')
        .select('id')
        .eq('serie', id);

    console.log("Seasons to delete:");
    data.forEach(async (item) => {
        await deleteEpisodeSeason(item.id);
        await deleteSeason(item.id);
    });

    res.send({ data, error });
};

// Insert Season
export const insertSeason = async (req, res) => {
    const { number, serie, documental } = req.body;
    const { data, error } = await supabase
        .from('Season')
        .insert([{ number, serie, documental }]);
    res.send({ data, error });
};

// Update Season by id
export const updateSeason = async (req, res) => {
    const { id } = req.params;
    const { number } = req.body;
    const { data, error } = await supabase
        .from('Season')
        .update({ number })
        .eq('id', id);
    res.send({ data, error });
};

// Helper function to delete a season by id
const deleteSeason = async (id) => {
    const { data, error } = await supabase
        .from('Season')
        .delete()
        .eq('id', id);
    return { data, error };
};
