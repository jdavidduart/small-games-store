"use client";
import LoginForm from "./components/loginForm";
import { useLogin } from "./hooks";

export default function Login() {
  const { onLogin, errorOfLogin } = useLogin();
  return <LoginForm onLogin={onLogin} errorOfLogin={errorOfLogin} />;
}
