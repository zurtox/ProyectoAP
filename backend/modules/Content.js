import supabase from '../config/supabaseClient.js';
import { actualUserId } from './User.js';

// Select all content
export const getAllContent = async(req, res) => {
    const { data, error } = await supabase
        .from('Content')
        .select('id, title, category, trailer, synopsis, price, publishYear, active, photo');
    res.send({ data, error });
}

// Select content by id
export const getContentById = async(req, res) => {
    const { id } = req.params 
    const { data, error } = await supabase
        .from('Content')
        .select('id, title, category, trailer, synopsis, price, publishYear, active, photo')
        .eq('id', id);
    res.send({ data, error });
}

export const getContentByCategory = async(req, res) => {
    const { id } = req.params 
    const { data, error } = await supabase
        .from('Content')
        .select('id, title, category, trailer, synopsis, price, publishYear, active, photo')
        .eq('category', id);
    res.send({ data, error });
}

// Insert content
export async function insertContent({ title, publishYear, category, trailer, synopsis, price, photo }) {
    const userF = await actualUserId(); 

    if (userF.data == null) {
        return { data: null, error: userF.error };
    }

    const user = userF.data[0].id;

    const { data, error } = await supabase
        .from('Content')
        .insert([{ title, publishYear, category, trailer, synopsis, price, lastChangeBy: user, photo }])
        .select('id');

    res.send({ data, error });
}

// Update content by id
export async function updateContent(id, { title, publishYear, category, trailer, synopsis, price, photo }) {
    const userF = await actualUserId(); 

    if (userF.data == null) {
        return { data: null, error: userF.error };
    }

    const user = userF.data[0].id;
    
    const { data, error } = await supabase
        .from('Content')
        .update({ title, publishYear, category, trailer, synopsis, price, lastChangeBy: user, photo })
        .eq('id', id)
        .select('id');

    res.send({ data, error });
}

// Delete content by id
export const deleteContent = async(req, res) => {

    // const id = req
    const { data: contentData, error: contentError } = await supabase
        .from('Record')
        .delete()
        .eq('content', id);

    const { data: contentData1, error: contentError1 } = await supabase
        .from('Cart')
        .delete()
        .eq('content', id);

    const { data: contentData2, error: contentError2 } = await supabase
        .from('ContentXPlatform')
        .delete()
        .eq('content', id);

    const { data: contentData3, error: contentError3 } = await supabase
        .from('FavoriteMovie')
        .delete()
        .eq('content', id);

    const { data: contentData4, error: contentError4 } = await supabase
        .from('MovieParticipant')
        .delete()
        .eq('content', id);

    const { data: contentData5, error: contentError5 } = await supabase
        .from('PurchaseContent')
        .delete()
        .eq('content', id);

    const { data: contentData6, error: contentError6 } = await supabase
        .from('RecentlyViewed')
        .delete()
        .eq('content', id);

    const { data: contentData7, error: contentError7 } = await supabase
        .from('Review')
        .delete()
        .eq('content', id);

    const { data, error } = await supabase
        .from('Content')
        .delete()
        .eq('id', id)
        .select('id');

    res.send({ data, error });
}

// Activate Content
export const activateContent = async(req, res) => {
    const { data, error } = await supabase
        .from('Content')
        .update({ active: true })
        .eq('id', id);
    res.send({ data, error });
}

// Deactivate Content
export const deactivateContent = async(req, res) => {
    const { data, error } = await supabase
        .from('Content')
        .update({ active: false })
        .eq('id', id);
    res.send({ data, error });
}

// Get 250 Content'
export const getTop250ContentByViews = async(req, res) => {
    const { data, error } = await supabase.rpc('get_top_content_by_views');
  
    res.send({ data, error });
}

// Get 250 Content by Type Movie
export const getTop250ContentMovie = async(req, res) => {
    const { data, error } = await supabase.rpc('get_top_content_movie');
  
    res.send({ data, error });
}

// Get 250 Content by Type Serie
export const getTop250ContentSerie= async(req, res) => {
    const { data, error } = await supabase.rpc('get_top_content_serie');
  
    res.send({ data, error });
}

// Get 250 Content by Type Documental
export const getTop250ContentDocumental= async(req, res) => {
    const { data, error } = await supabase.rpc('get_top_content_documental');
  
    res.send({ data, error });
}

// Get 250 Content by Category
export const getTop250ContentByCategory = async(req, res) => {
    const { data, error } = await supabase.rpc('get_top_content_by_category', { category_id: category });
  
    if (error) {
      console.error('Error fetching top 250 content by category:', error);
      return { data: null, error };
    }
  
    return { data, error: null };
}
  
// Get 250 Content by Type Documental & Category
export const getTop250ContentDocumentalCategory = async(req, res) => {
    const { data, error } = await supabase.rpc('get_top_content_documental_category', { category_id: category });
  
    res.send({ data, error });
}

// Get 250 Content by Type Movie & Category
export const getTop250ContentMovieCategory = async(req, res) => {
    const { data, error } = await supabase.rpc('get_top_content_movie_category', { category_id: category });
  
    res.send({ data, error });
}

// Get 250 Content by Type Movie & Category
export const getTop250ContentSerieCategory = async(req, res) => {
    const { data, error } = await supabase.rpc('get_top_content_serie_category', { category_id: category });
  
    res.send({ data, error });
}

// Get Stars by content id
export const getContentStarsId = async(req, res) => {
    const { data, error } = await supabase.rpc('get_average_stars_by_content_id', { content_id: id });
  
    res.send({ data, error });
}

// Get Stars by content [All content]
export const getContentStars = async(req, res) => {
    const { data, error } = await supabase.rpc('get_average_stars_by_content');
  
    res.send({ data, error });
}

// Get amount of Movies
export const getAmountMovies = async(req, res) => {
    const { data, error } = await supabase.rpc('count_rows_in_table', {table_name: 'Movie'});
  
    res.send({ data, error });
}

// Get amount of Documental
export const getAmountDocumental = async(req, res) => {
    const { data, error } = await supabase.rpc('count_rows_in_table', {table_name: 'Documental'});
  
    res.send({ data, error });
}

// Get amount of Serie
export const getAmountSerie = async(req, res) => {
    const { data, error } = await supabase.rpc('count_rows_in_table', {table_name: 'Serie'});
  
    res.send({ data, error });
}

// Is content bought by user? 
export const isContentBought = async(req, res) => {
    const userF = await actualUserId(); 

    if (userF.data == null) {
        return { data: null, error: userF.error };
    }

    const user = userF.data[0].id;

    const { data, error } = await supabase
    .rpc('is_content_bought_by_user', { user_id: user, content_id });

    res.send({ data, error });
}