/*
==========================================================
Travel Inquiry Management System (TIMS)
Authentication Module
Version : 1.0.0
==========================================================
*/

// ======================================================
// Login User
// ======================================================

async function signIn(email, password) {

    try {

        const { data, error } = await supabaseClient.auth.signInWithPassword({

            email: email,

            password: password

        });

        if (error) {

            throw error;

        }

        return {

            success: true,

            user: data.user,

            session: data.session

        };

    } catch (error) {

        return {

            success: false,

            message: error.message

        };

    }

}



// ======================================================
// Logout User
// ======================================================

async function signOut() {

    try {

        const { error } = await supabaseClient.auth.signOut();

        if (error) {

            throw error;

        }

        return true;

    } catch (error) {

        console.error(error.message);

        return false;

    }

}



// ======================================================
// Get Current Logged-in User
// ======================================================

async function getCurrentUser() {

    try {

        const { data, error } = await supabaseClient.auth.getUser();

        if (error) {

            throw error;

        }

        return data.user;

    } catch (error) {

        console.error(error.message);

        return null;

    }

}



// ======================================================
// Get Current Session
// ======================================================

async function getCurrentSession() {

    try {

        const { data, error } = await supabaseClient.auth.getSession();

        if (error) {

            throw error;

        }

        return data.session;

    } catch (error) {

        console.error(error.message);

        return null;

    }

}



// ======================================================
// Check Login Status
// ======================================================

async function isLoggedIn() {

    const session = await getCurrentSession();

    return session !== null;

}