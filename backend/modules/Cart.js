import supabase from '../config/supabaseClient.js';
import { actualUserId } from './User.js';
import { logIn } from './User.js';

// Select all CartContent Movie by user

export const getAllCartContents = async(req, res) => {
    // const u = await logIn({email:"omarzunigpii@gmail.com", password:"password"});
    const id = await actualUserId();
    if (id.error) return res.send(id);

    const { data, error } = await supabase
        .from('Cart')
        .select('content')
        .eq('user', id);
    return res.send({ data, error });
}

// Insert CartContent
export const insertCartContent = async(req, res) => {
    // const u = await logIn({email:"omarzunigpii@gmail.com", password:"password"});
    const { content } = req.body;
    const id = await actualUserId();
    if (id.error) return res.send(id);

    const { data: existingData, error: existingError } = await supabase
        .from('Cart')
        .select('id')
        .eq('user', id)
        .eq('content', content);

    if (existingData && existingData.length > 0) {
        return { data: existingData, error: existingError };
    }

    const { data, error } = await supabase
        .from('Cart')
        .insert([{ user: id, content }])
        .select('id');
    res.send({ data, error });
}

// Delete CartContent by id
export const deleteCartContent = async(req, res) => {
    const userF = await actualUserId(); 

    if (userF.data == null) {
        return { data: null, error: userF.error };
    }

    const user = userF.data[0].id;
    const {content} = req.params

    const { data, error } = await supabase
        .from('Cart')
        .delete()
        .eq('user', user)
        .eq('content', content);
    res.send({ data, error });
}

// Delete all cart content by user
export const deleteAllCartContent = async(req, res) => {
    const id = await actualUserId();
    if (id.error) return res.send(id);

    const { data, error } = await supabase
        .from('Cart')
        .delete()
        .eq('user', id);
    res.send({ data, error });
}