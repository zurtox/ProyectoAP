import supabase from '../config/supabaseClient.js';

// Gets content platforms
export async function getContentXPlatformById(id) {
    const { data, error } = await supabase
        .from('ContentXPlatform')
        .select('platform')
        .eq('content', id);
    return { data, error };
}

// Insert ContentXPlatform
export async function insertContentXPlatform({content, platform}) {
    const { data: existingData, error: existingError } = await supabase
        .from('ContentXPlatform')
        .select('id')
        .eq('content', content)
        .eq('platform', platform);
    
    if (existingData && existingData.length > 0) {
        return { data: null, error: 'Platform already assigned' };
    }

    const { data, error } = await supabase
        .from('ContentXPlatform')
        .insert([{ content, platform }]);
    return { data, error };
}

// Delete ContentXPlatform by id
export async function deleteContentXPlatform({content, platform}) {
    const { data, error } = await supabase
        .from('ContentXPlatform')
        .delete()
        .eq('content', content)
        .eq('platform', platform);
    return { data, error };
}
