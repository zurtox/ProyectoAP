import supabase from '../config/supabaseClient.js';
import { actualUserId } from './User.js';

// Select all content
export async function getAllContent() {
    const { data, error } = await supabase
        .from('Content')
        .select('id, title, category, trailer, synopsis, price, publishYear, active');
    return { data, error };
}

// Select content by id
export async function getContentById(id) {
    const { data, error } = await supabase
        .from('Content')
        .select('id, title, category, trailer, synopsis, price, publishYear, active')
        .eq('id', id);
    return { data, error };
}

// Insert content
export async function insertContent({ title, publishYear, category, trailer, synopsis, price }) {
    const userF = await actualUserId(); 

    if (userF.data == null) {
        return { data: null, error: userF.error };
    }

    const user = userF.data[0].id;

    const { data, error } = await supabase
        .from('Content')
        .insert([{ title, publishYear, category, trailer, synopsis, price, lastChangeBy: user }])
        .select('id');

    return { data, error };
}

// Update content by id
export async function updateContent(id, { title, publishYear, category, trailer, synopsis, price }) {
    const userF = await actualUserId(); 

    if (userF.data == null) {
        return { data: null, error: userF.error };
    }

    const user = userF.data[0].id;
    
    const { data, error } = await supabase
        .from('Content')
        .update({ title, publishYear, category, trailer, synopsis, price, lastChangeBy: user })
        .eq('id', id)
        .select('id');

    return { data, error };
}

// Delete content by id
export async function deleteContent(id) {

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

    return { data, error };
}

// Activate Content
export async function activateContent(id) {
    const { data, error } = await supabase
        .from('Content')
        .update({ active: true })
        .eq('id', id);
    return { data, error };
}

// Deactivate Content
export async function deactivateContent(id) {
    const { data, error } = await supabase
        .from('Content')
        .update({ active: false })
        .eq('id', id);
    return { data, error };
}

// Get 250 Content'
export async function getTop250ContentByViews() {
    const { data, error } = await supabase.rpc('get_top_content_by_views');
  
    return { data, error };
}

// Get 250 Content by Type Movie
export async function getTop250ContentMovie() {
    const { data, error } = await supabase.rpc('get_top_content_movie');
  
    return { data, error };
}

// Get 250 Content by Type Serie
export async function getTop250ContentSerie() {
    const { data, error } = await supabase.rpc('get_top_content_serie');
  
    return { data, error };
}

// Get 250 Content by Type Documental
export async function getTop250ContentDocumental() {
    const { data, error } = await supabase.rpc('get_top_content_documental');
  
    return { data, error };
}


// Get 250 Content by Category
export async function getTop250ContentByCategory(category) {
    const { data, error } = await supabase.rpc('get_top_content_by_category', { category_id: category });
  
    if (error) {
      console.error('Error fetching top 250 content by category:', error);
      return { data: null, error };
    }
  
    return { data, error: null };
}
  
// Get 250 Content by Type Documental & Category
export async function getTop250ContentDocumentalCategory(category) {
    const { data, error } = await supabase.rpc('get_top_content_documental_category', { category_id: category });
  
    return { data, error };
}

// Get 250 Content by Type Movie & Category
export async function getTop250ContentMovieCategory(category) {
    const { data, error } = await supabase.rpc('get_top_content_movie_category', { category_id: category });
  
    return { data, error };
}

// Get 250 Content by Type Movie & Category
export async function getTop250ContentSerieCategory(category) {
    const { data, error } = await supabase.rpc('get_top_content_serie_category', { category_id: category });
  
    return { data, error };
}

// Get Stars by content id
export async function getContentStarsId(id) {
    const { data, error } = await supabase.rpc('get_average_stars_by_content_id', { content_id: id });
  
    return { data, error };
}

// Get Stars by content [All content]
export async function getContentStars() {
    const { data, error } = await supabase.rpc('get_average_stars_by_content');
  
    return { data, error };
}

// Get amount of Movies
export async function getAmountMovies() {
    const { data, error } = await supabase.rpc('count_rows_in_table', {table_name: 'Movie'});
  
    return { data, error };
}

// Get amount of Documental
export async function getAmountDocumental() {
    const { data, error } = await supabase.rpc('count_rows_in_table', {table_name: 'Documental'});
  
    return { data, error };
}

// Get amount of Serie
export async function getAmountSerie() {
    const { data, error } = await supabase.rpc('count_rows_in_table', {table_name: 'Serie'});
  
    return { data, error };
}
