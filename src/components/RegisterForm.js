import React from 'react';
import { QRCodeSVG } from 'qrcode.react';
import '../styles/QRCodeGenerator.css';

const QRCodeGenerator = ({ userId, userName }) => {
  // Create profile URL with user data
  const profileUrl = `${window.location.origin}/profile/${userId}`;
  
  const downloadQRCode = () => {
    const svg = document.getElementById('qrcode-svg');
    const svgData = new XMLSerializer().serializeToString(svg);
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();
    
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      const pngUrl = canvas.toDataURL('image/png');
      
      const downloadLink = document.createElement('a');
      downloadLink.href = pngUrl;
      downloadLink.download = `${userName}_hackathon_profile.png`;
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    };
    
    img.src = 'data:image/svg+xml;base64,' + btoa(svgData);
  };

  return (
    <div className="qr-generator-container">
      <h3>Your Hackathon Profile QR</h3>
      <div className="qr-code-wrapper">
        <QRCodeSVG 
          id="qrcode-svg"
          value={profileUrl}
          size={200}
          level="H"
          includeMargin={true}
          fgColor="#00f7ff"
          bgColor="#0a0a16"
        />
      </div>
      <p className="qr-instruction">Scan to view hackathon achievements</p>
      <button className="download-btn" onClick={downloadQRCode}>
        Download QR Code
      </button>
    </div>
  );
};

export default QRCodeGenerator;