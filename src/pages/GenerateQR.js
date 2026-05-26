import QRCode from "react-qr-code";

const GenerateQR = ({ qrId }) => {

  const qrUrl = `https://emergency-qr-backend-1.onrender.com/api/patient/${qrId}`;

  return (
    <div>
      <h2>Your Emergency QR</h2>

      <QRCode value={qrUrl} size={200} />

      <p>Scan to view emergency info</p>
    </div>
  );
};

export default GenerateQR;