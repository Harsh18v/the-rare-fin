"use server";

import { createClient } from "@/lib/supabase/server";

export async function sendResetLink(formData: FormData) {
    const supabase = await createClient();
    const email = formData.get("email") as string;

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/admin/reset-password`,
    });

    if (error) {
        return { error: error.message };
    }

    return { success: true };
}