import supabase from '../config/supabaseClient.js';
import { getContentById, insertContent, updateContent, deleteContent } from './Content.js';
import { deleteSeasonSerie } from './Season.js';

// Select all Serie entries
export const getAllSeries = async (req, res) => {
    const { data, error } = await supabase
        .from('Serie')
        .select('id, content');

    if (data === null || data.length === 0) {
        return res.send({ data: [], error });
    }

    let contentData = [];

    for (const item of data) {
        const { data, error } = await supabase
        .from('Content')
        .select('id, title, category, trailer, synopsis, price, publishYear, active')
        .eq('id', item.content);
        contentData.push(data[0]);
    }

    res.send({ data: contentData, error });
};

// Select Serie by id
export const getSerieById = async (req, res) => {
    const { id } = req.params;
    const { data, error } = await supabase
        .from('Serie')
        .select('id, content')
        .eq('id', id);

    if (data === null || data.length === 0) {
        return res.send({ data: [], error });
    }

    const { data: contentData, error: contentError } = await getContentById(data[0].content);

    res.send({ data: contentData, documental: data, error: contentError });
};

// Insert Serie
export const insertSerie = async (req, res) => {
    const { title, publishYear, category, trailer, synopsis, price, photo } = req.body;
    const { data, error } = await insertContent({ title, publishYear, category, trailer, synopsis, price, photo });

    if (error) {
        return res.send({ data: null, error });
    }

    const contentId = data[0].id;

    const { data: dataDocument, error: errorDocument } = await supabase
        .from('Serie')
        .insert([{ content: contentId }])
        .select('id');

    res.send({ data: dataDocument, error: errorDocument });
};

// Update Serie by id
export const updateSerie = async (req, res) => {
    const { id } = req.params;
    const { title, publishYear, category, trailer, synopsis, price, photo } = req.body;

    const { data, error } = await supabase
        .from('Serie')
        .select('content')
        .eq('id', id);

    if (data === null || data.length === 0) {
        return res.send({ data: [], error });
    }

    const contentId = data[0].content;

    const { data: contentData, error: contentError } = await updateContent(contentId, { title, publishYear, category, trailer, synopsis, price, photo });

    res.send({ data: contentData, error: contentError });
};

// Delete Serie by id
export const deleteSerie = async (req, res) => {
    const { id } = req.params;
    const { data: itemsToDelete, error: selectError } = await supabase
        .from('Serie')
        .select('id, content')
        .eq('id', id);

    if (itemsToDelete && itemsToDelete.length === 0) {
        return res.send({ data: null, error: selectError });
    }

    await deleteSeasonSerie(itemsToDelete[0].id);

    const { data, error } = await supabase
        .from('Serie')
        .delete()
        .eq('id', id)
        .select('id');

    if (itemsToDelete && itemsToDelete.length === 0) {
        return res.send({ data: null, error });
    }

    const contentId = itemsToDelete[0].content;

    const { data: dataContent, error: errorContent } = await deleteContent(contentId);

    res.send({ data: dataContent, error: errorContent });
};
