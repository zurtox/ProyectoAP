import supabase from '../config/supabaseClient.js';

// Select all CartContent Movie by user
export async function getAllCartContents(user) {
    const { data, error } = await supabase
        .from('Cart')
        .select('*')
        .eq('user', user);
    return { data, error };
}

// Insert CartContent
export async function insertCartContent({user, content}) {
    const { data, error } = await supabase
        .from('Cart')
        .insert([{ user, content }]);
    return { data, error };
}

// Delete CartContent by id
export async function deleteCartContent({user, content}) {
    const { data, error } = await supabase
        .from('Cart')
        .delete()
        .eq('user', user)
        .eq('content', content);
    return { data, error };
}