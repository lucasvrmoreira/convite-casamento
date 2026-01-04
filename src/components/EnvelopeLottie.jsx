import { useRef, useState } from "react";
import Lottie from "lottie-react";
import envelopeAnimation from "../assets/envelope.json";

export default function EnvelopeLottie({ onAbrir }) {
  const lottieRef = useRef(null);
  const [sumir, setSumir] = useState(false);

  const abrirConvite = () => {
    if (lottieRef.current) { // Verificação de segurança
      lottieRef.current.setSpeed(0.6);
      lottieRef.current.playSegments([30, 91], true);
    }
  };

  return (
    <div
      className={`
        min-h-screen flex flex-col items-center justify-center
        bg-gradient-to-br from-[#0f0f14] to-[#1a1a24]
        transition-opacity duration-500
        ${sumir ? "opacity-0" : "opacity-100"}
      `}
    >
      <div
        className="w-72 cursor-pointer"
        onClick={abrirConvite}
      >
        <Lottie
          lottieRef={lottieRef}
          animationData={envelopeAnimation}
          autoplay={false}
          loop={false}
          onComplete={() => {
            setSumir(true);
            setTimeout(onAbrir, 500);
          }}
        />
      </div>

      <p className="mt-6 text-[#e6e1ee] tracking-wide select-none">
        💌 Clique no convite e aguarde
      </p>
    </div>
  );
}
