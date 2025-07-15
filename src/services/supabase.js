import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://vcutvqssdxgyyykslamm.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZjdXR2cXNzZHhneXl5a3NsYW1tIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgwNzExOTksImV4cCI6MjA2MzY0NzE5OX0.GNUko1eXz8KKdmf9DYe6QQUXNEG4EhByWIIsRGixhpU";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
