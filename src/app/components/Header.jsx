"use client";

import { Dropdown, Tooltip, Navbar } from "flowbite-react";
import Image from "next/image";

import { useContext } from "react";
import { Context } from "../page";

export default function Header() {
  const [showNotInHeader, setShowNotInHeader] = useContext(Context);

  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="#">
        <img
          src="/bolota.png"
          className="mr-3 h-24 "
          alt="Flowbite React Logo"
        />
        {/* <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Lojinha
        </span> */}
      </Navbar.Brand>

      <div className="flex md:order-2 items-center gap-4">
        <Tooltip content="Log-out" placement="bottom">
          <a href="#">
            <Image src="/logout.svg" width={16} height={16} alt="Logout icon" />
          </a>
        </Tooltip>
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <div className="relative">
              <div
                className={
                  showNotInHeader > 0
                    ? "bg-red-500 text-white w-4 h-4 rounded-full text-center font-semibold absolute top-0 right-0 -mt-1 -mr-1 text-xs"
                    : "hidden"
                }
              >
                {showNotInHeader}
              </div>
              <Image src="/cart.svg" width={18} height={18} alt="Cart icon" />
            </div>
          }
        >
          {/* <Dropdown.Header>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">
              name@flowbite.com
            </span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item> */}
        </Dropdown>
        {/* DROP DOWN do carrinho */}
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          Shop
        </Navbar.Link>
        <Navbar.Link href="#">Sobre</Navbar.Link>
        <Navbar.Link href="#">Blog</Navbar.Link>
        <Navbar.Link href="#">Ajuda</Navbar.Link>
        <Navbar.Link href="#">Contato</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
