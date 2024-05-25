import supabase from '../config/supabaseClient.js';
import { actualUserId } from './User.js';
import { insertPurchaseContent } from './PurchaseContent.js';
import { deleteAllCartContent, getAllCartContents } from './Cart.js';
import { getContentById } from './Content.js';

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

/*
    Esta funcion realiza una compra en base al carrito (BD)
    Todo lo del carrito pasa a ser comprado 'PurchaseContent'
    Borra el carrito actual 
*/
export async function insertPurchase({paymentMethod}) {
    const userF = await actualUserId(); 

    if (userF.data == null) {
        return { data: null, error: userF.error };
    }

    const user = userF.data[0].id;

    const { data, error } = await supabase // Agregar Purchase
        .from('Purchase')
        .insert([{ user, paymentMethod }])
        .select('id');

    if (data === null || data.length === 0) {
        return { data: [], error };
    }

    const cart = await getAllCartContents(); 

    for (const c of cart.data) {
        insertPurchaseContent({purchase: data[0].id, content: c.content});
    }

    // Elimina el carrito 

    await deleteAllCartContent();

    return { data, error };
}

// Gets the purchase content 
export async function getPurchaseContent(id) {
    const { data, error } = await supabase
        .from('PurchaseContent')
        .select('*')
        .eq('purchase', id);

    if (data === null || data.length === 0) {
        return { data: [], error };
    }
    
    let contentData = [];

    for (const item of data) {
        const content = await getContentById(item.content);
        contentData.push(content.data[0]);
    }

    return { data: contentData, error };
}

// Gets the total price of the purchase
export async function getPurchaseTotalCost(id) {
    const { data, error } = await supabase
        .rpc('get_total_cost_of_purchase', { purchase_id: id });

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