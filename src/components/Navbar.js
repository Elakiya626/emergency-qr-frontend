import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200 shadow-sm">

      <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">

        {/* LOGO */}
        <Link to="/" className="flex items-center gap-3">

          <div className="bg-red-500 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg">
            🚑
          </div>

          <div>
            <h1 className="text-2xl font-extrabold text-indigo-700 tracking-wide">
              EmergencyQR
            </h1>

            <p className="text-xs text-gray-500">
              Instant Emergency Medical Access
            </p>
          </div>

        </Link>

        {/* NAVIGATION */}
        <div className="hidden md:flex gap-8 items-center text-sm font-semibold">

          <Link
            to="/"
            className="hover:text-indigo-600 transition"
          >
            Home
          </Link>

          <Link
            to="/signup"
            className="hover:text-indigo-600 transition"
          >
            Signup
          </Link>

          <Link
            to="/login"
            className="bg-indigo-600 text-white px-6 py-2.5 rounded-full hover:bg-indigo-700 shadow-lg"
          >
            Login
          </Link>

        </div>

      </div>
    </nav>
  );
};

export default Navbar;