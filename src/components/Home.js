import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-10 items-center">
          
          {/* LEFT CONTENT */}
          <div>
            <h1 className="text-5xl font-extrabold leading-tight mb-6">
              Emergency Medical Info
              <br />
              Instantly via QR Code
            </h1>

            <p className="text-lg mb-8 max-w-xl">
              A life-saving platform that allows emergency responders to access
              critical patient medical information instantly by scanning a QR code.
            </p>

            <div className="flex gap-4">
              <Link to="/signup">
                <button className="bg-white text-indigo-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100">
                  Get Started
                </button>
              </Link>

              <Link to="/login">
                <button className="border border-white px-6 py-3 rounded-lg rounded-lg hover:bg-white hover:text-indigo-700 transition">
                  Login
                </button>
              </Link>
            </div>
          </div>

          {/* RIGHT SIDE – PLAIN EMPTY SPACE */}
          <div className="hidden md:block"></div>

        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why EmergencyQR?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-3">⚡ Instant Access</h3>
              <p className="text-gray-600">
                Scan the QR code and view patient medical details in seconds.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-3">🔒 Secure</h3>
              <p className="text-gray-600">
                Only essential emergency information is shared safely.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-3">❤️ Life Saving</h3>
              <p className="text-gray-600">
                Helps doctors make faster treatment decisions in emergencies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-10">How It Works</h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              "Signup & Login",
              "Enter Medical Details",
              "Generate QR Code",
              "Scan in Emergency",
            ].map((step, index) => (
              <div
                key={index}
                className="bg-indigo-50 p-6 rounded-lg font-semibold"
              >
                {index + 1}. {step}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="bg-indigo-700 text-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Be Prepared. Save Lives.
        </h2>

        <p className="mb-6">
          Create your emergency QR code today.
        </p>

        <Link to="/signup">
          <button className="bg-white text-indigo-700 px-8 py-3 rounded-lg font-bold hover:bg-gray-100">
            Create QR Now
          </button>
        </Link>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-300 py-8 text-center">
        © 2026 EmergencyQR. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;
