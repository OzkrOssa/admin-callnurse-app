import React, {useState} from "react";
import QRCode from 'qrcode.react';

export default function GeneradorQr() {

    const [inputText, setInputText] = useState('');
    const [qrCodeText, setQRCodeText] = useState('');
   
    // generate QR code
    const generateQRCode = () => {
      setQRCodeText(inputText);
    }

    const downloadQRCode = () => {
        const qrCodeURL = document.getElementById('qrCodeEl')
          .toDataURL("image/png")
          .replace("image/png", "image/octet-stream");
        console.log(qrCodeURL)
        let aEl = document.createElement("a");
        aEl.href = qrCodeURL;
        aEl.download = "QR_Code.png";
        document.body.appendChild(aEl);
        aEl.click();
        document.body.removeChild(aEl);
      }
  
  return (
    <div className="App">
        <div className="qr-input">
      <input
        type="text"
        placeholder="Enter input"
        value={inputText}
        onChange={e => setInputText(e.target.value)}
      />
      <input
        type="button"
        value="Generate"
        onClick={generateQRCode}
      />
      <input
        type="button"
        className="download-btn"
        value="Download"
        onClick={downloadQRCode}
      />
    </div>
    <QRCode
      id="qrCodeEl"
      size={150}
      value={qrCodeText}
    />
  </div>
  );
}
