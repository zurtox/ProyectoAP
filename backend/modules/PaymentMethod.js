import supabase from '../config/supabaseClient.js';

// Select all PaymentMethod entries
export const getAllPaymentMethods = async (req, res) => {
    const { data, error } = await supabase
        .from('PaymentMethod')
        .select('id, name');
    res.send({ data, error });
};

// Select PaymentMethod by id
export const getPaymentMethodById = async (req, res) => {
    const { id } = req.params;
    const { data, error } = await supabase
        .from('PaymentMethod')
        .select('id, name')
        .eq('id', id);
    res.send({ data, error });
};

// Insert PaymentMethod
export const insertPaymentMethod = async (req, res) => {
    const { name } = req.body;
    const { data, error } = await supabase
        .from('PaymentMethod')
        .insert([{ name }])
        .select('id');
    res.send({ data, error });
};

// Update PaymentMethod by id
export const updatePaymentMethod = async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    const { data, error } = await supabase
        .from('PaymentMethod')
        .update({ name })
        .eq('id', id)
        .select('id');
    res.send({ data, error });
};

// Delete PaymentMethod by id
export const deletePaymentMethod = async (req, res) => {
    const { id } = req.params;
    const { data, error } = await supabase
        .from('PaymentMethod')
        .delete()
        .eq('id', id)
        .select('id');
    res.send({ data, error });
};
