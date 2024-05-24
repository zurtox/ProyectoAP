import supabase from '../config/supabaseClient.js';
import { actualUserId } from './User.js';

// Select all RecentlyViewed Movie by user
export async function getAllRecentlyVieweds(user) {
    const { data, error } = await supabase
        .from('RecentlyViewed')
        .select('*')
        .eq('user', user);
    return { data, error };
}

// Insert RecentlyViewed
export async function insertRecentlyViewed({user, content}) {
    const lastViewed = new Date();

    const view = await supabase
        .from('RecentlyViewed')
        .select('id')
        .eq('user', user)
        .eq('content', content);
    
    if (view.data && view.data.length > 0) {
        const { data, error } = await supabase
            .from('RecentlyViewed')
            .update({ lastViewed })
            .eq('id', view.data[0].id);

        return { data, error };
    }

    const { data, error } = await supabase
        .from('RecentlyViewed')
        .insert([{ user, content, lastViewed }]);
    return { data, error };
}

// Delete RecentlyViewed by id
export async function deleteRecentlyViewed({user, content}) {
    const { data, error } = await supabase
        .from('RecentlyViewed')
        .delete()
        .eq('user', user)
        .eq('content', content);
    return { data, error };
}

// Recently Viewed 
export async function getTopNRecentRows(n) {
    const id = await actualUserId();
    if (id.error) return id;

    const { data, error } = await supabase
      .from('RecentlyViewed')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(n)
      .eq('user', id.data[0].id);
  
    return { data, error };
}
  