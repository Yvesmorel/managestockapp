"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import {
  QueueListIcon,
  ClipboardDocumentListIcon,
  ArrowPathRoundedSquareIcon,
  ChatBubbleBottomCenterTextIcon,
  BuildingStorefrontIcon,
} from "@heroicons/react/16/solid";
const navItems = [
  {
    itemName: "Produits",
    itemLink: "/dashboard/products",
    itemIcon: ClipboardDocumentListIcon,
  },
  {
    itemName: "Commandes",
    itemLink: "/dashboard/orders",
    itemIcon: ChatBubbleBottomCenterTextIcon,
  },
  {
    itemName: "Demandes",
    itemLink: "/dashboard/requests",
    itemIcon: ArrowPathRoundedSquareIcon,
  },
];
const NavBar = () => {
  const currentPathname = usePathname();
  return (
    <div className="w-auto h-auto flex flex-col gap-2">
      {navItems.map(({ itemName, itemLink, itemIcon }) => {
        const LinkIcon = itemIcon;
        return (
          <Link href={itemLink} className="flex">
            <button
              className={clsx(
                "w-full flex h-[48px] grow items-center justify-start gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600",
                {
                  "bg-sky-100 text-blue-600": currentPathname === itemLink,
                }
              )}
            >
              <LinkIcon className="w-6" />
              <p className="hidden md:block">{itemName}</p>
            </button>
          </Link>
        );
      })}
    </div>
  );
};

export default NavBar;
