import { UserLogin } from "@/types/user";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const useLogin = () => {
  const router = useRouter();
  const [errorOfLogin, setErrorOfLogin] = useState<string | null>(null);
  const listOfAdmins = [
    {
      email: "jose@gmail.com",
      password: "123456",
    },
    {
      email: "jhon@hotmail.com",
      password: "alreves",
    },
  ];
  const onLogin = (data: UserLogin) => {
    const result = listOfAdmins.find((user) => user.email === data.email);
    console.log(result);
    if (result) {
      if (data.password === result.password) {
        router.push("/");
      } else {
        setErrorOfLogin("La clave es invalida");
      }
    } else {
      setErrorOfLogin("El Usuario no existe");
    }
  };
  return {
    onLogin,
    errorOfLogin,
  };
};
