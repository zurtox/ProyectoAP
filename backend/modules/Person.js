import supabase from '../config/supabaseClient.js';

// Select all Person entries
export async function getAllPersons() {
    const { data, error } = await supabase
        .from('Person')
        .select('id, firstName, secondName, firstLastName, secondLastName, photo, birthDate, birthPlace, nationality, biography, height, curiousFact, partner');
    return { data, error };
}

// Select Person by id
export async function getPersonById(id) {
    const { data, error } = await supabase
        .from('Person')
        .select('id, firstName, secondName, firstLastName, secondLastName, photo, birthDate, birthPlace, nationality, biography, height, curiousFact, partner')
        .eq('id', id);
    return { data, error };
}

// Insert Person
export async function insertPerson({firstName, secondName, firstLastName, secondLastName, photo, birthDate, birthPlace, nationality, biography, height, curiousFact, partner}) {
    const { data, error } = await supabase
        .from('Person')
        .insert({ firstName, secondName, firstLastName, secondLastName, photo, birthDate, birthPlace, nationality, biography, height, curiousFact, partner });
    return { data, error };
}

// Update Person by id
export async function updatePerson(id, {firstName, secondName, firstLastName, secondLastName, photo, birthDate, birthPlace, nationality, biography, height, curiousFact, partner}) {
    const { data, error } = await supabase
        .from('Person')
        .update({ firstName, secondName, firstLastName, secondLastName, photo, birthDate, birthPlace, nationality, biography, height, curiousFact, partner })
        .eq('id', id);
    return { data, error };
}

// Delete Person by id
export async function deletePerson(id) {
    const { data, error } = await supabase
        .from('Person')
        .delete()
        .eq('id', id);
    return { data, error };
}
