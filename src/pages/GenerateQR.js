import QRCode from "react-qr-code";

const GenerateQR = ({ qrId }) => {
  const qrUrl = `http://localhost:3000/scan/${qrId}`;

  return (
    <div>
      <h2>Your Emergency QR</h2>
      <QRCode value={qrUrl} size={200} />
      <p>Scan to view emergency info</p>
    </div>
  );
};

export default GenerateQR;
