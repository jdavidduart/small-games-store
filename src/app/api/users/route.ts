import { NextResponse } from "next/server";
import { createServerSupabase } from "../../../../lib/supabaseServer";

export async function GET(request: Request) {
  const supabase = await createServerSupabase();

  // Obtener usuario actual
  const { data, error } = await supabase.auth.getUser();

  if (error || !data.user) {
    return NextResponse.json({ error: "No autenticado" }, { status: 401 });
  }

  // Consulta usuarios que pertenecen a este admin
  const { data: users, error: usersError } = await supabase
    .from("users")
    .select("*")
    .eq("admin_id", data.user.id);

  if (usersError) {
    return NextResponse.json({ error: usersError.message }, { status: 500 });
  }

  return NextResponse.json(users);
}
