/*
==========================================================
Travel Inquiry Management System (TIMS)
Supabase Client
Version : 1.0.0
==========================================================
*/

// ======================================================
// Validate Configuration
// ======================================================

if (!CONFIG || !CONFIG.SUPABASE_URL || !CONFIG.SUPABASE_ANON_KEY) {

    console.error("Supabase configuration is missing.");

} else {

    // ==================================================
    // Create Supabase Client
    // ==================================================

    const supabaseClient = window.supabase.createClient(

        CONFIG.SUPABASE_URL,

        CONFIG.SUPABASE_ANON_KEY

    );

    // Make it available to all JavaScript files

    window.supabaseClient = supabaseClient;

    // ==================================================
    // Console Information
    // ==================================================

    console.log("========================================");
    console.log(APP.NAME);
    console.log("Version :", APP.VERSION);
    console.log("Supabase Client Initialized Successfully");
    console.log("Project :", CONFIG.SUPABASE_URL);
    console.log("========================================");

}