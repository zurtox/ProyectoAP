import supabase from '../config/supabaseClient.js';

// Select all PurchaseContent entries
export async function getAllPurchaseContents() {
    const { data, error } = await supabase
        .from('PurchaseContent')
        .select('*');
    return { data, error };
}

// Select PurchaseContent by id
export async function getPurchaseContentById(id) {
    const { data, error } = await supabase
        .from('PurchaseContent')
        .select('*')
        .eq('id', id);
    return { data, error };
}

// Insert PurchaseContent
export async function insertPurchaseContent({purchase, content}) {
    const { data, error } = await supabase
        .from('PurchaseContent')
        .insert([{ purchase, content }]);
    return { data, error };
}

// Update PurchaseContent by id
export async function updatePurchaseContent(id, {purchase, content}) {
    const { data, error } = await supabase
        .from('PurchaseContent')
        .update({ purchase, content })
        .eq('id', id);
    return { data, error };
}

// Delete PurchaseContent by id
export async function deletePurchaseContent(id) {
    const { data, error } = await supabase
        .from('PurchaseContent')
        .delete()
        .eq('id', id);
    return { data, error };
}
