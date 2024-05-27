import supabase from '../config/supabaseClient.js';

// Get all records
export const getAllRecords = async (req, res) => {
    const { data, error } = await supabase
        .from('Record')
        .select('*');
    res.send({ data, error });
};

// Get all records by Content id
export const getRecordsByContent = async (req, res) => {
    const { id } = req.params;
    const { data, error } = await supabase
        .from('Record')
        .select('*')
        .eq('content', id);
    res.send({ data, error });
};

// Get all records by User id
export const getRecordsByUser = async (req, res) => {
    const { id } = req.params;
    const { data, error } = await supabase
        .from('Record')
        .select('*')
        .eq('user', id);
    res.send({ data, error });
};
