import supabase from '../config/supabaseClient.js';
import { v4 as uuidv4 } from 'uuid';

const folder = 'imagesBD';

// Select Photo by id
export async function getPhotoById(id) {
    const { data, error } = await supabase
        .from('Photo')
        .select('id, name')
        .eq('id', id);

    const path = data[0].name;

    const { data: data1, error: error1 } = await supabase
        .storage
        .from(folder)
        .getPublicUrl(path)

    return { data, path : data1.publicUrl, error: error1 };
}

// Insert Photo
export async function insertPhoto({name}) {
    const path = await uploadImage(name);

    if (path == null) {
        return { data: null, error: "Error uploading image" };
    }

    const { data, error } = await supabase
        .from('Photo')
        .insert([{ name: path }]);

    return { data, error };
}

// Delete Photo by id 
export async function deletePhoto(id) {
    const { data, error } = await supabase
        .from('Photo')
        .delete()
        .eq('id', id)
        .select('name');

    const path = data[0].name;

    const { data: data1, error: error1 } = await supabase
        .storage
        .from(folder)
        .remove([path])

    return { data1, error1 };
}

async function uploadImage(file) {

    if (file == null) {
        return null;
    }

    const { data, error } = await supabase
      .storage
      .from(folder)
      .upload('public/' + uuidv4(), file);

    const path = data.path; 

    const { data: ImportantData } = await supabase
      .storage
      .from(folder)
      .getPublicUrl(path)
  
    return ImportantData.publicUrl;
}
