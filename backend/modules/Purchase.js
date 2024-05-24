import supabase from '../config/supabaseClient.js';

// Select all Purchase entries
export async function getAllPurchases() {
    const { data, error } = await supabase
        .from('Purchase')
        .select('*');
    return { data, error };
}

// Select Purchase by id
export async function getPurchaseById(id) {
    const { data, error } = await supabase
        .from('Purchase')
        .select('*')
        .eq('id', id);
    return { data, error };
}

// Insert Purchase
export async function insertPurchase({user, paymentMethod, purchaseDate}) {
    const { data, error } = await supabase
        .from('Purchase')
        .insert([{ user, paymentMethod, purchaseDate }]);
    return { data, error };
}

// Update Purchase by id
export async function updatePurchase(id, {user, paymentMethod, purchaseDate}) {
    const { data, error } = await supabase
        .from('Purchase')
        .update({ user, paymentMethod, purchaseDate })
        .eq('id', id);
    return { data, error };
}

// Delete Purchase by id
export async function deletePurchase(id) {
    const { data, error } = await supabase
        .from('Purchase')
        .delete()
        .eq('id', id);
    return { data, error };
}
