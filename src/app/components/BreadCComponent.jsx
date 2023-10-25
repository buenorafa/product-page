"use client";

import { Breadcrumb } from "flowbite-react";
import { HiHome } from "react-icons/hi";

export default function BreadCComponent() {
  return (
    <Breadcrumb aria-label="Default breadcrumb example">
      <Breadcrumb.Item href="#" icon={HiHome}>
        <p>Shop</p>
      </Breadcrumb.Item>
      <Breadcrumb.Item href="#">Inverno</Breadcrumb.Item>
      <Breadcrumb.Item>Casacos</Breadcrumb.Item>
    </Breadcrumb>
  );
}
