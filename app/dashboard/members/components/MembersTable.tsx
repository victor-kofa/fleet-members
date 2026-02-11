"use client";

import React from "react";
import { Edit2, MoreHorizontal } from "lucide-react";
import { ASCENDINGSVG } from "@/app/constant/assets";
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
    <table className="w-full text-left">
      <thead>
        <tr className="border-b border-[#F3F3F4] bg-[#F3F3F4]">
          <th className="p-0 text-[12px] font-semibold text-[#475467] uppercase tracking-wider">
            <div className="flex items-center py-3 px-4 gap-1 self-stretch">
              Member
            </div>
          </th>
          <th className="p-0 text-[12px] font-semibold text-[#475467] uppercase tracking-wider w-[247px]">
            <div className="flex items-center py-3 px-4 gap-1 self-stretch">
              Phone Number
            </div>
          </th>
          <th className="p-0 text-[12px] font-semibold text-[#475467] uppercase tracking-wider">
            <div className="flex items-center py-3 px-4 gap-1 self-stretch">
              Access
            </div>
          </th>
          <th className="p-0 text-[12px] font-semibold text-[#475467] uppercase tracking-wider">
            <div className="flex items-center py-3 px-4 gap-1 self-stretch">
              Current Motorcycle
            </div>
          </th>
          <th className="p-0 text-[12px] font-semibold text-[#475467] uppercase tracking-wider">
            <div className="flex items-center py-3 px-4 gap-1 self-stretch">
              Swaps This Month
              <div
                className="h-3 w-3 bg-gray-400"
                style={{
                  maskImage: `url(${ASCENDINGSVG})`,
                  maskRepeat: "no-repeat",
                  maskPosition: "center",
                  maskSize: "contain",
                  WebkitMaskImage: `url(${ASCENDINGSVG})`,
                  WebkitMaskRepeat: "no-repeat",
                  WebkitMaskPosition: "center",
                  WebkitMaskSize: "contain",
                }}
              />
            </div>
          </th>
          <th className="p-0 text-[12px] font-semibold text-[#475467] uppercase tracking-wider">
            <div className="flex items-center py-3 px-4 gap-1 self-stretch">
              Last Swap
            </div>
          </th>
          <th className="p-0 text-[12px] font-semibold text-[#475467] uppercase tracking-wider text-right">
            <div className="flex items-center justify-end py-3 px-4 gap-1 self-stretch">
              Actions
            </div>
          </th>
        </tr>
      </thead>
      <tbody className="divide-y divide-[#F3F3F4]">
        {members.map((member, i) => (
          <tr
            key={i}
            className={cn(
              "group hover:bg-gray-50/50 transition-colors border-b border-[#F3F3F4] last:border-b-0",
            )}
          >
            <td className="p-0">
              <div className="flex h-[68px] px-4 items-center gap-3">
                <div className="border-0 rounded px-1 w-full min-h-[18px] flex flex-col justify-center leading-none">
                  <span className="text-[13px] font-semibold text-[#101828] mb-0.5">
                    {member.name}
                  </span>
                  <span className="text-[12px] text-[#475467] font-medium">
                    {member.type}
                  </span>
                </div>
              </div>
            </td>
            <td className="p-0">
              <div className="flex h-[68px] px-4 items-center gap-3">
                <div className="border-0 rounded px-1 flex items-center  w-full h-[18px] text-[13px] text-[#475467] leading-none">
                  {member.phone}
                </div>
              </div>
            </td>
            <td className="p-0">
              <div className="flex h-[68px] px-4 items-center gap-3">
                <div className="border-0 rounded px-1 flex items-center w-full h-[18px] text-[13px] text-[#475467] leading-none">
                  {member.access}
                </div>
              </div>
            </td>
            <td className="p-0">
              <div className="flex h-[68px] px-4 items-center gap-3">
                <div className="border-0 rounded px-1 flex items-center w-full h-[18px] text-[13px] text-[#475467] leading-none">
                  {member.motorcycle}
                </div>
              </div>
            </td>
            <td className="p-0">
              <div className="flex h-[68px] px-4 items-center gap-3">
                <div className="border-0 rounded px-1 flex items-center w-full h-[18px] text-[13px] text-[#101828] font-medium leading-none">
                  {member.swaps}
                </div>
              </div>
            </td>
            <td className="p-0">
              <div className="flex h-[68px] px-4 items-center gap-3">
                <div className="border-0 rounded px-1 flex items-center w-full h-[18px] text-[13px] text-[#475467] leading-none">
                  {member.lastSwap}
                </div>
              </div>
            </td>
            <td className="p-0">
              <div className="flex h-[68px] px-4 items-center justify-end gap-3">
                <div className="border-0 rounded px-1 flex items-center h-[18px] gap-3">
                  <button className="text-gray-400 hover:text-gray-900 transition-colors">
                    <Edit2 className="h-3 w-3" />
                  </button>
                  <button className="text-gray-400 hover:text-gray-900 transition-colors">
                    <MoreHorizontal className="h-3 w-3" />
                  </button>
                </div>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
