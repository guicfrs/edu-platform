import ThemeToggle from "./components/ThemeToggle";

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white text-black dark:bg-black dark:text-[#c39367]">
      <ThemeToggle />
      <h1 className="text-4xl font-bold">Tailwind ativo!</h1>
    </div>
  );
}

export default App;
