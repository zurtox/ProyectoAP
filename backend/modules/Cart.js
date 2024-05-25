import supabase from '../config/supabaseClient.js';
import { actualUserId } from './User.js';

// Select all CartContent Movie by user
export async function getAllCartContents() {
    const userF = await actualUserId(); 

    if (userF.data == null) {
        return { data: null, error: userF.error };
    }

    const user = userF.data[0].id;

    const { data, error } = await supabase
        .from('Cart')
        .select('content')
        .eq('user', user);
    return { data, error };
}

// Insert CartContent
export async function insertCartContent({content}) {
    const userF = await actualUserId(); 

    if (userF.data == null) {
        return { data: null, error: userF.error };
    }

    const user = userF.data[0].id;

    const { data: existingData, error: existingError } = await supabase
        .from('Cart')
        .select('id')
        .eq('user', user)
        .eq('content', content);

    if (existingData && existingData.length > 0) {
        return { data: existingData, error: existingError };
    }

    const { data, error } = await supabase
        .from('Cart')
        .insert([{ user, content }])
        .select('id');
    return { data, error };
}

// Delete CartContent by id
export async function deleteCartContent({content}) {
    const userF = await actualUserId(); 

    if (userF.data == null) {
        return { data: null, error: userF.error };
    }

    const user = userF.data[0].id;

    const { data, error } = await supabase
        .from('Cart')
        .delete()
        .eq('user', user)
        .eq('content', content);
    return { data, error };
}