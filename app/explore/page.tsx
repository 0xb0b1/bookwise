"use client";
import React from "react";
import { Sidebar } from "../ui/sidebar";

export default function Explore() {
  return (
    <div className="flex gap-24 min-h-screen bg-gray-800">
      <div className="flex flex-row pt-4 pl-4">
        <Sidebar />
        <h2 className="text-gray-200">Explorar</h2>
      </div>
    </div>
  );
}
