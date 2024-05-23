import supabase from '../config/supabaseClient.js';

export async function signUp(email, password, firstName, secondName, firstLastName, secondLastName, personalId, birthDate, phone, username, photo, nationality, comunity, gender, administrator) {
    let { data, error } = await supabase.auth.signUp({
        email,
        password
    });

    if (error) {
        return { data: null, error: error.message };
    }

    if (data) {

        console.log(data.user.id )
        const { data: insertData, error: insertError } = await supabase
            .from('User')
            .insert([{ 
                firstName, 
                secondName, 
                firstLastName, 
                secondLastName, 
                personalId, 
                birthDate, 
                phone, 
                username, 
                photo, 
                nationality, 
                comunity, 
                administrator, 
                user_auth: data.user.id 
            }]);

        return { data: insertData, error: insertError };
    }
    
    return { data: null, error: 'Sign-up failed without specific error' };
}

// Sign In
export async function login(email, password) {
    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
    });

    if (error) {
        return { data: null, error };
    }

    if (!data.user) {
        return { data: null, error: new Error("User data is missing") };
    }

    const { data: data1, error: error1 } = await supabase
        .from('User')
        .select('*')
        .eq('user_auth', data.user.id);

    if (error1) {
        return { data: null, error: error1 };
    }

    const updatedData1 = data1.map(item => ({ ...item, email: data.user.email }));

    return { data: updatedData1, error: null };
}

// Get actual user
export async function actualUser() {
    const { data: { user } } = await supabase.auth.getUser()

    return user;
}

// LogOut User
export async function logOutUser() {
    let { error } = await supabase.auth.signOut()
    return error;
}

// Recover Password
export async function recoverPassword(email) {
    let { data, error } = await supabase.auth.resetPasswordForEmail(email)
    return { data, error };
}

// Select all User entries
export async function getAllUsers() {
    const { data, error } = await supabase
        .from('User')
        .select();
    return { data, error };
}

// Select User by id
export async function getUserById(id) {
    const { data, error } = await supabase
        .from('User')
        .select('*')
        .eq('id', id);
    return { data, error };
}

// Update User by id
export async function updateUser(id, firstName, secondName, firstLastName, secondLastName, personalId, birthDate, email, phone, username, password, photo, nationality, comunity, gender) {
    const { data, error } = await supabase
        .from('User')
        .update({ firstName, secondName, firstLastName, secondLastName, personalId, birthDate, phone, username, photo, nationality, comunity, gender })
        .eq('id', id);

    const { data1, error1 } = await supabase.auth.updateUser({
        email,
        password
    })

    return { data, error };
}

// Delete User by id
export async function deleteUser(id) {
    const { data, error } = await supabase
        .from('User')
        .delete()
        .eq('id', id);
    return { data, error };
}
