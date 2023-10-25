"use client";

import { Label, Radio, Button } from "flowbite-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState, useContext } from "react";
import { Context } from "../page";

export default function ProductCard({ data }) {
  const notify = () =>
    toast("🦄 Item adicionado ao carrinho com sucesso!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  //const { showNotInHeader, setShowNotInHeader } = useNotificationContext();

  const [cartCount, setCartCount] = useState(0);
  //const showNotInHeader = useContext(Context);
  const [showNotInHeader, setShowNotInHeader] = useContext(Context);

  const handleAddToCart = () => {
    setCartCount(cartCount + 1);
    setShowNotInHeader(showNotInHeader + 1);
  };

  return (
    <div className="relative flex flex-col w-full max-w-[48rem] lg:flex-row bg-white bg-clip-border text-gray-700">
      <div className="relative flex justify-center w-5/6 p-4 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none shrink-0 rounded-xl bg-clip-border">
        <img
          src="https://cdn.vnda.com.br/400x/bolovo/2023/09/18/17_42_59_467_17_9_0_096_bolovo_online_0017_blv2062.jpg?v=1695069786"
          alt="image"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="p-6">
        <h4 className="block mb-2  text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
          Casaco Top
        </h4>
        <span className="block mb-2  antialiased leading-snug tracking-normal text-blue-gray-900">
          R$ 99
        </span>
        <form className="flex flex-col">
          <div className="py-4">
            <fieldset className="flex max-w-md gap-4" id="radio">
              <div className="flex items-center gap-2">
                <Radio defaultChecked id="pSize" name="size" value="P" />
                <Label htmlFor="pSize">P</Label>
              </div>
              <div className="flex items-center gap-2">
                <Radio id="mSize" name="size" value="M" />
                <Label htmlFor="mSize">M</Label>
              </div>
              <div className="flex items-center gap-2">
                <Radio id="gSize" name="size" value="G" />
                <Label htmlFor="gSize">G</Label>
              </div>
              <div className="flex items-center gap-2">
                <Radio id="ggSize" name="size" value="United Kingdom" />
                <Label htmlFor="ggSize">GG</Label>
              </div>
              <div className="flex items-center gap-2">
                <Radio id="xggSize" name="size" value="XGG" />
                <Label htmlFor="xggSize">XGG</Label>
              </div>
            </fieldset>
          </div>
          <Button
            color="dark"
            outline
            onClick={() => {
              notify();
              handleAddToCart();
            }}
          >
            Comprar
          </Button>
          <ToastContainer />
        </form>
        <div className="py-4">
          <span className="block mb-2 font-sans font-semibold antialiased leading-snug tracking-normal text-blue-gray-900">
            Descrição
          </span>
          <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
            Um casaco moderno e versátil, ideal para os dias frios. Feito de
            material de alta qualidade.
          </p>
        </div>
      </div>
    </div>
  );
}
