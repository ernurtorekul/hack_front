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
    if (typeof window !== "undefined" && window.Telegram?.WebApp) {
      const telegram = window.Telegram.WebApp;
      const userData: TelegramUser | undefined = telegram.initDataUnsafe?.user;
      if (userData) {
        setUser(userData); // Set the user state with the fetched data
      }
      telegram.ready(); // Notify Telegram that the app is ready
    } 
  }, []);

  return (
    <div>
      <h1>Telegram Mini App</h1>
      {user ? (
        <div>
                    <p>
            Username: {user.username ? `@${user.username}` : "No username"}
          </p>
          {user.photo_url ? (
            <img src={user.photo_url} alt={`${user.first_name}'s photo`} width={50} height={50} />
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
