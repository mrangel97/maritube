import { createClient } from "@supabase/supabase-js";

const PROJECT_URL = "https://rbjazwzdscrvfxsmsday.supabase.co";
const PUBLIC_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJiamF6d3pkc2NydmZ4c21zZGF5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njg0NDk5ODIsImV4cCI6MTk4NDAyNTk4Mn0.Dj6aC5c0f3BtWQpkjCL5T1hJ7GShAc7zE-lTLh1mZIM";
const supabase = createClient(PROJECT_URL, PUBLIC_KEY);

export function videoService() {
    return {
        getAllVideos() {
            return supabase.from("video")
                    .select("*");
        }
    }
}