"use client";
import { ChartLineUp } from "@phosphor-icons/react/dist/ssr/ChartLineUp";
import { Sidebar } from "./ui/sidebar";
import { Card } from "./ui/cards/card";

export default function Home() {
  return (
    <main className="flex gap-24 min-h-screen bg-gray-800">
      <div className="flex flex-row pt-4 pl-4">
        <Sidebar />

        <section className="py-12 px-20">
          <div className="text-gray-200 flex gap-2">
            <ChartLineUp className="text-green-100" size={30} />
            <span className="text-2xl font-bold">Início</span>
          </div>

          <div className="pt-12 overflow-auto max-h-screen">
            <h2>Avaliações mais recentes</h2>

            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </section>
      </div>
    </main>
  );
}
