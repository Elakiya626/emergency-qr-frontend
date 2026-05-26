import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>

      {/* HERO SECTION */}
      <section className="gradient-bg text-white overflow-hidden">

        <div className="max-w-7xl mx-auto px-6 py-28 grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div>


            <h1 className="text-6xl font-extrabold leading-tight mb-8">
              Emergency Medical
              <br />
              Information
              <span className="text-red-300">
                {" "}Via QR Code
              </span>
            </h1>

            <p className="text-xl text-indigo-100 max-w-2xl mb-10 leading-relaxed">
              A smart emergency healthcare system that allows
              hospitals, ambulance staff, and first responders
              to instantly access critical patient medical
              information by scanning a QR code.
            </p>

            <div className="flex flex-wrap gap-5">

              <Link to="/signup">
                <button className="bg-white text-indigo-700 px-8 py-4 rounded-2xl font-bold shadow-2xl hover:scale-105">
                  Create Medical QR
                </button>
              </Link>

              <Link to="/login">
                <button className="border border-white/40 bg-white/10 backdrop-blur-lg px-8 py-4 rounded-2xl font-semibold hover:bg-white hover:text-indigo-700">
                  Login
                </button>
              </Link>

            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="hidden md:flex justify-center">

            <div className="glass-card p-10 rounded-[40px] shadow-2xl w-[380px]">

              <div className="bg-white rounded-3xl p-8 text-center text-black">

                <div className="text-7xl mb-5">
                  🚑
                </div>

                <h2 className="text-2xl font-bold mb-4">
                  Emergency Medical Card
                </h2>

                <div className="space-y-4 text-left">

                  <div className="bg-red-50 p-4 rounded-xl">
                    <p className="font-bold text-red-600">
                      Blood Group
                    </p>

                    <p className="text-xl">
                      O+
                    </p>
                  </div>

                  <div className="bg-yellow-50 p-4 rounded-xl">
                    <p className="font-bold">
                      Condition
                    </p>

                    <p>
                      Diabetes
                    </p>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-xl">
                    <p className="font-bold">
                      Allergies
                    </p>

                    <p>
                      Penicillin
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* FEATURES */}
      <section className="py-24 bg-gray-50">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">

            <h2 className="text-5xl font-bold mb-5">
              Why EmergencyQR?
            </h2>

            <p className="text-gray-500 text-lg">
              Built for hospitals, ambulances, governments,
              and emergency response teams.
            </p>

          </div>

          <div className="grid md:grid-cols-3 gap-10">

            {[
              {
                title: "⚡ Instant Access",
                desc: "Emergency responders can instantly access life-saving medical information."
              },
              {
                title: "🔒 Secure & Reliable",
                desc: "Only emergency-related information is shared safely through QR."
              },
              {
                title: "🌍 Global Solution",
                desc: "Designed for worldwide emergency healthcare accessibility."
              }
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition duration-300"
              >
                <h3 className="text-2xl font-bold mb-5">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* HOW IT WORKS */}
      <section className="py-24">

        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-5xl font-bold mb-16">
            How It Works
          </h2>

          <div className="grid md:grid-cols-4 gap-8">

            {[
              "Create Account",
              "Add Medical Details",
              "Generate Unique QR",
              "Scan During Emergency"
            ].map((step, index) => (
              <div
                key={index}
                className="bg-indigo-50 p-8 rounded-3xl font-semibold text-lg shadow-md"
              >
                <div className="text-4xl font-bold text-indigo-600 mb-4">
                  {index + 1}
                </div>

                {step}
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="bg-indigo-700 text-white py-24 text-center">

        <h2 className="text-5xl font-bold mb-6">
          Be Prepared. Save Lives.
        </h2>

        <p className="text-xl mb-10 text-indigo-100">
          Create your emergency medical QR profile today.
        </p>

        <Link to="/signup">
          <button className="bg-white text-indigo-700 px-10 py-4 rounded-2xl font-bold shadow-xl hover:scale-105">
            Create QR Now
          </button>
        </Link>

      </section>

      {/* FOOTER */}
      <footer className="bg-gray-950 text-gray-400 py-10 text-center">
        © 2026 EmergencyQR — Advanced Emergency Medical System
      </footer>

    </div>
  );
};

export default Home;