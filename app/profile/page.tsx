"use client";
import React, { useState } from "react";
import { Sidebar } from "../ui/sidebar";
import { PopularCard } from "../ui/cards/popular-card";
import { CaretRight } from "@phosphor-icons/react/dist/ssr/CaretRight";
import Link from "next/link";
import { Card } from "../ui/cards/card";
import { ChartLineUp } from "@phosphor-icons/react/dist/ssr/ChartLineUp";
import { User } from "@phosphor-icons/react/dist/ssr/User";
import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr/MagnifyingGlass";

export default function Profile() {

  return (
    <div className="flex gap-24 min-h-screen bg-gray-800">
      <div className="flex flex-row pt-4 pl-4">
        <Sidebar />

        <section className="py-12 px-20 w-full">
          <div className="text-gray-200 flex gap-2">
            <User className="text-green-100" size={30} />
            <span className="text-2xl font-bold">Perfil</span>
          </div>

          <div className="pt-12 flex">
            <div className="">
              <div className="w-full h-12 relative">
                <input
                  className="w-full h-12 border-[1px] px-5 py-[14px] border-solid border-gray-500 bg-gray-800 rounded-[4px] focus:outline-none
                  focus:border-[1px] focus:border-green-200"
                  type="text"
                  placeholder="Buscar livro avaliado"
                />
                <button className="absolute right-6 top-[15px]">
                  <MagnifyingGlass size={20} color="#303F73" />
                </button>
              </div>

              <Card />
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
                  <PopularCard />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
