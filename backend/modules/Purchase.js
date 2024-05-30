import supabase from '../config/supabaseClient.js';
import { actualUserId } from './User.js';
import { insertPurchaseContent } from './PurchaseContent.js';
import { deleteAllCartContent, getAllCartContents } from './Cart.js';
import { getContentById } from './Content.js';

// Select all Purchase entries
export const getAllPurchases = async (req, res) => {
    const { data, error } = await supabase
        .from('Purchase')
        .select('*');
    res.send({ data, error });
};

// Select Purchase by id
export const getPurchaseById = async (req, res) => {
    const { id } = req.params;
    const { data, error } = await supabase
        .from('Purchase')
        .select('*')
        .eq('id', id);
    res.send({ data, error });
};


/*
    Esta funcion realiza una compra en base al carrito (BD)
    Todo lo del carrito pasa a ser comprado 'PurchaseContent'
    Borra el carrito actual 
*/
export const insertPurchase = async (req, res) => {
    const { paymentMethod } = req.body;
    const id = await actualUserId();
    if (id.error) return res.send(id);
    console.log(id, paymentMethod)

    const { data, error } = await supabase // Agregar Purchase
        .from('Purchase')
        .insert([{ user: id, paymentMethod }])
        .select('id');

    if (data === null || data.length === 0) {
        return res.send({ data: [], error });
    }

    const cart = await getAllCartContentsPurchase(); 

    for (const c of cart.data) {
        await insertPurchaseContentPurchase(data[0].id, c.content);
    }

    // Elimina el carrito 
    await deleteAllCartContentPurchase();

    res.send({ data, error });
};

async function getAllCartContentsPurchase() {
  // const u = await logIn({email:"omarzunigpii@gmail.com", password:"password"});
  const id = await actualUserId();
  if (id.error) return res.send(id);

  const { data, error } = await supabase
      .from('Cart')
      .select('content')
      .eq('user', id);
  return { data, error };
}

async function deleteAllCartContentPurchase() {
  const id = await actualUserId();
  if (id.error) return res.send(id);

  const { data, error } = await supabase
      .from('Cart')
      .delete()
      .eq('user', id);
  return{ data, error };
}

async function insertPurchaseContentPurchase(purchase, content) {
  const { data, error } = await supabase
      .from('PurchaseContent')
      .insert([{ purchase, content }]);
  return { data, error };
};



// Gets the purchase content 
export const getPurchaseContent = async (req, res) => {
    const { id } = req.params;
    const { data, error } = await supabase
        .from('PurchaseContent')
        .select('*')
        .eq('purchase', id);

    if (data === null || data.length === 0) {
        return res.send({ data: [], error });
    }
    
    let contentData = [];

    for (const item of data) {
        const content = await getContentById(item.content);
        contentData.push(content.data[0]);
    }

    res.send({ data: contentData, error });
};

// Gets the total price of the purchase
export const getPurchaseTotalCost = async (req, res) => {
    const { id } = req.params;
    const { data, error } = await supabase
        .rpc('get_total_cost_of_purchase', { purchase_id: id });

    res.send({ data, error });
};

// Get by months
export const getPurchasesLast3Months = async (req, res) => {
    const id = await actualUserId();
    if (id.error) return res.send(id);
    const currentDate = new Date();
    const threeMonthsAgo = new Date(currentDate);
    threeMonthsAgo.setMonth(currentDate.getMonth() - 3);
    const formatDate = (date) => date.toISOString().split('T')[0];

    const { data, error } = await supabase
        .from('Purchase')
        .select('*')
        .gte('purchaseDate', formatDate(threeMonthsAgo))
        .eq('user', id);

    res.send({ data, error });
};


export const getPurchasesLast6Months = async (req, res) => {
    const id = await actualUserId();
    if (id.error) return res.send(id);
    const currentDate = new Date();
    const sixMonthsAgo = new Date(currentDate);
    sixMonthsAgo.setMonth(currentDate.getMonth() - 6);
    const formatDate = (date) => date.toISOString().split('T')[0];
  
    const { data, error } = await supabase
        .from('Purchase')
        .select('*')
        .gte('purchaseDate', formatDate(sixMonthsAgo))
        .eq('user', id);
  
    res.send({ data, error });
}; 

export const getPurchasesLastYear = async (req, res) => {
    const id = await actualUserId();
    if (id.error) return res.send(id);
    const currentDate = new Date();
    const oneYearAgo = new Date(currentDate);
    oneYearAgo.setFullYear(currentDate.getFullYear() - 1);
    const formatDate = (date) => date.toISOString().split('T')[0];
  
    const { data, error } = await supabase
        .from('Purchase')
        .select('*')
        .gte('purchaseDate', formatDate(oneYearAgo))
        .eq('user', id);
  
    res.send({ data, error });
};
