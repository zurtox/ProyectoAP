import supabase from '../config/supabaseClient.js';
import { actualUserId } from './User.js';
import { logIn } from './User.js';

// Select all CartContent Movie by user

// const getAllProfessor = async(req, res) => {
//     try{
//         const professors = await Professor.find().limit(req.query.limit).skip(req.query.skip);
//         return res.status(200).json({professors});
//     }catch(error){
//         console.log(error);
//         return res.status(500).json({error: 'Internal server error'})
//     }
// }


export const getAllCartContents = async(req, res) => {
    const u = await logIn({email:"omarzunigpii@gmail.com", password:"password"});
    const userF = await actualUserId(); 

    if (userF.data == null) {
        return { data: null, error: userF.error };
    }

    const user = userF.data[0].id;

    const { data, error } = await supabase
        .from('Cart')
        .select('content')
        .eq('user', user);
    res.send({ data, error });
}

// Insert CartContent
export async function insertCartContent({content}) {
    const userF = await actualUserId(); 

    if (userF.data == null) {
        return { data: null, error: userF.error };
    }

    const user = userF.data[0].id;

    const { data: existingData, error: existingError } = await supabase
        .from('Cart')
        .select('id')
        .eq('user', user)
        .eq('content', content);

    if (existingData && existingData.length > 0) {
        return { data: existingData, error: existingError };
    }

    const { data, error } = await supabase
        .from('Cart')
        .insert([{ user, content }])
        .select('id');
    return { data, error };
}

// Delete CartContent by id
export async function deleteCartContent({content}) {
    const userF = await actualUserId(); 

    if (userF.data == null) {
        return { data: null, error: userF.error };
    }

    const user = userF.data[0].id;

    const { data, error } = await supabase
        .from('Cart')
        .delete()
        .eq('user', user)
        .eq('content', content);
    return { data, error };
}

// Delete all cart content by user
export async function deleteAllCartContent() {
    const userF = await actualUserId(); 

    if (userF.data == null) {
        return { data: null, error: userF.error };
    }

    const user = userF.data[0].id;

    const { data, error } = await supabase
        .from('Cart')
        .delete()
        .eq('user', user);
    return { data, error };
}