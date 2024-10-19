"use client"
import Navbar from "../components/Navbar"
import "./globals.css"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <head>
        <script src='https://telegram.org/js/telegram-web-app.js' async></script>
      </head>
      <body>
        <div>{children}</div>

        {/* Conditionally render the appropriate navbar based on the user role */}
        <Navbar />
      </body>
    </html>
  )
}
