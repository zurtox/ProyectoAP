import supabase from '../src/config/supabaseClient.js';

// Select all RecentlyViewed Movie by user
export async function getAllRecentlyVieweds(user) {
    const { data, error } = await supabase
        .from('RecentlyViewed')
        .select('*')
        .eq('user', user);
    return { data, error };
}

// Insert RecentlyViewed
export async function insertRecentlyViewed(user, content) {
    const { data, error } = await supabase
        .from('RecentlyViewed')
        .insert([{ user, content }]);
    return { data, error };
}

// Delete RecentlyViewed by id
export async function deleteRecentlyViewed(user, content) {
    const { data, error } = await supabase
        .from('RecentlyViewed')
        .delete()
        .eq('user', user)
        .eq('content', content);
    return { data, error };
}