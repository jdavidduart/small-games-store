import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import type { Session } from "@supabase/supabase-js";
import { supabase } from "../../lib/supabaseClient";

export default function AuthGate() {
  const [session, setSession] = useState<Session | null>(null);
  const router = useRouter();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      if (!session) {
        router.replace("/login"); // si no hay sesión, manda a login
      } else {
        router.replace("/"); // si hay sesión, manda a app
      }
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      if (!session) {
        router.replace("/login");
      } else {
        router.replace("/");
      }
    });

    return () => subscription.unsubscribe();
  }, [router]);

  // Puedes mostrar un loader mientras se verifica la sesión
  if (session === null) {
    return <p>Verificando sesión...</p>;
  }

  return null; // O aquí podrías retornar children si quieres que el componente envuelva tu app
}
