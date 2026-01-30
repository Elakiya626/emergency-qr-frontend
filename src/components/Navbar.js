import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b">
      <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="text-2xl">🚑</span>
          <h1 className="text-xl font-bold text-indigo-600 tracking-wide">
            EmergencyQR
          </h1>
        </div>

        {/* Links */}
        <div className="flex gap-8 items-center text-sm font-medium">
          <Link to="/" className="hover:text-indigo-600 transition">
            Home
          </Link>
          <Link to="/signup" className="hover:text-indigo-600 transition">
            Signup
          </Link>
          <Link to="/login">
            <button className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition shadow-md">
              Login
            </button>
          </Link>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
