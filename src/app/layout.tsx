"use client"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation" // Use useRouter from next/navigation
import Navbar from "../components/Navbar"
import HrNavbar from "@/app/hr/components/HrNavbar"
import Switcher from "@/components/custom/switcher"
import "./globals.css"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const [userRole, setUserRole] = useState<string | null>(null)
  const router = useRouter() // Use Next.js 13 router for navigation

  useEffect(() => {
    const savedRole = localStorage.getItem("userRole")
    if (savedRole) {
      setUserRole(savedRole)
    }
  }, [])

  const handleRoleSelection = (role: string) => {
    setUserRole(role)
    localStorage.setItem("userRole", role)

    // Use client-side navigation to avoid page reload
    if (role === "employer") {
      router.push("/hr/home") // Navigate to HR dashboard
    } else {
      router.push("/home") // Navigate to employee pages
    }
  }

  return (
    <html lang='en'>
      <head>
        <script src='https://telegram.org/js/telegram-web-app.js' async></script>
      </head>
      <body>
        <div>
          <Switcher onSelectRole={handleRoleSelection} />
          {children}
        </div>

        {/* Conditionally render the appropriate navbar based on the user role */}
        {userRole === "employer" ? <HrNavbar /> : <Navbar />}
      </body>
    </html>
  )
}
