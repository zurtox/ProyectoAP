import supabase from '../config/supabaseClient.js';
import { v4 as uuidv4 } from 'uuid';

const folder = 'imagesBD';

// Select Photo by id
export const getPhotoById = async (req, res) => {
    const { id } = req.params;
    const { data, error } = await supabase
        .from('Photo')
        .select('id, name')
        .eq('id', id);

    if (error || !data.length) {
        return res.send({ data: null, error });
    }

    const path = data[0].name;

    const { data: data1, error: error1 } = await supabase
        .storage
        .from(folder)
        .getPublicUrl(path);

    res.send({ data, path: data1.publicUrl, error: error1 });
};

// Insert Photo
export const insertPhoto = async (req, res) => {
    const { name } = req.body;
    const path = await uploadImage(name);

    if (path == null) {
        return res.send({ data: null, error: "Error uploading image" });
    }

    const { data, error } = await supabase
        .from('Photo')
        .insert([{ name: path }]);

    res.send({ data, error });
};

// Delete Photo by id 
export const deletePhoto = async (req, res) => {
    const { id } = req.params;
    const { data, error } = await supabase
        .from('Photo')
        .delete()
        .eq('id', id)
        .select('name');

    if (error || !data.length) {
        return res.send({ data: null, error });
    }

    const path = data[0].name;

    const { data: data1, error: error1 } = await supabase
        .storage
        .from(folder)
        .remove([path]);

    res.send({ data: data1, error: error1 });
};

const uploadImage = async (file) => {
    if (file == null) {
        return null;
    }

    const { data, error } = await supabase
        .storage
        .from(folder)
        .upload('public/' + uuidv4(), file);

    if (error) {
        return null;
    }

    const path = data.path;

    const { data: ImportantData } = await supabase
        .storage
        .from(folder)
        .getPublicUrl(path);

    return ImportantData.publicUrl;
};
