import supabase from '../config/supabaseClient.js';
import { getPersonById } from './Person.js';

// Select all MovieParticipant entries
export async function getAllMovieParticipants() {
    const { data, error } = await supabase
        .from('MovieParticipant')
        .select('person, content, role');

    if (data === null || data.length === 0) {
        return { data: [], error };
    }

    const {data: newData, error: newError} = await getPersonById(data[0].person);

    return { data, person: newData, error: newError };
}

// Select MovieParticipant by id
export async function getMovieParticipantById(id) {
    const { data, error } = await supabase
        .from('MovieParticipant')
        .select('person, content, role')
        .eq('id', id);

    if (data === null || data.length === 0) {
        return { data: [], error };
    }

    const {data: newData, error: newError} = await getPersonById(data[0].person);

    return { data, person: newData, error: newError };
}

// Get Actor by content id
export async function getActorByContentId(contentId) {
    const { data, error } = await supabase
        .from('MovieParticipant')
        .select('person, content, role')
        .eq('content', contentId)
        .eq('role', 'Actor');

    if (data === null || data.length === 0) {
        return { data: [], error };
    }

    const {data: newData, error: newError} = await getPersonById(data[0].person);

    return { data, person: newData, error: newError };
}

// Get Director by content id
export async function getDirectorByContentId(contentId) {
    const { data, error } = await supabase
        .from('MovieParticipant')
        .select('person, content, role')
        .eq('content', contentId)
        .eq('role', 'Director');

    if (data === null || data.length === 0) {
        return { data: [], error };
    }

    const {data: newData, error: newError} = await getPersonById(data[0].person);

    return { data, person: newData, error: newError };
}

// Get Writer by content id
export async function getWriterByContentId(contentId) {
    const { data, error } = await supabase
        .from('MovieParticipant')
        .select('person, content, role')
        .eq('content', contentId)
        .eq('role', 'Writer');

    if (data === null || data.length === 0) {
        return { data: [], error };
    }

    const {data: newData, error: newError} = await getPersonById(data[0].person);

    return { data, person: newData, error: newError };
}

// Insert MovieParticipant
export async function insertMovieParticipant({person, content, role}) {
    const { data, error } = await supabase
        .from('MovieParticipant')
        .insert([{ person, content, role }])
        .select('id');
    return { data, error };
}

// Delete MovieParticipant by id
export async function deleteMovieParticipant(id) {
    const { data, error } = await supabase
        .from('MovieParticipant')
        .delete()
        .eq('id', id)
        .select('id');
    return { data, error };
}
