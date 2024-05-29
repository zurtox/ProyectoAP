import supabase from '../config/supabaseClient.js';
import { actualUserId } from './User.js';

// Select all RecentlyViewed Movie by user
export const getAllRecentlyVieweds = async (req, res) => {
    const { user } = req.params;
    const { data, error } = await supabase
        .from('RecentlyViewed')
        .select('*')
        .eq('user', user);
    res.send({ data, error });
};

// Insert RecentlyViewed
export const insertRecentlyViewed = async (req, res) => {
    const { content } = req.body;
    const id = await actualUserId();
    if (id.error) return res.send(id);
    const lastViewed = new Date();

    const view = await supabase
        .from('RecentlyViewed')
        .select('id')
        .eq('user', id)
        .eq('content', content);
    
    if (view.data && view.data.length > 0) {
        const { data, error } = await supabase
            .from('RecentlyViewed')
            .update({ lastViewed })
            .eq('id', view.data[0].id);

        return res.send({ data, error });
    }

    const { data, error } = await supabase
        .from('RecentlyViewed')
        .insert([{ user: id, content, lastViewed }])
        .select('id');
    res.send({ data, error });
};

// Delete RecentlyViewed by id
export const deleteRecentlyViewed = async (req, res) => {
    const { user, content } = req.body;
    const { data, error } = await supabase
        .from('RecentlyViewed')
        .delete()
        .eq('user', user)
        .eq('content', content);
    res.send({ data, error });
};

// Recently Viewed 
export const getTopNRecentRows = async (req, res) => {
    const { n } = req.params;
    const id = await actualUserId();
    if (id.error) return res.send(id);

    const { data, error } = await supabase
      .from('RecentlyViewed')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(n)
      .eq('user', id.data[0].id);
  
    res.send({ data, error });
};
