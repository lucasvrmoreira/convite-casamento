import Carrossel from "./Carrossel";
import { motion } from "framer-motion";

export default function Hero() {
  const pixKey = "8cd6dbfd-2a27-4603-9af0-196360336912";

  const copiarChave = () => {
    navigator.clipboard.writeText(pixKey);
    alert("Chave Pix copiada! 💜");
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="min-h-screen w-full relative bg-white overflow-hidden"
    >

      {/* glows de fundo */}
      <div className="absolute -top-32 -left-20 w-80 h-80 bg-purple-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-10 w-96 h-96 bg-pink-200/40 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Cabeçalho */}
        <div className="mb-10 flex flex-col items-center text-center">
          <span className="inline-block text-[10px] uppercase tracking-[0.2em] text-purple-700 bg-purple-100/70 px-3 py-1 rounded-full mb-3">
            Convite de casamento
          </span>

          <div className="flex items-center justify-center gap-4">
            <span className="h-px w-10 bg-purple-200" />
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
              Lucas <span className="text-purple-600">&</span> Vitória
            </h1>
            <span className="h-px w-10 bg-purple-200" />
          </div>

          <p className="text-gray-600 italic mt-2">
            “O amor nos trouxe até aqui.”
          </p>

          <div className="mt-6 max-w-3xl space-y-3 text-gray-700 text-base md:text-lg leading-relaxed text-center">
            <p>
              Já casados no civil, escolhemos o dia 21 de fevereiro de 2026 para receber a benção de Deus.
            </p>

            <p>
              Com crenças diferentes, aprendemos a construir algo que respeitasse os dois caminhos e fizesse sentido para nós.
              Então, nesse dia, teremos primeiramente uma cerimônia intimista na igreja, reservada à família, para que a noiva receba o sacramento do matrimônio.
            </p>


            <p>
              Para que todos possam fazer parte desse momento, faremos uma festinha e uma cerimônia especial durante a comemoração.

            </p>

            <p>
              Como já temos nossa casa, optamos por não fazer lista tradicional de presentes e sim receber agrados em forma de Pix.
              Fiquem à vontade para contribuir com o valor que puderem.
              Abaixo seguem todas as informações.
            </p>

            <p className="italic text-purple-700">
              “O amor tudo sofre, tudo crê, tudo espera, tudo suporta.
              Agora, pois, permanecem a fé, a esperança e o amor; porém o maior destes é o amor.”
              <br />
              <span className="text-sm text-gray-500">1 Coríntios 13:7 e 13</span>
            </p>

          </div>


          <div className="mt-10 flex items-center justify-center gap-4 text-purple-700">
            <span className="h-px w-12 bg-purple-300"></span>
            <span className="text-sm md:text-base font-semibold tracking-widest">
              21 • 02 • 2026

            </span>
            <span className="h-px w-12 bg-purple-300"></span>
          </div>


          <p className="mt-6 max-w-3xl space-y-3 text-gray-700 text-base md:text-lg leading-relaxed text-center">
            Estaremos no verão, em clima tropical e 
            nossa festa é pra curtir, então venham leves e frescos, tipo festinha na praia.
            O importante é estar à vontade e feliz, pronto pra comer, beber e dançar com a gente.
          </p>

          <p className="mt-6 max-w-3xl space-y-3 text-gray-700 text-base md:text-lg leading-relaxed text-center">

            Esperamos vocês !


          </p>

        </div>

        {/* 3 cards alinhados */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center">

          {/* Fotos */}
          <div className="w-full max-w-sm md:max-w-md bg-white rounded-2xl shadow-md hover:shadow-lg border border-gray-100 p-5 transition">
            <h3 className="text-sm font-semibold text-gray-700 mb-4">
              Nossas memórias
            </h3>
            <Carrossel />
            <p className="text-sm text-gray-500 mt-3">
              Alguns momentos nossos 💜
            </p>
          </div>

          {/* Mapa pequeno */}
          <div className="w-full max-w-sm md:max-w-md bg-white rounded-2xl shadow-md hover:shadow-lg border border-gray-100 p-5 transition">
            <h3 className="text-sm font-semibold text-gray-700 mb-4">
              Local e horario
            </h3>

            <div className="w-full h-52 rounded-xl overflow-hidden border border-gray-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.944765219506!2d-47.01369908447779!3d-22.74979998508466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8997c2b8f51d9%3A0xe3f22e2c98f1967!2sR.%20Agostinho%20Ant%C3%B4nio%20Solinski%2C%206%20-%20Ch%C3%A1caras%20Alpinas%2C%20Valinhos%20-%20SP%2C%2013274-465!5e0!3m2!1spt-BR!2sbr!4v1702668023456!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa - Reserva dos Sonhos"
              ></iframe>
            </div>

            <p className="text-sm text-gray-600 mt-3">
              Reserva dos Sonhos — Valinhos/SP
            </p>


            <a
              href="https://www.google.com/maps/search/?api=1&query=R.+Agostinho+Antônio+Solinski,+6+-+Chácaras+Alpina,+Valinhos+-+SP"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center justify-center gap-2 w-full 
             bg-purple-600 hover:bg-purple-700 
             text-white font-semibold py-2 px-4 
             rounded-xl transition"
            >
              📍 Abrir no Google Maps
            </a>



            <p className="text-sm text-gray-600 mt-6 leading-relaxed">
              A casa estará aberta para recepção dos convidados a partir das 17:25h, e a cerimônia terá início às 17:40h pontualmente.
              Após a cerimônia, a festa começa! no mesmo local até as 22:30h.
              Esperamos você para fazer parte disso!

            </p>
          </div>

          {/* Pix */}
          <div className="bg-white rounded-2xl shadow-md hover:shadow-lg border border-purple-100 p-5 transition">
            <h3 className="text-sm font-semibold text-gray-700 mb-4">
              Presente via Pix
            </h3>

            <img
              src="/pix.png"
              className="w-40 sm:w-48 md:w-52 mx-auto rounded-xl shadow-sm"


              alt="QR Pix"
            />

            <p className="text-sm text-gray-600 mt-4">Chave Pix:</p>

            <p className="text-purple-700 font-bold text-sm break-all">
              {pixKey}
            </p>

            <button
              onClick={copiarChave}
              className="mt-4 w-full bg-purple-600 text-white px-4 py-2 rounded-full text-xs shadow hover:bg-purple-700 transition"
            >
              Copiar chave Pix
            </button>

            <p className="text-sm text-gray-500 mt-3">
              Obrigado pelo carinho! 💜
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
