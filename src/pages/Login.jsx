import Button from "../components/Button";

function Login() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-linear-to-br from-[#0C2B4E] via-[#0A2340] to-[#081C33] text-white">
      <section className="w-full max-w-md bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-2xl p-8 text-center">
        <h2 className="text-3xl font-bold mb-6 text-yellow-300">
          Selamat Datang!
        </h2>
        <p className="text-gray-200 mb-8 text-sm">
          Masuk ke akun kamu untuk melanjutkan perjalananmu 🌍
        </p>

        <form className="flex flex-col gap-5">
          <input
            type="email"
            placeholder="Email"
            className="bg-white/90 text-slate-900 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-300"
          />
          <input
            type="password"
            placeholder="Password"
            className="bg-white/90 text-slate-900 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-300"
          />
          <Button variant="primary">Login</Button>
        </form>

        <p className="text-sm text-gray-300 mt-6">
          Belum punya akun?{" "}
          <a href="#" className="text-yellow-300 hover:underline">
            Daftar sekarang
          </a>
        </p>
      </section>
    </div>
  );
}

export default Login;
