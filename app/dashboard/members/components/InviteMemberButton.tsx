"use client";

import React, { useState } from "react";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { InviteMembersModal } from "./InviteMembersModal";
import { USER, BRIEFCASE } from "@/app/constant/assets";
import Image from "next/image";

export function InviteMemberButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="relative">
      <Button
        className="flex items-center gap-2 bg-[#f59e0b] hover:bg-[#d97706] text-black border-none h-[38px] px-4 rounded-lg font-semibold text-[13px]"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        Invite member(s)
        <Plus className="h-4 w-4" />
      </Button>

      {isDropdownOpen && (
        <div className="absolute right-0 mt-2 w-44 bg-white border border-gray-100 rounded-lg shadow-lg z-50 py-1 animate-in fade-in slide-in-from-top-2 duration-200">
          <button
            onClick={() => {
              setIsDropdownOpen(false);
              setIsModalOpen(true);
            }}
            className="w-full px-4 py-2.5 text-[13px] text-[#475467] hover:bg-gray-50 flex items-center justify-between group transition-colors"
          >
            Individual
            <Image
              src={USER}
              alt=""
              width={16}
              height={16}
              className="opacity-60 group-hover:opacity-100 transition-opacity"
            />
          </button>
          <button
            onClick={() => setIsDropdownOpen(false)}
            className="w-full px-4 py-2.5 text-[13px] text-[#475467] hover:bg-gray-50 flex items-center justify-between group transition-colors"
          >
            Company
            <Image
              src={BRIEFCASE}
              alt=""
              width={16}
              height={16}
              className="opacity-60 group-hover:opacity-100 transition-opacity"
            />
          </button>
        </div>
      )}

      <InviteMembersModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
