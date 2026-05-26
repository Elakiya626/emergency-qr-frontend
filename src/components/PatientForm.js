import React, { useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import QRCode from "react-qr-code";

const PatientForm = () => {

  const location = useLocation();
  const username = location.state?.username;

  const [form, setForm] = useState({
    fullName: "",
    age: "",
    gender: "",
    bloodGroup: "",

    allergies: "",
    chronicDiseases: "",
    medicines: "",
    surgeries: "",

    diabetic: "",
    heartDisease: "",
    asthma: "",
    epilepsy: "",

    implants: "",
    bloodThinners: "",

    emergencyContactName: "",
    relationship: "",
    emergencyContact: "",

    emergencyNotes: "",
  });

  const [qrId, setQrId] = useState(null);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username) {
      alert("Session expired. Please login again.");
      return;
    }

    try {

      const res = await axios.post(
  "https://emergency-qr-backend-1.onrender.com/api/auth/patient-details",
  {
    username,
    ...form,
  }
);

      setQrId(res.data.qrId);

      alert("Emergency details saved successfully!");

    } catch (err) {

      alert(
        err.response?.data?.message ||
        "Failed to save details"
      );

    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-red-100 py-10 px-5 flex justify-center">

      <div className="bg-white shadow-2xl rounded-[35px] p-8 w-full max-w-6xl">

        {/* TITLE */}
        <div className="text-center mb-10">

          <h1 className="text-5xl font-extrabold text-indigo-700">
            🚑 Emergency Medical Form
          </h1>

          <p className="text-gray-500 mt-3">
            Government Emergency Healthcare Information System
          </p>

        </div>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="grid md:grid-cols-2 gap-5"
        >

          {/* PERSONAL DETAILS */}

          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            onChange={handleChange}
            required
            className="border p-4 rounded-2xl"
          />

          <input
            type="number"
            name="age"
            placeholder="Age"
            onChange={handleChange}
            required
            className="border p-4 rounded-2xl"
          />

          <select
            name="gender"
            onChange={handleChange}
            className="border p-4 rounded-2xl"
          >
            <option>Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>

          <input
            type="text"
            name="bloodGroup"
            placeholder="Blood Group"
            onChange={handleChange}
            className="border p-4 rounded-2xl"
          />

          {/* CRITICAL CONDITIONS */}

          <textarea
            name="allergies"
            placeholder="Allergies"
            onChange={handleChange}
            className="border p-4 rounded-2xl"
          />

          <textarea
            name="chronicDiseases"
            placeholder="Chronic Diseases"
            onChange={handleChange}
            className="border p-4 rounded-2xl"
          />

          <textarea
            name="medicines"
            placeholder="Current Medicines"
            onChange={handleChange}
            className="border p-4 rounded-2xl"
          />

          <textarea
            name="surgeries"
            placeholder="Past Surgeries"
            onChange={handleChange}
            className="border p-4 rounded-2xl"
          />

          {/* SPECIAL CONDITIONS */}

          <input
            type="text"
            name="diabetic"
            placeholder="Diabetic (Yes/No)"
            onChange={handleChange}
            className="border p-4 rounded-2xl"
          />

          <input
            type="text"
            name="heartDisease"
            placeholder="Heart Disease"
            onChange={handleChange}
            className="border p-4 rounded-2xl"
          />

          <input
            type="text"
            name="asthma"
            placeholder="Asthma"
            onChange={handleChange}
            className="border p-4 rounded-2xl"
          />

          <input
            type="text"
            name="epilepsy"
            placeholder="Epilepsy"
            onChange={handleChange}
            className="border p-4 rounded-2xl"
          />

          <textarea
            name="implants"
            placeholder="Pacemaker / Implants"
            onChange={handleChange}
            className="border p-4 rounded-2xl"
          />

          <textarea
            name="bloodThinners"
            placeholder="Blood Thinners"
            onChange={handleChange}
            className="border p-4 rounded-2xl"
          />

          {/* EMERGENCY CONTACT */}

          <input
            type="text"
            name="emergencyContactName"
            placeholder="Emergency Contact Name"
            onChange={handleChange}
            className="border p-4 rounded-2xl"
          />

          <input
            type="text"
            name="relationship"
            placeholder="Relationship"
            onChange={handleChange}
            className="border p-4 rounded-2xl"
          />

          <input
            type="text"
            name="emergencyContact"
            placeholder="Emergency Contact Number"
            onChange={handleChange}
            className="border p-4 rounded-2xl"
          />

          <textarea
            name="emergencyNotes"
            placeholder="Emergency Notes"
            onChange={handleChange}
            className="border p-4 rounded-2xl"
          />

          {/* BUTTON */}
          <button
            type="submit"
            className="md:col-span-2 bg-indigo-600 hover:bg-indigo-700 text-white py-5 rounded-2xl text-xl font-bold shadow-xl"
          >
            Save & Generate Emergency QR
          </button>

        </form>

        {/* QR CARD */}
        {qrId && (

          <div className="mt-12">

            <div className="bg-gradient-to-r from-red-600 to-indigo-700 text-white rounded-[35px] p-8 shadow-2xl">

              <div className="flex flex-col md:flex-row justify-between items-center gap-8">

                {/* LEFT SIDE */}
                <div>

                  <h2 className="text-4xl font-extrabold mb-3">
                    🚑 Emergency QR Card
                  </h2>

                  <p className="text-lg mb-6">
                    Emergency Medical Identification
                  </p>

                  <div className="space-y-3">

                    <p>
                      <span className="font-bold">
                        Name:
                      </span>{" "}
                      {form.fullName}
                    </p>

                    <p>
                      <span className="font-bold">
                        Blood Group:
                      </span>{" "}
                      {form.bloodGroup}
                    </p>

                    <p>
                      <span className="font-bold">
                        Emergency Contact:
                      </span>{" "}
                      {form.emergencyContact}
                    </p>

                  </div>

                </div>

                {/* QR */}
                <div className="bg-white p-5 rounded-3xl shadow-xl">

                  <QRCode
  value={`https://emergency-qr-frontend-qdiv.vercel.app/scan/${qrId}`}
  size={220}
/>

                </div>

              </div>

            </div>

            {/* DOWNLOAD BUTTON */}
            <div className="text-center mt-8">

              <button
                onClick={() => {

                  const data = `
EMERGENCY MEDICAL DETAILS
-------------------------

Full Name: ${form.fullName}

Age: ${form.age}

Gender: ${form.gender}

Blood Group: ${form.bloodGroup}

Allergies: ${form.allergies}

Chronic Diseases: ${form.chronicDiseases}

Medicines: ${form.medicines}

Surgeries: ${form.surgeries}

Diabetic: ${form.diabetic}

Heart Disease: ${form.heartDisease}

Asthma: ${form.asthma}

Epilepsy: ${form.epilepsy}

Implants: ${form.implants}

Blood Thinners: ${form.bloodThinners}

Emergency Contact Name: ${form.emergencyContactName}

Relationship: ${form.relationship}

Emergency Contact: ${form.emergencyContact}

Emergency Notes: ${form.emergencyNotes}
`;

                  const blob = new Blob(
                    [data],
                    { type: "text/plain" }
                  );

                  const url =
                    URL.createObjectURL(blob);

                  const a =
                    document.createElement("a");

                  a.href = url;

                  a.download =
                    "Emergency_Medical_Details.txt";

                  a.click();

                  URL.revokeObjectURL(url);

                }}
                className="bg-green-600 hover:bg-green-700 text-white px-10 py-4 rounded-2xl text-lg font-bold shadow-lg"
              >
                Download Emergency Details
              </button>

            </div>

          </div>

        )}

      </div>

    </div>
  );
};

export default PatientForm;