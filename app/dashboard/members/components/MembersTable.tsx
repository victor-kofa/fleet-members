"use client";

import React from "react";
import { Edit2, MoreHorizontal, ArrowUpDown } from "lucide-react";
import { cn } from "@/lib/utils";

const members = [
  {
    name: "Travis Hill",
    type: "Individual",
    phone: "+233 20 100 1000",
    access: "1 motorcycle(s)",
    motorcycle: "M-25-GR 727",
    swaps: 23,
    lastSwap: "Jan. 23, 2025 12:03PM",
  },
  {
    name: "Speed Deliveries",
    type: "Company",
    phone: "+233 20 100 1000",
    access: "5 motorcycle(s)",
    motorcycle: "M-25-GR 727",
    swaps: 11,
    lastSwap: "Jan. 23, 2025 12:03PM",
  },
  {
    name: "Angela Forson",
    type: "Individual",
    phone: "+233 20 100 1000",
    access: "5 motorcycle(s)",
    motorcycle: "M-25-GR 727",
    swaps: "09",
    lastSwap: "Jan. 23, 2025 12:03PM",
  },
  {
    name: "Jermain Arthur",
    type: "Individual",
    phone: "+233 20 100 1000",
    access: "5 motorcycle(s)",
    motorcycle: "M-25-GR 727",
    swaps: 34,
    lastSwap: "Jan. 23, 2025 12:03PM",
  },
  {
    name: "David Scott",
    type: "Individual",
    phone: "+233 20 100 1000",
    access: "5 motorcycle(s)",
    motorcycle: "M-25-GR 727",
    swaps: 12,
    lastSwap: "Jan. 23, 2025 12:03PM",
  },
  {
    name: "Joana Koomson",
    type: "Individual",
    phone: "+233 20 100 1000",
    access: "5 motorcycle(s)",
    motorcycle: "M-25-GR 727",
    swaps: 35,
    lastSwap: "Jan. 23, 2025 12:03PM",
  },
  {
    name: "Travis Hill",
    type: "Individual",
    phone: "+233 20 100 1000",
    access: "5 motorcycle(s)",
    motorcycle: "M-25-GR 727",
    swaps: 32,
    lastSwap: "Jan. 23, 2025 12:03PM",
  },
  {
    name: "A13 Courier Service",
    type: "Company",
    phone: "+233 20 100 1000",
    access: "5 motorcycle(s)",
    motorcycle: "M-25-GR 727",
    swaps: 24,
    lastSwap: "Jan. 23, 2025 12:03PM",
  },
  {
    name: "Christabel Adjei",
    type: "Individual",
    phone: "+233 20 100 1000",
    access: "5 motorcycle(s)",
    motorcycle: "M-25-GR 727",
    swaps: "08",
    lastSwap: "Jan. 23, 2025 12:03PM",
  },
  {
    name: "Anthony Owusu",
    type: "Individual",
    phone: "+233 20 100 1000",
    access: "5 motorcycle(s)",
    motorcycle: "M-25-GR 727",
    swaps: 19,
    lastSwap: "Jan. 23, 2025 12:03PM",
  },
];

export function MembersTable() {
  return (
    <table className="w-full text-left border-collapse">
      <thead>
        <tr className="border-b border-gray-100 bg-gray-50/50">
          <th className="px-6 py-4 text-[13px] font-semibold text-gray-900 border-r border-gray-100 last:border-r-0">
            Member
          </th>
          <th className="px-6 py-4 text-[13px] font-semibold text-gray-900 border-r border-gray-100 last:border-r-0">
            Phone Number
          </th>
          <th className="px-6 py-4 text-[13px] font-semibold text-gray-900 border-r border-gray-100 last:border-r-0">
            Access
          </th>
          <th className="px-6 py-4 text-[13px] font-semibold text-gray-900 border-r border-gray-100 last:border-r-0">
            Current Motorcycle
          </th>
          <th className="px-6 py-4 text-[13px] font-semibold text-gray-900 border-r border-gray-100 last:border-r-0">
            <div className="flex items-center gap-2">
              Swaps This Month
              <ArrowUpDown className="h-3 w-3 text-gray-400" />
            </div>
          </th>
          <th className="px-6 py-4 text-[13px] font-semibold text-gray-900 border-r border-gray-100 last:border-r-0">
            Last Swap
          </th>
          <th className="px-6 py-4 text-[13px] font-semibold text-gray-900 text-right">
            Actions
          </th>
        </tr>
      </thead>
      <tbody>
        {members.map((member, i) => (
          <tr
            key={i}
            className={cn(
              "border-b border-gray-50 last:border-b-0 group hover:bg-gray-50/80 transition-colors",
            )}
          >
            <td className="px-6 py-4">
              <div className="flex flex-col">
                <span className="text-[14px] font-medium text-gray-900">
                  {member.name}
                </span>
                <span className="text-[12px] text-gray-500">{member.type}</span>
              </div>
            </td>
            <td className="px-6 py-4 text-[13px] text-gray-600">
              {member.phone}
            </td>
            <td className="px-6 py-4 text-[13px] text-gray-600">
              {member.access}
            </td>
            <td className="px-6 py-4 text-[13px] text-gray-600">
              {member.motorcycle}
            </td>
            <td className="px-6 py-4 text-[13px] text-gray-600">
              {member.swaps}
            </td>
            <td className="px-6 py-4 text-[13px] text-gray-600">
              {member.lastSwap}
            </td>
            <td className="px-6 py-4">
              <div className="flex items-center justify-end gap-2">
                <button className="p-1.5 text-gray-400 hover:text-gray-600 hover:bg-white rounded-md transition-all shadow-sm border border-transparent hover:border-gray-100">
                  <Edit2 className="h-4 w-4" />
                </button>
                <button className="p-1.5 text-gray-400 hover:text-gray-600 hover:bg-white rounded-md transition-all shadow-sm border border-transparent hover:border-gray-100">
                  <MoreHorizontal className="h-4 w-4" />
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
