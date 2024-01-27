import React from "react";
import { Rating } from "../rating";

export const BookCard = (props: {}) => {
  const { cover_url, name, author, summary} = props;

  return (
    <div className="min-w-[624px] w-full mt-2 mr-4 rounded-lg border-2 border-solid border-gray-700 bg-gray-700 cursor-pointer hover:border-gray-500">
      <div className="p-6 flex flex-col gap-4">
        <div className="flex gap-6">
          <img className="w-24" src={cover_url} alt="" />
          <div className="flex flex-col gap-4 justify-between">
            <p className="flex flex-col">
              <strong className="text-base">{name}</strong>
              <span className="text-gray-400 text-sm">{author}</span>
            </p>
            <Rating />
          </div>
        </div>

        <span className="text-base">{summary}</span>
      </div>
    </div>
  );
};
