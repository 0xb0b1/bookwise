"use client";
import React from "react";
import { Sidebar } from "../ui/sidebar";
import { User } from "@phosphor-icons/react/dist/ssr/User";
import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr/MagnifyingGlass";
import { BookOpen } from "@phosphor-icons/react/dist/ssr/BookOpen";
import { Books } from "@phosphor-icons/react/dist/ssr/Books";

import { UserList } from "@phosphor-icons/react/dist/ssr/UserList";
import { BookmarkSimple } from "@phosphor-icons/react/dist/ssr/BookmarkSimple";
import { BookCard } from "../ui/cards/book-card";
import { books } from "@/data/constants/books";

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
            <div className="min-w-[628px] w-full h-screen overflow-auto">
              <div className="w-full h-12 relative mb-8">
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

              <div className="max-w-screen">
                <div className="mt-4">
                  <h2>Há 4 meses</h2>
                  <BookCard {...books[0]} />
                </div>
                <div className="mt-4">
                  <h2>Há 2 meses</h2>
                  <BookCard {...books[1]} />
                </div>
                <div className="mt-4">
                  <h2>Ontem</h2>
                  <BookCard {...books[2]} />
                </div>
                <div className="mt-4">
                  <h2>Há 2 dias</h2>
                  <BookCard {...books[3]} />
                </div>
              </div>
            </div>

            <div className="">
              <div className="ml-8 pb-5 max-w-[324px] h-auto w-screen border-l-[1px] border-l-solid border-l-gray-700 rounded-[10px]">
                <div className="flex flex-col gap-4 items-center text-sm">
                  <img
                    className="w-20 h-20 object-cover rounded-full"
                    src="/Book.png"
                    alt="Profile"
                  />
                  <div className="flex flex-col">
                    <h2 className="text-xl font-bold">Paulo Vicente</h2>
                    <span className="text-sm text-gray-400">
                      membro desde 2023
                    </span>
                  </div>

                  <span className="w-[32px] my-8 h-1 border-0 rounded-full bg-gradient-to-t from-purple-100 to-green-100"></span>

                  <div className="flex flex-col gap-10">
                    <div className="flex items-center gap-5">
                      <BookOpen className="text-green-100" size={38} />
                      <p className="flex flex-col">
                        <strong className="text-base font-bold">853</strong>
                        <span className="text-base text-gray-300">
                          Páginas lidas
                        </span>
                      </p>
                    </div>
                    <div className="flex items-center gap-5">
                      <Books className="text-green-100" size={38} />
                      <p className="flex flex-col">
                        <strong className="text-base font-bold">3</strong>
                        <span className="text-base text-gray-300">
                          Livros avaliados
                        </span>
                      </p>
                    </div>
                    <div className="flex items-center gap-5">
                      <UserList className="text-green-100" size={38} />
                      <p className="flex flex-col">
                        <strong className="text-base font-bold">3</strong>
                        <span className="text-base text-gray-300">
                          Autores lidos
                        </span>
                      </p>
                    </div>
                    <div className="flex items-center gap-5">
                      <BookmarkSimple className="text-green-100" size={38} />
                      <p className="flex flex-col">
                        <strong className="text-base font-bold">Horror</strong>
                        <span className="text-base text-gray-300">
                          Categoria mais lida
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
