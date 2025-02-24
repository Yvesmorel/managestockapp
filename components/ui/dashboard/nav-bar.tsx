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
  ChartBarIcon
} from "@heroicons/react/16/solid";
const navItems = [
  {
    itemName: "Rapport",
    itemLink: "/dashboard/report",
    itemIcon: ChartBarIcon,
  },
  {
    itemName: "Categories",
    itemLink: "/dashboard/category",
    itemIcon: BuildingStorefrontIcon,
  },
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
          <Link key={itemLink} href={itemLink} className="flex">
            <button
              className={clsx(
                "w-full flex h-[38px] grow items-center justify-start gap-2 rounded  p-3 text-sm  hover:bg-[#e8f1f1] hover:text-[#1e7376]",
                {
                  "bg-[#e8f1f1] text-[#1e7376] font-medium":
                    currentPathname.includes(itemLink),
                },{
                  "font-light":
                    !currentPathname.includes(itemLink),
                }
              )}
            >
              <LinkIcon className="w-4" />
              <p className="hidden md:block">{itemName}</p>
            </button>
          </Link>
        );
      })}
    </div>
  );
};

export default NavBar;
