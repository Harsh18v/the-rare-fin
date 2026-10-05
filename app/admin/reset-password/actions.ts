"use server";

import { createClient } from "@/lib/supabase/server";

export async function updatePassword(formData: FormData) {
    const supabase = await createClient();
    const password = formData.get("password") as string;

    const { error } = await supabase.auth.updateUser({ password });

    if (error) {
        return { error: error.message };
    }

    return { success: true };
}