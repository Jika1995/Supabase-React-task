import { createClient } from '@supabase/supabase-js';

export const SUPABASE_PROJECT_URL = 'https://clslscxeojswqcdrbtzu.supabase.co';
export const SUPABASE_PROJECT_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNsc2xzY3hlb2pzd3FjZHJidHp1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQ4NjE1MjIsImV4cCI6MjAwMDQzNzUyMn0.YksrRIpA9tN14phN81Ek5f-aU9-_eyhqLiMaC8S2A3o"

export const supabase = createClient(SUPABASE_PROJECT_URL, SUPABASE_PROJECT_ANON_KEY) 
