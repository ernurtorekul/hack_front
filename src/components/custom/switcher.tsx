import React, { useState, useEffect } from "react";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

type Role = "employee" | "employer";

interface SwitcherProps {
  onSelectRole: (role: Role) => void; // Add onSelectRole prop to handle role changes
}

function Switcher({ onSelectRole }: SwitcherProps) {
  const [isHR, setIsHR] = useState<Role>("employee");

  useEffect(() => {
    // Load the saved role from localStorage on initial render
    const savedRole = localStorage.getItem("userRole") as Role | null;
    if (savedRole) {
      setIsHR(savedRole);
      onSelectRole(savedRole); // Notify parent about the initial role
    }
  }, [onSelectRole]);

  const handleRoleChange = (newRole: Role) => {
    setIsHR(newRole);
    localStorage.setItem("userRole", newRole); // Save the role to localStorage
    onSelectRole(newRole); // Notify parent when the role changes
  };

  return (
    <div>
      <Select value={isHR} onValueChange={handleRoleChange}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select your role" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="employee">Employee</SelectItem>
            <SelectItem value="employer">Employer</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}

export default Switcher;
