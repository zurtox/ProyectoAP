import supabase from '../config/supabaseClient.js';

// Gets content platforms
export const getContentXPlatformById = async (req, res) => {
    const { id } = req.params;
    const { data, error } = await supabase
        .from('ContentXPlatform')
        .select('platform')
        .eq('content', id);
    res.send({ data, error });
};

// Insert ContentXPlatform
export const insertContentXPlatform = async (req, res) => {
    const { content, platform } = req.body;
    const { data: existingData, error: existingError } = await supabase
        .from('ContentXPlatform')
        .select('id')
        .eq('content', content)
        .eq('platform', platform);
    
    if (existingData && existingData.length > 0) {
        return res.send({ data: null, error: 'Platform already assigned' });
    }

    const { data, error } = await supabase
        .from('ContentXPlatform')
        .insert([{ content, platform }]);
    res.send({ data, error });
};

// Delete ContentXPlatform by id
export const deleteContentXPlatform = async (req, res) => {
    const { content, platform } = req.body;
    const { data, error } = await supabase
        .from('ContentXPlatform')
        .delete()
        .eq('content', content)
        .eq('platform', platform);
    res.send({ data, error });
};
