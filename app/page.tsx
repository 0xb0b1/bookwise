"use client";
import { ChartLineUp } from "@phosphor-icons/react/dist/ssr/ChartLineUp";
import { Sidebar } from "./ui/sidebar";
import { Card } from "./ui/cards/card";
import Link from "next/link";
import { CaretRight } from "@phosphor-icons/react/dist/ssr/CaretRight";
import { PopularCard } from "./ui/cards/popular-card";
import { booksMock } from "@/data/books";

export default function Home() {
  return (
    <main className="flex gap-24 min-h-screen bg-gray-800">
      <div className="flex flex-row pt-4 pl-4">
        <Sidebar />

        <section className="py-12 px-20 w-full">
          <div className="text-gray-200 flex gap-2">
            <ChartLineUp className="text-green-100" size={30} />
            <span className="text-2xl font-bold">Início</span>
          </div>

          <div className="pt-12 flex">
            <div className="overflow-auto max-h-screen h-full">
              <h2>Avaliações mais recentes</h2>

              {booksMock?.map((book: any) => <Card {...book} />)}
            </div>

            <div className="ml-8 max-w-[324px] w-screen">
              <div className="flex items-center justify-between text-sm">
                <p className="">Livros populares</p>
                <Link
                  className="text-sm text-purple-100 font-normal inline-flex items-center gap-1"
                  href="/"
                >
                  Ver todos
                  <CaretRight size={16} weight="bold" />
                </Link>
              </div>

              <div className="overflow-auto max-h-screen">
                <div className="">
                  {booksMock?.map((book: any) => <PopularCard {...book} />)}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
