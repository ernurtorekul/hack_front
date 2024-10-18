"use client";
import { useEffect, useState } from "react";

// Define a TypeScript interface for the Telegram user data
interface TelegramUser {
  id: number;
  first_name: string;
  last_name?: string;
  username?: string;
  photo_url?: string;
}

export default function Home() {
  const [user, setUser] = useState<TelegramUser | null>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://telegram.org/js/telegram-widget.js?15";
    script.setAttribute("data-telegram-login", "skill_Link_bot");
    script.setAttribute("data-size", "large");
    script.setAttribute("data-auth-url", "/api/verifyTelegram");
    script.setAttribute("data-request-access", "write");
    script.async = true;

    const telegramLoginDiv = document.getElementById("telegram-login");
    if (telegramLoginDiv) {
      telegramLoginDiv.innerHTML = ""; // Clear previous content if any
      telegramLoginDiv.appendChild(script); // Append the widget script
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined" && window.Telegram?.WebApp) {
      const telegram = window.Telegram.WebApp;
      const userData: TelegramUser | undefined = telegram.initDataUnsafe?.user;
      if (userData) {
        setUser(userData);
      }
      telegram.ready(); // Notify Telegram that the app is ready
    } else {
      setUser({
        id: 1011196309, // Example user ID
        first_name: "John", // Example first name
        last_name: "Doe", // Example last name
        username: "john_doe", // Example username
        photo_url: "https://example.com/photo.jpg", // Example photo URL
      });
    }
  }, []);

  return (
    <div>
      <h1>Telegram Mini App</h1>
      <div id="telegram-login"></div>{" "}
      {/* This is where the Telegram login widget will be rendered */}
      {user ? (
        <div>
          <p>
            Hello, {user.first_name} {user.last_name || ""}!
          </p>
          <p>Your Telegram ID is {user.id}</p>
          {user.photo_url ? (
            <img
              src={user.photo_url}
              alt="User profile"
              width="100"
              height="100"
            />
          ) : (
            <p>No profile photo available</p>
          )}
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
}
