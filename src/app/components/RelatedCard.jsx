"use client";

import React from "react";
import { Card } from "flowbite-react";

export default function RelatedCard({ data }) {
  return (
    <a href="#">
      <div className="p-4">
        <div className="relative flex flex-col text-gray-700 bg-white shadow-md w-70 rounded-xl bg-clip-border ">
          <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white h-30 rounded-xl bg-clip-border">
            <img src={data.imgSrc} className="object-cover w-full h-full" />
          </div>
          <div className="p-6">
            <div className="flex items-center justify-between mb-2">
              <p className="block  text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                {data.title}
              </p>
              <p className="block  text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                {data.price}
              </p>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}
