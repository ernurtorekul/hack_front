"use client";
import React, { useState } from "react";
import Search from "@/components/custom/search";
import { SheetDemo } from "@/components/custom/sheet";

function page() {
  return (
    <div>
      <div className="p-4 space-y-4 mb-12">
        <div>
          <Search />
        </div>
        {/* <div className="flex flex-col justify-center items-center">
        <Cards/>
        </div> */}
        <h1 className="ml-2 text-xl font-bold">Vacancies for u</h1>
        <div className="flex flex-col justify-center items-center">
          <SheetDemo />
          <SheetDemo />
          <SheetDemo />
          <SheetDemo />
        </div>
      </div>
    </div>
  );
}

export default page;
