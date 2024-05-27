import supabase from '../config/supabaseClient.js';

// Select all PersonHolder entries
export const getAllPersonHolders = async (req, res) => {
    const { data, error } = await supabase
        .from('PersonHolder')
        .select('id, firstName, secondName, firstLastName, secondLastName');
    res.send({ data, error });
};

// Select PersonHolder by id
export const getPersonHolderById = async (req, res) => {
    const { id } = req.params;
    const { data, error } = await supabase
        .from('PersonHolder')
        .select('id, firstName, secondName, firstLastName, secondLastName')
        .eq('id', id);
    res.send({ data, error });
};

// Insert PersonHolder
export const insertPersonHolder = async (req, res) => {
    const { firstName, secondName, firstLastName, secondLastName } = req.body;
    const { data, error } = await supabase
        .from('PersonHolder')
        .insert([{ firstName, secondName, firstLastName, secondLastName }]);
    res.send({ data, error });
};

// Update PersonHolder by id
export const updatePersonHolder = async (req, res) => {
    const { id } = req.params;
    const { firstName, secondName, firstLastName, secondLastName } = req.body;
    const { data, error } = await supabase
        .from('PersonHolder')
        .update({ firstName, secondName, firstLastName, secondLastName })
        .eq('id', id);
    res.send({ data, error });
};

// Delete PersonHolder by id
export const deletePersonHolder = async (req, res) => {
    const { id } = req.params;
    const { data, error } = await supabase
        .from('PersonHolder')
        .delete()
        .eq('id', id);
    res.send({ data, error });
};
