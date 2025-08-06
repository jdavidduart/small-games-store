import { UserLogin } from "@/types/user";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { supabase } from "../../../lib/supabaseClient";

export const useLogin = () => {
  const router = useRouter();
  const [errorOfLogin, setErrorOfLogin] = useState<string | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        router.replace("/"); // si no hay sesión, manda a login
      }
    });
  }, []);

  const onLogin = async (data: UserLogin) => {
    const { error } = await supabase.auth.signInWithPassword({
      email: data.email,
      password: data.password,
    });
    if (error) {
      setErrorOfLogin("Credenciales invalidos");
      return;
    }

    router.push("/");
  };

  return {
    onLogin,
    errorOfLogin,
  };
};
