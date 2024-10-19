"use client"
import Navbar from "../components/Navbar"
<<<<<<< HEAD
import HrNavbar from "@/app/hr/components/HrNavbar"
import Switcher from "@/components/custom/switcher"
=======
import "./globals.css"
>>>>>>> 7cab5d6 (fixes)

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <head>
        <script src='https://telegram.org/js/telegram-web-app.js' async></script>
        <script src='https://cdn.tailwindcss.com' async></script>
      </head>
      <body>
        <div>{children}</div>

        {/* Conditionally render the appropriate navbar based on the user role */}
        <Navbar />
      </body>
    </html>
  )
}
