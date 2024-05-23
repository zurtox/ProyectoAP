import supabase from '../config/supabaseClient.js';

// Select all Review entries
export async function getAllReviews() {
    const { data, error } = await supabase
        .from('Review')
        .select('*');
    return { data, error };
}

// Select Review by id
export async function getReviewById(id) {
    const { data, error } = await supabase
        .from('Review')
        .select('*')
        .eq('id', id);
    return { data, error };
}

// Insert Review
export async function insertReview(user, content, review, rating) {
    const { data, error } = await supabase
        .from('Review')
        .insert([{ user, content, review, rating }]);
    return { data, error };
}

// Update Review by id
export async function updateReview(id, user, content, review, rating) {
    const { data, error } = await supabase
        .from('Review')
        .update({ user, content, review, rating })
        .eq('id', id);
    return { data, error };
}

// Delete Review by id
export async function deleteReview(id) {
    const { data, error } = await supabase
        .from('Review')
        .delete()
        .eq('id', id);
    return { data, error };
}
