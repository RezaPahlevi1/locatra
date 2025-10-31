import Button from "../components/Button";
import PricingCard from "../components/PricingCard";

function Pricing() {
  const plans = [
    {
      title: "Explorer",
      price: "Gratis",
      features: [
        "Tandai hingga 10 lokasi",
        "Catatan teks singkat",
        "Basic map view",
        "Data tersimpan lokal",
      ],
    },
    {
      title: "Voyager",
      price: "Rp49.000",
      features: [
        "Lokasi tak terbatas",
        "Foto & catatan panjang",
        "Sinkronisasi cloud",
        "Statistik perjalanan",
        "Tema peta kustom",
      ],
      highlighted: true,
    },
    {
      title: "Globetrotter",
      price: "Rp99.000",
      features: [
        "Semua fitur Voyager",
        "Album perjalanan pribadi",
        "Export data ke PDF/image",
        "Integrasi sosial",
        "Early access fitur baru",
      ],
    },
  ];
  return (
    <div className="w-full h-screen text-white bg-[#0C2B4E]">
      <section className="absolute inset-0 flex flex-row items-center justify-center text-center gap-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
          {plans.map((plan, i) => (
            <PricingCard key={i} {...plan} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Pricing;
