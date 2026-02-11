"use client";

import React, { useState } from "react";
import { X, Info, Plus, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import { CreateMemberForm } from "./CreateMemberForm";
import { RECTANGLE } from "@/app/constant/assets";

interface InviteMembersModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const MOCK_SUGGESTIONS = [
  { phone: "+233 20 100 1000", name: "Mark Anthony" },
  { phone: "+233 20 124 2454", name: "Angela Koomson" },
  { phone: "+233 20 189 5298", name: "Travis Solomons" },
  { phone: "+233 20 157 2458", name: "Jonathan Quarshie" },
];

export function InviteMembersModal({
  isOpen,
  onClose,
}: InviteMembersModalProps) {
  const [activeTab, setActiveTab] = useState<"manually" | "upload">("manually");
  const [view, setView] = useState<"invite" | "create">("invite");
  const [searchPhone, setSearchPhone] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity" />

      {/* Modal Container */}
      <div className="relative w-full max-w-[540px] bg-white rounded-xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {view === "invite" ? (
          <>
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-[#F3F3F4] bg-white self-stretch">
              <h2 className="text-[15px] font-semibold text-[#101828]">
                Invite new member(s)
              </h2>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-600 transition-colors p-1"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Content */}
            <div className="flex flex-col items-start gap-5 pt-4 px-4 pb-6 bg-white border-t border-b border-white/15 self-stretch">
              {/* Tabs */}
              <div className="flex gap-[12px] border-gray-100 self-stretch">
                <button
                  onClick={() => setActiveTab("manually")}
                  className={`pt-2 px-0 pb-[10px] text-sm font-semibold transition-colors flex items-center justify-center gap-2 border-b-[1.5px] ${
                    activeTab === "manually"
                      ? "text-[#101828] border-[#FFA600]"
                      : "text-[#667085] hover:text-[#101828] border-transparent"
                  }`}
                >
                  Add manually
                </button>
                <button
                  onClick={() => setActiveTab("upload")}
                  className={`pt-2 px-0 pb-[10px] text-sm font-semibold transition-colors flex items-center justify-center gap-2 border-b-[1.5px] ${
                    activeTab === "upload"
                      ? "text-[#101828] border-[#FFA600]"
                      : "text-[#667085] hover:text-[#101828] border-transparent"
                  }`}
                >
                  Upload file
                </button>
              </div>

              {activeTab === "manually" ? (
                <div className="space-y-6 w-full">
                  {/* Phone Number Input Group */}
                  <div className="space-y-2 relative">
                    <label className="text-[13px] font-medium text-[#344054]">
                      Phone number
                    </label>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-2 px-3 py-[10px] border border-[#E7E8E9] rounded-[2px] bg-white self-stretch w-full focus-within:border-amber-500 transition-colors">
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
                          value={searchPhone}
                          onChange={(e) => {
                            setSearchPhone(e.target.value);
                            setShowSuggestions(e.target.value.length > 0);
                          }}
                          onFocus={() => {
                            if (searchPhone.length > 0)
                              setShowSuggestions(true);
                          }}
                          placeholder=""
                          className="flex-1 bg-transparent border-none outline-none text-[14px] text-[#101828] placeholder:text-[#667085] min-w-0"
                        />
                      </div>
                    </div>

                    {/* Suggestions Dropdown */}
                    {showSuggestions && (
                      <div className="absolute top-[calc(100%+4px)] left-0 right-0 bg-white border border-[#E7E8E9] rounded-[2px] shadow-lg z-50 overflow-hidden py-1">
                        {MOCK_SUGGESTIONS.filter((s) =>
                          s.phone.includes(searchPhone),
                        ).map((suggestion, i) => (
                          <button
                            key={i}
                            className="w-full px-4 py-2.5 text-left hover:bg-gray-50 flex items-center gap-2 transition-colors"
                            onClick={() => {
                              setSearchPhone(suggestion.phone);
                              setShowSuggestions(false);
                            }}
                          >
                            <span className="text-[13px] text-[#101828] font-medium">
                              {suggestion.phone}
                            </span>
                            <span className="text-[13px] text-[#667085]">
                              • {suggestion.name}
                            </span>
                          </button>
                        ))}
                        <button
                          onClick={() => {
                            setView("create");
                            setShowSuggestions(false);
                          }}
                          className="w-full px-4 py-3 text-left hover:bg-gray-50 border-t border-[#F3F3F4] flex items-center gap-2 text-[13px] font-semibold text-[#101828] transition-colors"
                        >
                          Create new member <Plus className="h-4 w-4" />
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Toggle Section */}
                  <div className="flex items-center gap-2 group cursor-pointer">
                    <div className="relative inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full bg-gray-200 transition-colors duration-200 ease-in-out">
                      <div className="translate-x-1 inline-block h-3.5 w-3.5 transform rounded-full bg-white transition duration-200 ease-in-out" />
                    </div>
                    <span className="text-[13px] font-medium text-[#344054] flex items-center gap-1.5">
                      Enable sharing ability
                      <Info className="h-4 w-4 text-blue-500 cursor-help " />
                    </span>
                  </div>

                  {/* Add Another Button */}
                  <button className="flex items-center justify-center gap-2 self-stretch text-[#475467] hover:text-[#101828] text-[13px] font-semibold transition-colors bg-[#F3F3F4] px-4 py-2 rounded-[2px] border-none">
                    Add another <Plus className="h-4 w-4" />
                  </button>
                </div>
              ) : (
                <div className="py-12 flex flex-col items-center justify-center border-2 border-dashed border-gray-100 rounded-xl bg-[#F9FAFB] w-full">
                  <p className="text-sm text-[#667085]">
                    Upload UI coming soon...
                  </p>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="flex items-center justify-end gap-3 px-4 py-3 bg-white border-t border-[#F3F3F4] self-stretch">
              <button
                onClick={onClose}
                className="flex items-center justify-center bg-white text-[#475467] px-4 py-[10px] rounded-xl font-semibold text-[13px] gap-2 border border-gray-100 hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <Button
                className="flex items-center justify-center bg-[#E7E8E9] text-[#475467] px-4 py-[10px] h-auto rounded-[2px] font-semibold text-[13px] gap-2 border-none cursor-not-allowed"
                disabled
              >
                Send invite
              </Button>
            </div>
          </>
        ) : (
          <CreateMemberForm
            onBack={() => setView("invite")}
            onClose={onClose}
          />
        )}
      </div>
    </div>
  );
}
