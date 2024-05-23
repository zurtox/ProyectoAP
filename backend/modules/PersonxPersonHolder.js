import supabase from '../config/supabaseClient.js';

// Select all PersonxHolder entries
export async function getAllPersonxHolder() {
    const { data, error } = await supabase
        .from('PersonxPersonHolder')
        .select('*');
    return { data, error };
}

// Select PersonxHolder by id
export async function getPersonxHolderById(id) {
    const { data, error } = await supabase
        .from('PersonxPersonHolder')
        .select('*')
        .eq('id', id);
    return { data, error };
}

// Insert PersonxHolder
export async function insertPersonxHolder(person, personHolder, relationshipType) {
    const { data, error } = await supabase
        .from('PersonxPersonHolder')
        .insert([{ person, personHolder, relationshipType }]);
    return { data, error };
}

// Update PersonxHolder by id
export async function updatePersonxHolder(id, person, personHolder, relationshipType) {
    const { data, error } = await supabase
        .from('PersonxPersonHolder')
        .update({ person, personHolder, relationshipType })
        .eq('id', id);
    return { data, error };
}

// Delete PersonxHolder by id
export async function deletePersonxHolder(id) {
    const { data, error } = await supabase
        .from('PersonxPersonHolder')
        .delete()
        .eq('id', id);
    return { data, error };
}
