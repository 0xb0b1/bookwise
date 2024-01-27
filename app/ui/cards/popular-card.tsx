import React from "react";
import { Rating } from "../rating";
import Image from "next/image";

export const PopularCard = (props: {}) => {
  const {name, author, cover_url} = props;
  console.log(props)

  return (
    <div className="flex bg-gray-700 mt-4 py-6 pl-6 w-full h-36 rounded-lg border-2 border-gray-700 border-solid hover:border-gray-500">
      <img
        className="w-20 h-24"
        src={cover_url}
        alt="Entendendo Algoritimos"
      />
      <div className="pl-[20px] flex flex-col justify-between">
        <p className="flex flex-col">
          <strong className="font-base">{name}</strong>
          <span className="font-sm text-gray-400">{author}</span>
        </p>

        <Rating />
      </div>
    </div>
  );
};
