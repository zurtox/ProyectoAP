import supabase from '../config/supabaseClient.js';

async function getEnumValues(enumName) {
    const { data, error } = await supabase.rpc('get_enum_values', { enum_name: enumName });
    return { data, error };
}

// Get Enum gender
export const getGenders = async (req, res) => {
    const res1 = await getEnumValues('Gender');
    console.log(res1);
    res.send(res1);
}

// Get Enum family roles
export const getFamilyRoles = async (req, res) => {
    const res1 = await getEnumValues('FamilyRoles');
    console.log(res1);
    res.send(res1);
}

// Get Enum movie roles
export const getMovieRoles = async (req, res) => {
    const res1 = await getEnumValues('MovieRoles');
    console.log(res1);
    res.send(res1);
}
