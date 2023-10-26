"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { useQRCode } from "next-qrcode";
import html2canvas from "html2canvas";

export default function Home() {
  const { Image } = useQRCode();
  const qrCodeRef = useRef(null);
  const [UPI, setUPI] = useState("");
  const [Amount, setAmount] = useState();

  const downloadQRCode = () => {
    html2canvas(qrCodeRef.current).then((canvas) => {
      const imageUrl = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = imageUrl;
      link.download = `${Amount}-qr-code.png`;
      link.click();
    });
  };

  return (
    <>
      <div className="bg-blue-600">
        <p className="text-white font-semibold text-center">
          👨🏼‍💻 Create Pre-Set Qr For Payments 👨🏼‍💻
        </p>
      </div>
      <div className=" mt-5 flex justify-center items-start m-4">
        <div className="bg-gray-200 px-8 py-5 rounded-xl shadow-md">
          <form>
            <h1 className="mb-6 text-center text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
              UPI ScanMate
            </h1>
            <div className="mb-4">
              <label
                htmlFor="upi"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Your UPI ID
              </label>
              <input
                type="text"
                id="upi"
                value={UPI}
                onChange={(e) => setUPI(e.target.value)}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="example.upi.id@paytm"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="amount"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Enter Amount
              </label>
              <input
                type="number"
                id="amount"
                placeholder="₹100"
                value={Amount}
                min={1}
                onChange={(e) => setAmount(e.target.value)}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                required
              />
            </div>
            <div className="flex justify-center items-center">
              {/* <button
                type="submit"
                className="mb-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Generate Qr Code
              </button> */}
            </div>
          </form>
          <div className="flex justify-center items-center flex-col mt-4">
            <div ref={qrCodeRef}>
              {/* <div className="animate-pulse flex">
                <div className="rounded bg-slate-700 h-80 w-80"></div>
              </div> */}

              <Image
                text={`upi://pay?pa=${UPI}&am=${Amount}&tn=paidusingqwickpay`}
                alt={"Your Qr code Here"}
                className="shadow shadow-2xl"
                options={{
                  type: "image/png",
                  quality: 0.9,
                  errorCorrectionLevel: "M",
                  margin: 1,
                  scale: 4,
                  width: 300,
                  height: 300,
                  color: {
                    dark: "#000000",
                    light: "#FFFFFFFF",
                  },
                }}
              />
            </div>
            <button
              onClick={downloadQRCode}
              className="mt-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Download QR Code
            </button>
          </div>
        </div>
      </div>

      <footer className="text-gray-600 body-font">
        <div className="container px-5 py-4 mx-auto flex justify-center items-center sm:flex-row flex-col">
          <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-gray-200 sm:py-2 sm:mt-0 mt-1">
            Made with ❤ in India
          </p>

          <p className="text-sm text-indigo-500 sm:ml-4 sm:pl-4 sm:border-gray-200 sm:py-2 sm:mt-0 mt-1">
            <a href="https://www.linkedin.com/in/ujjwal-kushwaha-387699225" className="text-gray-600 ml-1">
              @Zbytes2227
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}
