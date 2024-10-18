"use client";
import "./globals.css";
import { useEffect } from "react";
import Navbar from "../components/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      !document.getElementById("telegram-web-app-script")
    ) {
      const script = document.createElement("script");
      script.src = "https://telegram.org/js/telegram-web-app.js";
      script.id = "telegram-web-app-script";
      document.head.appendChild(script);

      script.onload = () => {
        console.log("Telegram WebApp script loaded successfully.");
      };
    }
  }, []);

  return (
    <html lang="en">
      <head>
        <script
          src="https://telegram.org/js/telegram-web-app.js"
          async
        ></script>
      </head>
      <body>
        {children}
        <Navbar />
      </body>
    </html>
  );
}
