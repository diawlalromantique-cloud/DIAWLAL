const SUPABASE_URL = "https://otuhklirupbobenapyhc.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_sCtyxeGHVbXiAjdVd2Gp8A_yYCLh5Yf";
const diawlalSupabase = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_PUBLISHABLE_KEY
);
window.diawlalSupabase = diawlalSupabase;