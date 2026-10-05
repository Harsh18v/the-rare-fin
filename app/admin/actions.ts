"use server";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export async function addFish(formData: FormData) {
    const supabase = await createClient();

    const { error } = await supabase.from("fish").insert({
        name: formData.get("name"),
        price: formData.get("price"),
        image_url: formData.get("image_url"),
        stock: Number(formData.get("stock")) || 0,
    });

    if (error) {
        return { error: error.message };
    }

    revalidatePath("/");
    revalidatePath("/admin");
    return { success: true };
}

export async function deleteFish(id: string) {
    const supabase = await createClient();

    const { error } = await supabase.from("fish").delete().eq("id", id);

    if (error) {
        return { error: error.message };
    }

    revalidatePath("/");
    revalidatePath("/admin");
    return { success: true };
}

export async function addAccessory(formData: FormData) {
    const supabase = await createClient();

    const { error } = await supabase.from("accessories").insert({
        name: formData.get("name"),
        price: formData.get("price"),
        image_url: formData.get("image_url"),
        stock: Number(formData.get("stock")) || 0,
    });

    if (error) {
        return { error: error.message };
    }

    revalidatePath("/");
    revalidatePath("/admin");
    return { success: true };
}

export async function deleteAccessory(id: string) {
    const supabase = await createClient();

    const { error } = await supabase.from("accessories").delete().eq("id", id);

    if (error) {
        return { error: error.message };
    }

    revalidatePath("/");
    revalidatePath("/admin");
    return { success: true };
}

export async function logout() {
    const supabase = await createClient();
    await supabase.auth.signOut();
    redirect("/admin/login");
}

export async function updateFish(id: string, formData: FormData) {
    const supabase = await createClient();

    const { error } = await supabase
        .from("fish")
        .update({
            name: formData.get("name"),
            price: formData.get("price"),
            image_url: formData.get("image_url"),
            stock: Number(formData.get("stock")) || 0,
        })
        .eq("id", id);

    if (error) {
        return { error: error.message };
    }

    revalidatePath("/");
    revalidatePath("/admin");
    return { success: true };
}

export async function updateAccessory(id: string, formData: FormData) {
    const supabase = await createClient();

    const { error } = await supabase
        .from("accessories")
        .update({
            name: formData.get("name"),
            price: formData.get("price"),
            image_url: formData.get("image_url"),
            stock: Number(formData.get("stock")) || 0,
        })
        .eq("id", id);

    if (error) {
        return { error: error.message };
    }

    revalidatePath("/");
    revalidatePath("/admin");
    return { success: true };
}

export async function updatePassword(formData: FormData) {
    const supabase = await createClient();
    const password = formData.get("password") as string;

    const { error } = await supabase.auth.updateUser({ password });

    if (error) {
        return { error: error.message };
    }

    return { success: true };
}

export async function sendResetLink(formData: FormData) {
    const supabase = await createClient();
    const email = formData.get("email") as string;

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/auth/confirm?next=/admin/reset-password`,
    });

    if (error) {
        return { error: error.message };
    }

    return { success: true };
}