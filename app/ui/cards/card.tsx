import React from "react";

export const Cart = (props: {}) => {
  return (
    <div className="w-[608px] h-[280px] mt-4 rounded-lg bg-gray-700">
      <div className="p-6 flex flex-col gap-4">
        <div className="flex gap-4">
          <div className="w-10 h-10 border-2 rounded-full"></div>
          <p className="flex flex-col">
            <strong className="text-base text-gray-100">Jaxson Dias</strong>
            <span className="text-gray-400 text-sm">Hoje</span>
          </p>
        </div>

        <div className="flex gap-4">
          <img className="w-32" src="/o-hobbit.png" alt="" />
          <div>
            <p className="flex flex-col">
              <strong className="text-base">O Hobbit</strong>
              <span className="text-gray-400 text-sm">J.R.R Tolkien</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
