import supabase from '../config/supabaseClient.js';

// Select all Person entries
export const getAllPersons = async (req, res) => {
    const { data, error } = await supabase
        .from('Person')
        .select('id, firstName, secondName, firstLastName, secondLastName, photo, birthDate, birthPlace, nationality, biography, height, curiousFact, partner');
    res.send({ data, error });
};

// Select Person by id
export const getPersonById = async (req, res) => {
    const { id } = req.params;
    const { data, error } = await supabase
        .from('Person')
        .select('id, firstName, secondName, firstLastName, secondLastName, photo, birthDate, birthPlace, nationality, biography, height, curiousFact, partner')
        .eq('id', id);
    res.send({ data, error });
};

// Insert Person
export const insertPerson = async (req, res) => {
    const { firstName, secondName, firstLastName, secondLastName, photo, birthDate, birthPlace, nationality, biography, height, curiousFact, partner } = req.body;
    const { data, error } = await supabase
        .from('Person')
        .insert([{ firstName, secondName, firstLastName, secondLastName, photo, birthDate, birthPlace, nationality, biography, height, curiousFact, partner }]);
    res.send({ data, error });
};

// Update Person by id
export const updatePerson = async (req, res) => {
    const { id } = req.params;
    const { firstName, secondName, firstLastName, secondLastName, photo, birthDate, birthPlace, nationality, biography, height, curiousFact, partner } = req.body;
    const { data, error } = await supabase
        .from('Person')
        .update({ firstName, secondName, firstLastName, secondLastName, photo, birthDate, birthPlace, nationality, biography, height, curiousFact, partner })
        .eq('id', id);
    res.send({ data, error });
};

// Delete Person by id
export const deletePerson = async (req, res) => {
    const { id } = req.params;
    const { data, error } = await supabase
        .from('Person')
        .delete()
        .eq('id', id);
    res.send({ data, error });
};
