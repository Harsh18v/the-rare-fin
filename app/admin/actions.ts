"use server";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";




export async function addFish(formData: FormData) {
    const supabase = await createClient();

    await supabase.from("fish").insert({
        name: formData.get("name"),
        price: formData.get("price"),
        image_url: formData.get("image_url"),
    });

    revalidatePath("/");
    revalidatePath("/admin");
}

export async function deleteFish(id: string) {
    const supabase = await createClient();
    await supabase.from("fish").delete().eq("id", id);
    revalidatePath("/");
    revalidatePath("/admin");
}

export async function addAccessory(formData: FormData) {
    const supabase = await createClient();

    await supabase.from("accessories").insert({
        name: formData.get("name"),
        price: formData.get("price"),
        image_url: formData.get("image_url"),
    });

    revalidatePath("/");
    revalidatePath("/admin");
}

export async function deleteAccessory(id: string) {
    const supabase = await createClient();
    await supabase.from("accessories").delete().eq("id", id);
    revalidatePath("/");
    revalidatePath("/admin");
}

export async function logout() {
    const supabase = await createClient();
    await supabase.auth.signOut();
    redirect("/");
}

export async function updateFish(id: string, formData: FormData) {
    const supabase = await createClient();

    await supabase
        .from("fish")
        .update({
            name: formData.get("name"),
            price: formData.get("price"),
            image_url: formData.get("image_url"),
        })
        .eq("id", id);

    revalidatePath("/");
    revalidatePath("/admin");
}

export async function updateAccessory(id: string, formData: FormData) {
    const supabase = await createClient();

    await supabase
        .from("accessories")
        .update({
            name: formData.get("name"),
            price: formData.get("price"),
            image_url: formData.get("image_url"),
        })
        .eq("id", id);

    revalidatePath("/");
    revalidatePath("/admin");
}