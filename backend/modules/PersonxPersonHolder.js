import supabase from '../config/supabaseClient.js';

// Select all PersonxHolder entries
export const getAllPersonxHolder = async (req, res) => {
    const { data, error } = await supabase
        .from('PersonxPersonHolder')
        .select('id, person, personHolder, relationshipType');
    res.send({ data, error });
};

// Select PersonxHolder by id
export const getPersonxHolderById = async (req, res) => {
    const { id } = req.params;
    const { data, error } = await supabase
        .from('PersonxPersonHolder')
        .select('id, person, personHolder, relationshipType')
        .eq('id', id);
    res.send({ data, error });
};

// Get PersonxHolder by person id
export const getPersonxHolderByPersonId = async (req, res) => {
    const { personId } = req.params;
    const { data, error } = await supabase
        .from('PersonxPersonHolder')
        .select('id, person, personHolder, relationshipType')
        .eq('person', personId);
    res.send({ data, error });
};

// Get PersonxHolder by personHolder id and relationship type
const getPersonxHolderByRelationshipType = async (req, res, relationshipType) => {
    const { personId } = req.params;
    const { data, error } = await supabase
        .from('PersonxPersonHolder')
        .select('id, person, personHolder, relationshipType')
        .eq('person', personId)
        .eq('relationshipType', relationshipType);
    res.send({ data, error });
};

export const getPersonxHolderByPersonHolderIdParent = async (req, res) => {
    return getPersonxHolderByRelationshipType(req, res, 'Parent');
};

export const getPersonxHolderByPersonHolderIdBrother = async (req, res) => {
    return getPersonxHolderByRelationshipType(req, res, 'Brother');
};

export const getPersonxHolderByPersonHolderIdChildren = async (req, res) => {
    return getPersonxHolderByRelationshipType(req, res, 'Children');
};

export const getPersonxHolderByPersonHolderIdPartner = async (req, res) => {
    return getPersonxHolderByRelationshipType(req, res, 'Partner');
};

// Insert PersonxHolder
export const insertPersonxHolder = async (req, res) => {
    const { person, personHolder, relationshipType } = req.body;
    const { data, error } = await supabase
        .from('PersonxPersonHolder')
        .insert([{ person, personHolder, relationshipType }]);
    res.send({ data, error });
};

// Update PersonxHolder by id
export const updatePersonxHolder = async (req, res) => {
    const { id } = req.params;
    const { person, personHolder, relationshipType } = req.body;
    const { data, error } = await supabase
        .from('PersonxPersonHolder')
        .update({ person, personHolder, relationshipType })
        .eq('id', id);
    res.send({ data, error });
};

// Delete PersonxHolder by id
export const deletePersonxHolder = async (req, res) => {
    const { id } = req.params;
    const { data, error } = await supabase
        .from('PersonxPersonHolder')
        .delete()
        .eq('id', id);
    res.send({ data, error });
};
