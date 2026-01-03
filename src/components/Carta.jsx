export default function Carta({ onAbrir }) {
    return (
      <div
        className="
          min-h-screen flex items-center justify-center
          bg-gradient-to-br from-purple-100 to-pink-100
        "
      >
        <div className="bg-white rounded-2xl shadow-2xl p-10 max-w-md text-center">
          <p className="text-sm uppercase tracking-widest text-purple-600 mb-3">
            Convite especial
          </p>
  
          <h1 className="text-2xl font-bold text-gray-800 mb-6">
            Lucas & Vitória
          </h1>
  
          <p className="text-gray-600 mb-8">
            Você foi convidado para celebrar conosco um momento muito especial.
          </p>
  
          <button
            onClick={onAbrir}
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full font-semibold transition"
          >
            💌 Abrir convite
          </button>
        </div>
      </div>
    );
  }
  