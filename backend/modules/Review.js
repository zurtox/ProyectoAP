import supabase from '../config/supabaseClient.js';
import { actualUserId } from './User.js';

// Select all Review entries
export const getAllReviews = async (req, res) => {
    const { data, error } = await supabase
        .from('Review')
        .select('*');
    res.send({ data, error });
};

// Select Review by id
export const getReviewById = async (req, res) => {
    const { id } = req.params;
    const { data, error } = await supabase
        .from('Review')
        .select('*')
        .eq('content', id);
    res.send({ data, error });
};

// Insert Review
export const insertReview = async (req, res) => {
    const { content, review, rating } = req.body;
    const id = await actualUserId();
    if (id.error) return res.send(id);

    const { data, error } = await supabase
        .from('Review')
        .insert([{ user: id, content, review, rating }]);
    res.send({ data, error });
};

// Update Review by id
export const updateReview = async (req, res) => {
    const { id } = req.params;
    const { content, review, rating } = req.body;
    const userF = await actualUserId(); 

    if (userF.data == null) {
        return res.send({ data: null, error: userF.error });
    }

    const user = userF.data[0].id;
    
    const { data, error } = await supabase
        .from('Review')
        .update({ user, content, review, rating })
        .eq('id', id);
    res.send({ data, error });
};

// Delete Review by id
export const deleteReview = async (req, res) => {
    const { id } = req.params;
    const { data, error } = await supabase
        .from('Review')
        .delete()
        .eq('id', id);
    res.send({ data, error });
};
