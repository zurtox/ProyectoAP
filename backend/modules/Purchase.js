import supabase from '../config/supabaseClient.js';
import { actualUserId } from './User.js';

// Select all Purchase entries
export async function getAllPurchases() {
    const { data, error } = await supabase
        .from('Purchase')
        .select('*');
    return { data, error };
}

// Select Purchase by id
export async function getPurchaseById(id) {
    const { data, error } = await supabase
        .from('Purchase')
        .select('*')
        .eq('id', id);
    return { data, error };
}

// Insert Purchase
export async function insertPurchase({user, paymentMethod, purchaseDate}) {
    const { data, error } = await supabase
        .from('Purchase')
        .insert([{ user, paymentMethod, purchaseDate }]);
    return { data, error };
}

// Update Purchase by id
export async function updatePurchase(id, {user, paymentMethod, purchaseDate}) {
    const { data, error } = await supabase
        .from('Purchase')
        .update({ user, paymentMethod, purchaseDate })
        .eq('id', id);
    return { data, error };
}

// Delete Purchase by id
export async function deletePurchase(id) {
    const { data, error } = await supabase
        .from('Purchase')
        .delete()
        .eq('id', id);
    return { data, error };
}

// Get by months
export async function getPurchasesLast3Months() {
    const id = await actualUserId();
    if (id.error) return id;
    const currentDate = new Date();
    const threeMonthsAgo = new Date(currentDate);
    threeMonthsAgo.setMonth(currentDate.getMonth() - 3);
    const formatDate = (date) => date.toISOString().split('T')[0];

    const { data, error } = await supabase
        .from('Purchase')
        .select('*')
        .gte('purchaseDate', formatDate(threeMonthsAgo))
        .eq('user', id.data[0].id);

    return {data, error};
}

export async function getPurchasesLast6Months() {
    const id = await actualUserId();
    if (id.error) return id;
    const currentDate = new Date();
    const threeMonthsAgo = new Date(currentDate);
    threeMonthsAgo.setMonth(currentDate.getMonth() - 6);
    const formatDate = (date) => date.toISOString().split('T')[0];
  
    const { data, error } = await supabase
      .from('Purchase')
      .select('*')
      .gte('purchaseDate', formatDate(threeMonthsAgo))
      .eq('user', id.data[0].id);
  
    return {data, error};
} 

export async function getPurchasesLastYear() {
    const id = await actualUserId();
    if (id.error) return id;
    const currentDate = new Date();
    const oneYearAgo = new Date(currentDate);
    oneYearAgo.setFullYear(currentDate.getFullYear() - 1);
    const formatDate = (date) => date.toISOString().split('T')[0];
  
    const { data, error } = await supabase
        .from('Purchase')
        .select('*')
        .gte('purchaseDate', formatDate(oneYearAgo))
        .eq('user', id.data[0].id);
  
    return {data, error};
} 