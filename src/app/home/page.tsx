"use client"
import React, { useState, useEffect } from "react"
import Search from "@/components/custom/search"
import { SheetDemo } from "@/components/custom/sheet"

function Home() {
  const [isHR, setIsHR] = useState(false)

  useEffect(() => {
    const role = localStorage.getItem("userRole")
    if (role) {
      setIsHR(role === "employer")
    }
  }, [])

  return (
    <div>
      <div className={`p-4 space-y-4 mb-12 ${!isHR ? "hidden" : ""}`}>
        <div>
          <Search />
        </div>
        {/* <div className="flex flex-col justify-center items-center">
        <Cards/>
        </div> */}
        <h1 className='ml-2 text-xl font-bold'>Candidates for u</h1>
        <div className='flex flex-col justify-center items-center'>
          <SheetDemo />
          <SheetDemo />
          <SheetDemo />
          <SheetDemo />
        </div>
      </div>
      <div className={`p-4 space-y-4 mb-12 ${!isHR ? "" : "hidden"}`}>
        <div>
          <Search />
        </div>
        {/* <div className="flex flex-col justify-center items-center">
        <Cards/>
        </div> */}
        <h1 className='ml-2 text-xl font-bold'>Vacancies for u</h1>
        <div className='flex flex-col justify-center items-center'>
          <SheetDemo />
          <SheetDemo />
          <SheetDemo />
          <SheetDemo />
        </div>
      </div>
    </div>
  )
}

export default Home
