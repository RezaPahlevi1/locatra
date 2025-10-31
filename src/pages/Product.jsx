function Product() {
  return (
    <div className="w-full min-h-screen bg-[#0C2B4E] flex items-center justify-center px-6 py-20">
      <section className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="relative w-full md:w-1/2 group">
          <img
            src="/bg-nature.jpg"
            alt="Nature"
            className="shadow-2xl w-full h-auto  border-8 border-white"
          />
          <div className="absolute inset-0 rounded-2xl bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>

        <div className="w-full md:w-1/2 text-white space-y-6 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-extrabold">
            Jelajahi Dunia, Simpan Kenanganmu 🌍
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            <span className="font-semibold text-yellow-300">Locatra</span>
            &nbsp;adalah cara baru untuk menandai kota, negara, dan tempat yang
            sudah pernah kamu kunjungi. Tambahkan catatan pribadi, foto, dan
            lihat perjalananmu di peta interaktif. Biarkan setiap langkah punya
            cerita!
          </p>
        </div>
      </section>
    </div>
  );
}

export default Product;
