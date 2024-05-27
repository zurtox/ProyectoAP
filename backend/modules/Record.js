import supabase from '../config/supabaseClient.js';

// Get all records
export async function getAllRecords() {
    const { data, error } = await supabase
        .from('Record')
        .select('*');
    return { data, error };
}

// Get all records by Content id
export async function getRecordByContent(id) {
    const { data, error } = await supabase
        .from('Record')
        .select('*')
        .eq('content', id);
    return { data, error };
}

// Get all records by User id 
export async function getRecordByContent(id) {
    const { data, error } = await supabase
        .from('Record')
        .select('*')
        .eq('user', id);
    return { data, error };
}