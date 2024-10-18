"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { SlidersHorizontal } from "lucide-react";

function Search() {
  const [showFilter, setShowFilter] = useState(false);

  const handleFocus = () => setShowFilter(true);
  const handleBlur = () => setShowFilter(false);

  return (
    <div style={{ position: "relative", width: "100%" }}>
      <Input
        type="search"
        placeholder="Search"
        onFocus={handleFocus}
        onBlur={handleBlur}
        style={{ paddingRight: "40px" }}
      />
      {showFilter && (
        <SlidersHorizontal
          style={{
            position: "absolute",
            right: "10px",
            top: "50%",
            transform: "translateY(-50%)",
            cursor: "pointer",
          }}
        />
      )}
    </div>
  );
}

export default Search;
