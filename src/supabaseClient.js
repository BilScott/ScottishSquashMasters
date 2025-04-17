import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://llbtyprqwwipyasulmmy.supabase.co'; // paste from step 2
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxsYnR5cHJxd3dpcHlhc3VsbW15Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ5MjMxNzYsImV4cCI6MjA2MDQ5OTE3Nn0.uC6cCJz_bnV2qYbrVQLP7Bc7OW-7_TwS6AgB_FFxnhY'; // paste from step 2

export const supabase = createClient(supabaseUrl, supabaseAnonKey);