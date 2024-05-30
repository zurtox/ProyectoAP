import supabase from '../config/supabaseClient.js';

// Select all PurchaseContent entries
export const getAllPurchaseContents = async (req, res) => {
    const { data, error } = await supabase
        .from('PurchaseContent')
        .select('*');
    res.send({ data, error });
};

// Select PurchaseContent by id
export const getPurchaseContentById = async (req, res) => {
    const { id } = req.params;
    const { data, error } = await supabase
        .from('PurchaseContent')
        .select('*')
        .eq('purchase', id);
    res.send({ data, error });
};

// Insert PurchaseContent
export const insertPurchaseContent = async (req, res) => {
    const { purchase, content } = req.body;
    const { data, error } = await supabase
        .from('PurchaseContent')
        .insert([{ purchase, content }]);
    res.send({ data, error });
};

// Update PurchaseContent by id
export const updatePurchaseContent = async (req, res) => {
    const { id } = req.params;
    const { purchase, content } = req.body;
    const { data, error } = await supabase
        .from('PurchaseContent')
        .update({ purchase, content })
        .eq('id', id);
    res.send({ data, error });
};

// Delete PurchaseContent by id
export const deletePurchaseContent = async (req, res) => {
    const { id } = req.params;
    const { data, error } = await supabase
        .from('PurchaseContent')
        .delete()
        .eq('id', id);
    res.send({ data, error });
};
