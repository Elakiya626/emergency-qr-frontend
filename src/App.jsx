import QRCode from "qrcode.react";

function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Emergency QR</h2>

     <QRCode
  value={window.location.origin + "/user/123"}
  size={200}
/>

    </div>
  );
}

export default App;
