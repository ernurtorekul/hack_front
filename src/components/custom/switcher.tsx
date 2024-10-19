import React, { useState, useEffect } from "react"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

function Switcher() {
  const [isHR, setIsHR] = useState<boolean>(false)

  useEffect(() => {
    // Load the saved role from localStorage on initial render
    const savedRole = localStorage.getItem("userRole")
    if (savedRole) {
      setIsHR(savedRole === "employer")
    }
  }, [])

  const handleRoleChange = (newRole: string) => {
    setIsHR(newRole === "employer")
    localStorage.setItem("userRole", newRole) // Save the role to localStorage
  }

  return (
    <div className=''>
      <Select value={isHR ? "employer" : "employee"} onValueChange={handleRoleChange}>
        <SelectTrigger className='w-full'>
          <SelectValue placeholder='Are you an employee or employer?' />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value='employee'>Employee</SelectItem> {/* Correctly using value here */}
            <SelectItem value='employer'>Employer</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  )
}

export default Switcher
