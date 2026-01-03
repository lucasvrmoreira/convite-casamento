import { useState, useEffect } from "react";

export default function Carrossel() {
  const imagens = [
    "/fotos/foto1.jpg",
    "/fotos/foto2.jpg",
    "/fotos/foto3.jpg",
    "/fotos/foto4.jpg",
    "/fotos/foto5.jpg",
    "/fotos/foto6.jpg",
    
  ];

  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % imagens.length);
        setFade(true);
      }, 250);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-52 rounded-xl overflow-hidden border border-gray-100 bg-black">
      <img
        src={imagens[index]}
        alt="Foto do casal"
        className={`w-full h-full object-cover transition-opacity duration-500 ${
          fade ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}
