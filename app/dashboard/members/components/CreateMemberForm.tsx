"use client";

import React from "react";
import { X, ChevronDown, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import { RECTANGLE } from "@/app/constant/assets";

interface CreateMemberFormProps {
  onBack: () => void;
  onClose: () => void;
}

export function CreateMemberForm({ onBack, onClose }: CreateMemberFormProps) {
  return (
    <>
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-[#F3F3F4] bg-white self-stretch">
        <div className="flex items-center gap-3">
          <button
            onClick={onBack}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <h2 className="text-[15px] font-semibold text-[#101828]">
            Create new member
          </h2>
        </div>
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-gray-600 transition-colors p-1"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      <div className="flex flex-col items-center gap-3 pt-4 px-4 pb-6 bg-white border-t border-b border-white/15 self-stretch">
        <p className="text-[14px] text-[#475467] self-start mb-1">
          Add your new member by phone number
        </p>

        <div className="w-full space-y-[12px]">
          {/* First Name */}
          <div className="flex flex-col items-start gap-[4px] w-[504px]">
            <label className="text-[13px] font-medium text-[#344054]">
              First name
            </label>
            <input
              type="text"
              placeholder="Kofi"
              className="w-full px-3 py-[10px] border border-[#E7E8E9] rounded-[2px] bg-white text-[14px] text-[#101828] outline-none focus:border-amber-500 transition-colors"
            />
          </div>

          {/* Last Name */}
          <div className="flex flex-col items-start gap-1 w-[504px]">
            <label className="text-[13px] font-medium text-[#344054]">
              Last name
            </label>
            <input
              type="text"
              placeholder="Aggrey"
              className="w-full px-3 py-[10px] border border-[#E7E8E9] rounded-[2px] bg-white text-[14px] text-[#101828] outline-none focus:border-amber-500 transition-colors"
            />
          </div>

          {/* Phone Number */}
          <div className="flex flex-col items-start gap-1 w-[504px]">
            <label className="text-[13px] font-medium text-[#344054]">
              Phone number
            </label>
            <div className="flex items-center gap-2 px-3 py-[10px] border border-[#E7E8E9] rounded-[2px] bg-white self-stretch w-full transition-colors">
              <Image
                src={RECTANGLE}
                alt="Ghana"
                width={20}
                height={14}
                className="w-5 h-3.5 object-cover rounded-[2px]"
              />
              <ChevronDown className="h-4 w-4 text-[#667085]" />
              <span className="text-[14px] text-[#101828] font-medium border-r border-gray-100 pr-2">
                +233
              </span>
              <input
                type="tel"
                placeholder="20 124 2454"
                className="flex-1 bg-transparent border-none outline-none text-[14px] text-[#101828] min-w-0"
              />
            </div>
          </div>

          {/* Confirm Phone Number */}
          <div className="flex flex-col items-start gap-1 w-[504px]">
            <label className="text-[13px] font-medium text-[#344054]">
              Confirm phone number
            </label>
            <div className="flex items-center gap-2 px-3 py-[10px] border border-[#E7E8E9] rounded-[2px] bg-white self-stretch w-full transition-colors">
              <Image
                src={RECTANGLE}
                alt="Ghana"
                width={20}
                height={14}
                className="w-5 h-3.5 object-cover rounded-[2px]"
              />
              <ChevronDown className="h-4 w-4 text-[#667085]" />
              <span className="text-[14px] text-[#101828] font-medium border-r border-gray-100 pr-2">
                +233
              </span>
              <input
                type="tel"
                placeholder="20 124 2454"
                className="flex-1 bg-transparent border-none outline-none text-[14px] text-[#101828] min-w-0"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-end gap-3 px-4 py-3 bg-white border-t border-[#F3F3F4] self-stretch">
        <button
          onClick={onBack}
          className="flex items-center justify-center bg-white text-[#475467] px-4 py-[10px] rounded-xl font-semibold text-[13px] gap-2 border border-gray-100 hover:bg-gray-50 transition-colors"
        >
          Cancel
        </button>
        <Button className="bg-[#FFA600] hover:bg-[#d97706] text-[#101828] border-none px-4 py-[10px] h-auto rounded-[2px] font-semibold text-[13px] flex items-center justify-center gap-2 transition-colors">
          Create member
        </Button>
      </div>
    </>
  );
}
