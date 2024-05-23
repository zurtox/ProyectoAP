import supabase from '../config/supabaseClient.js';

// Select all PaymentMethod entries
export async function getAllPaymentMethods() {
    const { data, error } = await supabase
        .from('PaymentMethod')
        .select('*');
    return { data, error };
}

// Select PaymentMethod by id
export async function getPaymentMethodById(id) {
    const { data, error } = await supabase
        .from('PaymentMethod')
        .select('*')
        .eq('id', id);
    return { data, error };
}

// Insert PaymentMethod
export async function insertPaymentMethod(name) {
    const { data, error } = await supabase
        .from('PaymentMethod')
        .insert([{ name }]);
    return { data, error };
}

// Update PaymentMethod by id
export async function updatePaymentMethod(id, name) {
    const { data, error } = await supabase
        .from('PaymentMethod')
        .update({ name })
        .eq('id', id);
    return { data, error };
}

// Delete PaymentMethod by id
export async function deletePaymentMethod(id) {
    const { data, error } = await supabase
        .from('PaymentMethod')
        .delete()
        .eq('id', id);
    return { data, error };
}
