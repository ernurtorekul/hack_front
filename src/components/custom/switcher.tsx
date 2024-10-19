import React, { useState, useEffect } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface SwitcherProps {
  onSelectRole: (role: string) => void;
}

function Switcher({ onSelectRole }: SwitcherProps) {
  const [role, setRole] = useState<string | null>(null);

  useEffect(() => {
    // Load the saved role from localStorage on initial render
    const savedRole = localStorage.getItem("userRole");
    if (savedRole) {
      setRole(savedRole);
      onSelectRole(savedRole);
    }
  }, [onSelectRole]);

  const handleRoleChange = (newRole: string) => {
    setRole(newRole);
    onSelectRole(newRole);
    localStorage.setItem("userRole", newRole); // Save the role to localStorage
  };

  return (
    <div className="">
      <Select value={role || ""} onValueChange={handleRoleChange}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Are you an employee or employer?" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="employee">Employee</SelectItem>{" "}
            {/* Correctly using value here */}
            <SelectItem value="employer">Employer</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}

export default Switcher;
