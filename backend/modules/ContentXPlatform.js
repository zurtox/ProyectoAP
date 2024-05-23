import supabase from '../src/config/supabaseClient.js';

// Select all ContentXPlatform entries
export async function getAllContentXPlatforms() {
    const { data, error } = await supabase
        .from('ContentXPlatform')
        .select('*');
    return { data, error };
}

// Select ContentXPlatform by id
export async function getContentXPlatformById(id) {
    const { data, error } = await supabase
        .from('ContentXPlatform')
        .select('*')
        .eq('id', id);
    return { data, error };
}

// Insert ContentXPlatform
export async function insertContentXPlatform(content, platform) {
    const { data, error } = await supabase
        .from('ContentXPlatform')
        .insert([{ content, platform }]);
    return { data, error };
}

// Update ContentXPlatform by id
export async function updateContentXPlatform(id, content, platform) {
    const { data, error } = await supabase
        .from('ContentXPlatform')
        .update({ content, platform })
        .eq('id', id);
    return { data, error };
}

// Delete ContentXPlatform by id
export async function deleteContentXPlatform(id) {
    const { data, error } = await supabase
        .from('ContentXPlatform')
        .delete()
        .eq('id', id);
    return { data, error };
}
