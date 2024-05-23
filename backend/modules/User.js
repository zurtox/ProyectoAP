import supabase from '../config/supabaseClient.js';

// Select all User entries
export async function getAllUsers() {
    const { data, error } = await supabase
        .from('User')
        .select();
    return { data, error };
}

// Select User by id
export async function getUserById(id) {
    const { data, error } = await supabase
        .from('User')
        .select('*')
        .eq('id', id);
    return { data, error };
}

// Insert User
export async function insertUser(firstName, secondName, firstLastName, secondLastName, personalId, birthDate, mail, phone, username, password, photo, nationality, comunity, gender, administrator) {
    const { data, error } = await supabase
        .from('User')
        .insert([{ firstName, secondName, firstLastName, secondLastName, personalId, birthDate, mail, phone, username, password, photo, nationality, comunity, gender, administrator }]);
    return { data, error };
}

// Update User by id
export async function updateUser(id, firstName, secondName, firstLastName, secondLastName, personalId, birthDate, mail, phone, username, password, photo, nationality, comunity, gender, administrator) {
    const { data, error } = await supabase
        .from('User')
        .update({ firstName, secondName, firstLastName, secondLastName, personalId, birthDate, mail, phone, username, password, photo, nationality, comunity, gender, administrator })
        .eq('id', id);
    return { data, error };
}

// Delete User by id
export async function deleteUser(id) {
    const { data, error } = await supabase
        .from('User')
        .delete()
        .eq('id', id);
    return { data, error };
}
