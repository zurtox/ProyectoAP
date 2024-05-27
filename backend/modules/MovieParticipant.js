import supabase from '../config/supabaseClient.js';
import { getPersonById } from './Person.js';

// Select all MovieParticipant entries
export const getAllMovieParticipants = async (req, res) => {
    const { data, error } = await supabase
        .from('MovieParticipant')
        .select('person, content, role');

    if (data === null || data.length === 0) {
        return res.send({ data: [], error });
    }

    const { data: newData, error: newError } = await getPersonById(data[0].person);

    res.send({ data, person: newData, error: newError });
};

// Select MovieParticipant by id
export const getMovieParticipantById = async (req, res) => {
    const { id } = req.params;
    const { data, error } = await supabase
        .from('MovieParticipant')
        .select('person, content, role')
        .eq('id', id);

    if (data === null || data.length === 0) {
        return res.send({ data: [], error });
    }

    const { data: newData, error: newError } = await getPersonById(data[0].person);

    res.send({ data, person: newData, error: newError });
};

// Get Actor by content id
export const getActorByContentId = async (req, res) => {
    const { contentId } = req.params;
    const { data, error } = await supabase
        .from('MovieParticipant')
        .select('person, content, role')
        .eq('content', contentId)
        .eq('role', 'Actor');

    if (data === null || data.length === 0) {
        return res.send({ data: [], error });
    }

    const { data: newData, error: newError } = await getPersonById(data[0].person);

    res.send({ data, person: newData, error: newError });
};

// Get Director by content id
export const getDirectorByContentId = async (req, res) => {
    const { contentId } = req.params;
    const { data, error } = await supabase
        .from('MovieParticipant')
        .select('person, content, role')
        .eq('content', contentId)
        .eq('role', 'Director');

    if (data === null || data.length === 0) {
        return res.send({ data: [], error });
    }

    const { data: newData, error: newError } = await getPersonById(data[0].person);

    res.send({ data, person: newData, error: newError });
};

// Get Writer by content id
export const getWriterByContentId = async (req, res) => {
    const { contentId } = req.params;
    const { data, error } = await supabase
        .from('MovieParticipant')
        .select('person, content, role')
        .eq('content', contentId)
        .eq('role', 'Writer');

    if (data === null || data.length === 0) {
        return res.send({ data: [], error });
    }

    const { data: newData, error: newError } = await getPersonById(data[0].person);

    res.send({ data, person: newData, error: newError });
};

// Insert MovieParticipant
export const insertMovieParticipant = async (req, res) => {
    const { person, content, role } = req.body;
    const { data, error } = await supabase
        .from('MovieParticipant')
        .insert([{ person, content, role }])
        .select('id');
    res.send({ data, error });
};

// Delete MovieParticipant by id
export const deleteMovieParticipant = async (req, res) => {
    const { id } = req.params;
    const { data, error } = await supabase
        .from('MovieParticipant')
        .delete()
        .eq('id', id)
        .select('id');
    res.send({ data, error });
};
