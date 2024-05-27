import supabase from '../config/supabaseClient.js';
import { actualUserId } from './User.js';
import { logIn } from './User.js';

// Select all CartContent Movie by user

export const getAllCartContents = async(req, res) => {
    // const u = await logIn({email:"omarzunigpii@gmail.com", password:"password"});
    const userF = await actualUserId(); 

    if (userF.data == null) {
        res.send({ data: null, error: userF.error });
    }

    const user = userF.data[0].id;

    const { data, error } = await supabase
        .from('Cart')
        .select('content')
        .eq('user', user);
    res.send({ data, error });
}

// Insert CartContent
export const insertCartContent = async(req, res) => {
    // const u = await logIn({email:"omarzunigpii@gmail.com", password:"password"});
    const userF = await actualUserId(); 

    if (userF.data == null) {
        res.send({ data: null, error: userF.error });
    }

    const user = userF.data[0].id;
    const content = req.body.id

    const { data: existingData, error: existingError } = await supabase
        .from('Cart')
        .select('id')
        .eq('user', user)
        .eq('content', req.body);

    if (existingData && existingData.length > 0) {
        return { data: existingData, error: existingError };
    }

    const { data, error } = await supabase
        .from('Cart')
        .insert([{ user, content }])
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
    const userF = await actualUserId(); 

    if (userF.data == null) {
        return { data: null, error: userF.error };
    }

    const user = userF.data[0].id;

    const { data, error } = await supabase
        .from('Cart')
        .delete()
        .eq('user', user);
    res.send({ data, error });
}