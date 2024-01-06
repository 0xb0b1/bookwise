import React from "react";
import { Rating } from "../rating";

export const CommentCard = (props: any)=> {
  const {title, author, description, image} = props;

  return (
    <div className="min-w-[624px] w-full h-[280px] mt-4 mr-4 rounded-lg border-2 border-solid border-gray-700 bg-gray-700 cursor-pointer hover:border-gray-500">
      <div className="p-6 flex flex-col gap-4">
        <div className="flex gap-4 relative">
          <div className="w-10 h-10 border-2 rounded-full"></div>
          <p className="flex flex-col">
            <strong className="text-base text-gray-100">Paulo Vicente</strong>
            <span className="text-gray-400 text-sm">Hoje</span>
          </p>

          <div className="absolute right-0">
            <Rating />
          </div>
        </div>

        <div className="flex gap-6">
          <img className="w-32" src={image} alt="" />
          <div className="flex flex-col gap-4">
            <p className="flex flex-col">
              <strong className="text-base">{title}</strong>
              <span className="text-gray-400 text-sm">{author}</span>
            </p>

            <span className="text-base">
              {description}
              <button className="text-purple-100 font-bold pl-2">
                ver mais
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
