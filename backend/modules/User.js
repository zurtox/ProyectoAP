import supabase from '../config/supabaseClient.js';

// Sign Up User
// export const signUp = async (req, res) => {
//     const {
//         email, password, firstName, secondName, firstLastName, secondLastName,
//         personalId, birthDate, phone, username, photo, nationality, comunity,
//         gender, administrator
//     } = req.body;


//     let { data, error } = await supabase.auth.signUp({ email, password });
//     console.log(data, error);
//     if (error) {
//         return res.send({ data: null, error: error.message });
//     }

//     if (data) {
//         const { data: insertData, error: insertError } = await supabase
//             .from('User')
//             .insert([{ 
//                 firstName, secondName, firstLastName, secondLastName, personalId, 
//                 birthDate, phone, username, photo, nationality, comunity, gender, 
//                 administrator, user_auth: data.user.id 
//             }]);

//             console.log("Data console log");
//             console.log(insertData);

//             if (insertData && insertData.length == 0 ){
//                 console.log("Llego aqui");
//                 const { data, error } = await supabase.auth.admin.deleteUser(
//                     data.user.id
//                   );
//                 console.log(data, error);
//                 return res.send({ data: null, error: deleteError });
//             }
        
//         return res.send({ data: insertData, error: insertError });

        
//     }

//     res.send({ data: null, error: 'Sign-up failed without specific error' });
// };

// export const signUp = async (req, res) => {
//     const {
//         email, password, firstName, secondName, firstLastName, secondLastName,
//         personalId, birthDate, phone, username, photo, nationality, comunity,
//         gender, administrator
//     } = req.body;

//     // Sign up the user
//     let { data, error } = await supabase.auth.signUp({ email, password });

//     if (error) {
//         return res.send({ data: null, error: error.message });
//     }

//     if (data) {
//         const { user } = data;
//         const { data: insertData, error: insertError } = await supabase
//             .from('User')
//             .insert([{ 
//                 firstName, secondName, firstLastName, secondLastName, personalId, 
//                 birthDate, phone, username, photo, nationality, comunity, gender, 
//                 administrator, user_auth: user.id 
//             }]);

//         // If there is an error inserting into the 'User' table, remove the user from auth
//         console.log("Data console log");
//         console.log(insertData, insertError);
//         if (insertError || insertData == null || insertData.length == 0) {
//             console.log("Llego al if");
//             const { data: deleteData, error: errorData } = await supabase.auth.admin.deleteUser(
//                 user.id
//               )
//               console.log("llego aqui");
//             console.log(deleteData, errorData, user.id);
//             return res.send({ data: null, deleteData, errorData, error: insertError.message });
//         }

//         return res.send({ data: insertData, error: null });
//     }

//     res.send({ data: null, error: 'Sign-up failed without specific error' });
// };

export const signUp = async (req, res) => {
    const {
        email, password, firstName, secondName, firstLastName, secondLastName,
        personalId, birthDate, phone, username, photo, nationality, comunity,
        gender, administrator
    } = req.body;

    const { data: insertData, error: insertError } = await supabase
        .from('User')
        .insert([{ 
            firstName, secondName, firstLastName, secondLastName, personalId, 
            birthDate, phone, username, photo, nationality, comunity, gender, 
            administrator 
            
        }]) .select('id');
        

    if (insertError) {
        return res.send({ data: null, error: insertError.message });
    }

    const userId = insertData[0].id; 

    let { data, error } = await supabase.auth.signUp({ email, password });

    console.log(data, error);

    if (error) {
        await supabase
            .from('User')
            .delete()
            .eq('id', userId);

        return res.send({ data: null, error: error.message });
    }

    const { data: updateData, error: updateError } = await supabase
        .from('User')
        .update({ user_auth: data.user.id })
        .eq('id', userId).select('id');

    if (updateError) {
        return res.send({ data: null, error: updateError.message });
    }

    return res.send({ data: updateData, error: null });
};


// Log In User
export const logIn = async (req, res) => {
    const { email, password } = req.body;
    console.log(email, password)

    const { data, error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
        return res.send({ data: null, error });
    }

    if (!data.user) {
        return res.send({ data: null, error: new Error("User data is missing") });
    }

    const { data: data1, error: error1 } = await supabase
        .from('User')
        .select('*')
        .eq('user_auth', data.user.id);

    if (error1) {
        return res.send({ data: null, error: error1 });
    }

    const updatedData1 = data1.map(item => ({ ...item, email: data.user.email }));

    res.send({ data: updatedData1, error: null });
};

// Get Actual User
export const actualUser = async (req, res) => {
    const { data: { user } } = await supabase.auth.getUser();

    const { data: data1, error: error1 } = await supabase
        .from('User')
        .select('*')    
        .eq('user_auth', user.id);

    if (error1) {
        return res.send({ data: null, error: error1 });
    }

    const updatedData1 = data1.map(item => ({ ...item, email: user.email }));

    res.send({ data: updatedData1, error: null });
};

// Get Actual User ID
export const actualUserId = async () => {
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
        return "User data is missing";
    }

    const { data, error } = await supabase
        .from('User')
        .select('id')
        .eq('user_auth', user.id)
        .single();

    if (error) {
        return error.message;
    }

    return data.id;
};

// Log Out User
export const logOutUser = async (req, res) => {
    let { error } = await supabase.auth.signOut();
    res.send({ error });
};

// Recover Password
export const recoverPassword = async (req, res) => {
    const { email } = req.body;
    let { data, error } = await supabase.auth.resetPasswordForEmail(email);
    res.send({ data, error });
};

// Select All Users
export const getAllUsers = async (req, res) => {
    const { data, error } = await supabase
        .from('User')
        .select();
    res.send({ data, error });
};

// Select User By ID
export const getUserById = async (req, res) => {
    const { id } = req.params;
    const { data, error } = await supabase
        .from('User')
        .select('*')
        .eq('id', id);
    res.send({ data, error });
};

// Update User By ID
export const updateUser = async (req, res) => {
    const { id } = req.params;
    const {
        firstName, secondName, firstLastName, secondLastName, personalId, birthDate,
        email, phone, username, password, photo, nationality, comunity, gender
    } = req.body;

    const { data, error } = await supabase
        .from('User')
        .update({ firstName, secondName, firstLastName, secondLastName, personalId, birthDate, phone, username, photo, nationality, comunity, gender })
        .eq('id', id);

    if (email || password) {
        const { data: authData, error: authError } = await supabase.auth.updateUser({
            email,
            password
        });

        if (authError) {
            return res.send({ data: null, error: authError });
        }
    }

    res.send({ data, error });
};

// Delete User By ID
export const deleteUser = async (req, res) => {
    const { id } = req.params;
    const { data, error } = await supabase
        .from('User')
        .delete()
        .eq('id', id);
    res.send({ data, error });
};

// Count Users By Gender (Helper Function)
const countUsersByGender = async (gender) => {
    const { count, error } = await supabase
        .from('User')
        .select('*', { count: 'exact', head: true })
        .eq('gender', gender);
    return { count, error };
};

// Count Female Users
export const countFemaleUsers = async (req, res) => {
    const { count, error } = await countUsersByGender('Mujer');
    res.send({ count, error });
};

// Count Male Users
export const countMaleUsers = async (req, res) => {
    const { count, error } = await countUsersByGender('Hombre');
    res.send({ count, error });
};

// Count Other Users
export const countOtherUsers = async (req, res) => {
    const { count, error } = await countUsersByGender('Otro');
    res.send({ count, error });
};

// Count Not Defined Users
export const countNotDefinedUsers = async (req, res) => {
    const { count, error } = await countUsersByGender('Prefiero no decirlo');
    res.send({ count, error });
};

// Get Age Distribution
export const getAgeDistribution = async (req, res) => {
    const { data, error } = await supabase.rpc('get_user_age_distribution');
    res.send({ data, error });
};
