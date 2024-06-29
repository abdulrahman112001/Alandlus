import React from "react";
import { FaGooglePlay, FaApple } from "react-icons/fa";

function DownloadApp() {
  return (
    <div className="p-8 mx-[50px] text-center">
      <h3 className="text-2xl font-bold text-[#0F2239] mb-4">تحميل تطبيقنا</h3>
      <p className="text-center text-gray-600 mb-4">
        حمل تطبيقنا للحصول على تجربة أفضل وخدمات متميزة
      </p>
      <div className="flex justify-center gap-6">
        <a
          href="https://play.google.com/store"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition"
        >
          <FaGooglePlay className="text-2xl" />
          <span>Google Play</span>
        </a>
        <a
          href="https://www.apple.com/app-store/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg shadow-md hover:bg-gray-800 transition"
        >
          <FaApple className="text-2xl" />
          <span>App Store</span>
        </a>
      </div>
    </div>
  );
}

export default DownloadApp;
