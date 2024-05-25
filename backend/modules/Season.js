import supabase from '../config/supabaseClient.js';
import { deleteEpisodeSeason } from './Episode.js';

// Select all Season entries
export async function getAllSeasons() {
    const { data, error } = await supabase
        .from('Season')
        .select('*');
    return { data, error };
}

// Select Season by id
export async function getSeasonById(id) {
    const { data, error } = await supabase
        .from('Season')
        .select('*')
        .eq('id', id);
    return { data, error };
}

async function deleteSeason(id) {
    const { data, error } = await supabase
        .from('Season')
        .delete()
        .eq('id', id);
    return { data, error };
}

export async function deleteSeasonDocumental(id) {
    const { data, error } = await supabase
        .from('Season')
        .select('id')
        .eq('documental', id);


    console.log("Seasons to delete:")
    data.forEach(item => {
        deleteEpisodeSeason(item.id);

        deleteSeason(item.id);
    });
    console.log("End")

    return { data, error };
}

// Insert Season
export async function insertSeason({ number, serie, documental }) {
    const { data, error } = await supabase
        .from('Season')
        .insert([{ number, serie, documental }]);
    return { data, error };
}

// Update Season by id
export async function updateSeason( id, {number, serie, documental }) {
    const { data, error } = await supabase
        .from('Season')
        .update({ number, serie, documental })
        .eq('id', id);
    return { data, error };
}