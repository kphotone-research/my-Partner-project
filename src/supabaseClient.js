import { createClient } from '@supabase/supabase-js';

// Replace with your actual Supabase URL and key
const supabaseUrl = 'https://qbezfrqsojypxpmyblbc.supabase.co';
const supabaseKey = 'GciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFiZXpmcnFzb2p5cHhwbXlibGJjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQwMjIxNDgsImV4cCI6MjA1OTU5ODE0OH0.FwfbMTlfPQ17OpoMXR3zDL13lwHwm3QlblV5dmHfEVc';
export const supabase = createClient(supabaseUrl, supabaseKey);
