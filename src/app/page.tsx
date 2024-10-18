"use client"
import { useEffect, useState } from "react"
import Image from "next/image"

// Define a TypeScript interface for the Telegram user data
interface TelegramUser {
  id: number
  first_name: string
  last_name?: string
  username?: string
  photo_url?: string
}

export default function Home() {
  const [user, setUser] = useState<TelegramUser | null>(null)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  useEffect(() => {
    if (typeof window !== "undefined" && window.Telegram?.WebApp) {
      const telegram = window.Telegram.WebApp
      console.log("initDataUnsafe:", telegram.initDataUnsafe)
      const userData: TelegramUser | undefined = telegram.initDataUnsafe?.user
      if (userData) {
        setUser(userData)
      } else {
        setErrorMessage("User data not found in initDataUnsafe.")
      }
      telegram.ready()
    }
  }, [])

  if (!user) {
    return <p>{errorMessage}</p> // This is the loading state
  }

  return (
    <div>
      <h1>Telegram Mini App</h1>
      <div>
        <p>Username: {user.username ? `@${user.username}` : "No username"}</p>
        <p>First Name: {user.first_name}</p>
        <p>Last Name: {user.last_name}</p>
        <p>ID: {user.id}</p>
        <p>Photo URL: {user.photo_url}</p>
        {user.photo_url ? (
          <Image src={user.photo_url} alt={`${user.first_name}`} width={50} height={50} />
        ) : (
          <p>No profile photo available</p>
        )}
      </div>
    </div>
  )
}
