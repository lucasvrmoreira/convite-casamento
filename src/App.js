import { useState, Suspense } from "react"; // Adicione Suspense
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import EnvelopeLottie from "./components/EnvelopeLottie";

function App() {
  const [aberto, setAberto] = useState(false);

  return (
    // O Suspense "segura" o erro #299 se o Hero demorar a montar
    <Suspense fallback={<div className="min-h-screen bg-[#0f0f14]" />}>
      {!aberto ? (
        <EnvelopeLottie onAbrir={() => setAberto(true)} />
      ) : (
        <>
          <Hero />
          <Footer />
        </>
      )}
    </Suspense>
  );
}
export default App;