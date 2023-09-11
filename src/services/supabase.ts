import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://qwloiigzatnzkgcgepjy.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF3bG9paWd6YXRuemtnY2dlcGp5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM0OTA4NTAsImV4cCI6MjAwOTA2Njg1MH0.bVrQGRIpOVNEE5nUWxibi_cTeylgBUow2Nh6IGpM24o';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
