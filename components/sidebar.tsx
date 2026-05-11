"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, TranslateIcon, Wallet } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import { AddTransactionDialog } from "./add-transaction-dialog";

const navItems = [
  { name: "Overview", href: "/dashboard", icon: Home },
  { name: "Transactions", href: "/transactions", icon: TranslateIcon },
  { name: "Budgets", href: "/budgets", icon: Wallet },
];

export function Sidebar() {
  const pathname = usePathname();
  
  // Console log to see the current URL tracker in action
  console.log("Current path is:", pathname);

  return (
    <aside className="w-64 border-r bg-white h-screen flex flex-col fixed left-0 top-0">
      <div className="p-6 border-b">
        <h2 className="text-xl font-bold text-primary">ET Tracker</h2>
      </div>

      <nav className="flex-1 p-4 flex flex-col justify-between">
        <div className="space-y-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors group ${
                  isActive 
                    ? "bg-blue-50 text-blue-600 font-semibold" 
                    : "text-gray-600 hover:bg-gray-100 hover:text-black"
                }`}
              >
                <HugeiconsIcon 
                  icon={item.icon} 
                  size={20} 
                  className={isActive ? "text-blue-600" : "text-gray-400 group-hover:text-black"} 
                />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </div>

        <div className="pt-4 border-t">
          <AddTransactionDialog />
        </div>
      </nav>

      <div className="p-4 border-t">
        <div className="flex items-center gap-3 px-4 py-2">
          <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-xs font-bold">
            JD
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold">John Doe</span>
            <span className="text-xs text-gray-500">Free Plan</span>
          </div>
        </div>
      </div>
    </aside>
  );
}
