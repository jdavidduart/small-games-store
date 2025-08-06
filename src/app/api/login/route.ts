import { NextResponse } from "next/server";
import { createServerSupabase } from "../../../../lib/supabaseServer";

export async function POST(request: Request) {
  const supabase = createServerSupabase(); // 👈 ya no es Promise
  const { email, password } = await request.json();

  /*   const { data, error } = await (
    await supabase
  ).auth.signInWithPassword({
    email,
    password,
  });
  console.log(data);
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 401 });
  } */

  return NextResponse.json({ user: "asddassaas" }, { status: 200 });
}
