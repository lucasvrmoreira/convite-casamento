import { useState } from "react";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import EnvelopeLottie from "./components/EnvelopeLottie";

function App() {
  const [aberto, setAberto] = useState(false);

  return (
    <>
      {!aberto ? (
        <EnvelopeLottie onAbrir={() => setAberto(true)} />
      ) : (
        <>
          <Hero />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
