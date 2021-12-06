import React, { useState } from "react";
import QRCode from "qrcode.react";

export default function GeneradorQr() {
  const [data, setData] = useState({
    nombre: "",
    apellido: "",
    edad: "",
    sexo: "",
    cuarto: "",
    cama: "",
    activo: "",
  });

  const datos = {
    nombre: data.nombre,
    apellido: data.apellido,
    edad: data.edad,
    sexo: data.sexo,
    cuarto: data.cuarto,
    activo: data.activo,
  }
  const [qrCodeText, setQRCodeText] = useState("");

  // generate QR code
  const generateQRCode = () => {
    setQRCodeText(JSON.stringify(datos));
    console.log(qrCodeText);
    setData({
      nombre: "",
      apellido: "",
      edad: "",
      sexo: "",
      cuarto: "",
      cama: "",
      activo: "",
    })
    
  };

  const downloadQRCode = () => {
    const qrCodeURL = document
      .getElementById("qrCodeEl")
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    console.log(qrCodeURL);
    let aEl = document.createElement("a");
    aEl.href = qrCodeURL;
    aEl.download = "QR_Code.png";
    document.body.appendChild(aEl);
    aEl.click();
    document.body.removeChild(aEl);
  };

  return (
    <div className="p-3 justify-center">
      <form className="w-full max-w-lg">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              Nombre
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              onChange={(e) => setData({ ...data, nombre: e.target.value })}
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-last-name"
            >
              Apellido
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              onChange={(e) => setData({ ...data, apellido: e.target.value })}
              
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              Edad
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              onChange={(e) => setData({ ...data, edad: e.target.value })}
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-last-name"
            >
              Sexo
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              onChange={(e) => setData({ ...data, sexo: e.target.value })}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              Cuarto
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              onChange={(e) => setData({ ...data, cuarto: e.target.value })}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-last-name"
            >
              Activo
            </label>
            <div className="relative">
              <select
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-state"
                onChange={(e) => setData({ ...data, activo: e.target.value })}
                defaultValue={'DEFAULT'}
              >
                <option value="DEFAULT" disabled>Selecionar</option>
                <option value='true'>Si</option>
                <option value='false'>No</option>
              </select>
            </div>
          </div>
        </div>
      </form>

      <div className="p-3">
        <div className="text-center p-3 justify-center">
        <button onClick={generateQRCode} className="bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded">
          Click para genear QRCode
        </button>
        </div>
        <div className="text-center p-3 justify-center">
        <button onClick={downloadQRCode} className="bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded">
          Click para descargar QRCode
        </button>
        </div>
        <QRCode id="qrCodeEl" size={150} value={qrCodeText} />
      </div>
    </div>
  );
}
