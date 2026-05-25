import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://vafhjnmaiceoosiitzpa.supabase.co";

const supabaseAnonKey = "sb_publishable_HmRBzZFtsoDZxW712HktCQ_FgE8Y8z0";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
