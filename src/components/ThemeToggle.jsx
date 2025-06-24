import { useEffect, useState } from "react";
import { Button } from "./ui/button";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(
    () => window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  // aplica a classe no <html>
  useEffect(() => {
    const root = document.documentElement;
    if (isDark) root.classList.add("dark");
    else root.classList.remove("dark");
  }, [isDark]);

  return (
    <Button
      variant="outline"
      onClick={() => setIsDark(!isDark)}
      className="fixed top-4 right-4"
    >
      {isDark ? "🌙" : "☀️"}
    </Button>
  );
}
