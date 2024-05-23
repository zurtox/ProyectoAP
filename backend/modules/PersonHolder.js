import supabase from '../src/config/supabaseClient.js';

// Select all PersonHolder entries
export async function getAllPersonHolders() {
    const { data, error } = await supabase
        .from('PersonHolder')
        .select('*');
    return { data, error };
}

// Select PersonHolder by id
export async function getPersonHolderById(id) {
    const { data, error } = await supabase
        .from('PersonHolder')
        .select('*')
        .eq('id', id);
    return { data, error };
}

// Insert PersonHolder
export async function insertPersonHolder(firstName, secondName, firstLastName, secondLastName) {
    const { data, error } = await supabase
        .from('PersonHolder')
        .insert([{ firstName, secondName, firstLastName, secondLastName }]);
    return { data, error };
}

// Update PersonHolder by id
export async function updatePersonHolder(id, firstName, secondName, firstLastName, secondLastName) {
    const { data, error } = await supabase
        .from('PersonHolder')
        .update({ firstName, secondName, firstLastName, secondLastName })
        .eq('id', id);
    return { data, error };
}

// Delete PersonHolder by id
export async function deletePersonHolder(id) {
    const { data, error } = await supabase
        .from('PersonHolder')
        .delete()
        .eq('id', id);
    return { data, error };
}
