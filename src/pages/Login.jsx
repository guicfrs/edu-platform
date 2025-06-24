import { useState } from "react";
import { supabase } from "../lib/supabase";

export default function Login() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  async function handleLogin(e) {
    e.preventDefault();
    setStatus("Enviando link...");
    const { error } = await supabase.auth.signInWithOtp({ email });
    if (error) setStatus("Erro: " + error.message);
    else setStatus("Confira seu e-mail e clique no link para entrar.");
  }

  return (
    <div className="flex min-h-screen items-center justify-center">
      <form
        onSubmit={handleLogin}
        className="flex flex-col gap-4 border p-8 rounded-md shadow-md"
      >
        <h1 className="text-2xl font-bold">Entrar</h1>

        <input
          type="email"
          required
          placeholder="Seu e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border px-3 py-2 rounded-md"
        />

        <button
          type="submit"
          className="bg-[#c39367] text-white rounded-md py-2 hover:opacity-90"
        >
          Enviar link mágico
        </button>

        {status && <p className="text-sm">{status}</p>}
      </form>
    </div>
  );
}
