"use client";
import React, { useState } from "react";
import { createContext } from "react";
import FooterComponent from "./components/FooterComponent";
import Header from "./components/Header";
import ProductCard from "./components/ProductCard";
import RelatedCard from "./components/RelatedCard";
import BreadCCcomponent from "./components/BreadCComponent";

const imageData = [
  {
    imgAlt: "Camiseta Off-White",
    imgSrc:
      "https://cdn.vnda.com.br/767x/bolovo/2023/04/24/13_4_9_992_onlinebolovo_0007_bolovo204.jpg?v=1682354160",
    title: "Camiseta Off-White",
    rating: "5.0",
    price: "R$ 89",
  },
  {
    imgAlt: "Mochila Esportiva",
    imgSrc:
      "https://cdn.vnda.com.br/600x/bolovo/2023/10/02/09_46_00_62_9_10_2_266_onlinebolovo_0006_bolovo20103.jpg?v=1696250842",
    title: "Mochila Esportiva",
    price: "R$ 135",
  },
  {
    imgAlt: "Casaco Bolovo",
    imgSrc:
      "https://cdn.vnda.com.br/400x/bolovo/2023/08/18/10_28_09_861_10_8_4_410_15_5_9_989_parkaimperveavelpretacinzaverdecoloridaaprovadaguadeagua12.jpg?v=1692365289",
    title: "Casaco Bolovo",
    price: "R$ 289",
  },
  {
    imgAlt: "Garrafa térmica",
    imgSrc:
      "https://cdn.vnda.com.br/880x/bolovo/2023/04/10/12_4_1_109_blv06glstayhighdrated3652.jpg?v=1681140456",
    title: "Garrafa térmica",
    price: "R$ 45",
  },
];

export const Context = createContext();

export default function MyPage() {
  const [showNotInHeader, setShowNotInHeader] = useState(0);

  return (
    <Context.Provider value={[showNotInHeader, setShowNotInHeader]}>
      <Header />
      <div className="px-8 py-4">
        <BreadCCcomponent />
      </div>
      <section className="px-8 py-6 flex justify-center align-center">
        <ProductCard />
      </section>
      <div className="m-10">
        <h1 className="text-3xl text-center">Produtos Relacionados</h1>
      </div>
      <section className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-4 gap-5 m-5">
        {imageData.map((data, index) => (
          <RelatedCard key={index} data={data} />
        ))}
      </section>
      <FooterComponent />
    </Context.Provider>
  );
}
