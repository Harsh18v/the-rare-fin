import { createClient } from "@/lib/supabase/server";
import AdminDashboard from "@/components/AdminDashboard";

export default async function AdminPage() {
    const supabase = await createClient();

    const { data: fish } = await supabase
        .from("fish")
        .select("*")
        .order("created_at", { ascending: false });

    const { data: accessories } = await supabase
        .from("accessories")
        .select("*")
        .order("created_at", { ascending: false });

    return (
        <AdminDashboard
            initialFish={fish ?? []}
            initialAccessories={accessories ?? []}
        />
    );
}