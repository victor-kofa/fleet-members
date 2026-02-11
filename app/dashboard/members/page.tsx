import React from "react";
import { MembersSearch } from "@/app/dashboard/members/components/MembersSearch";
import { MembersTable } from "@/app/dashboard/members/components/MembersTable";
import { Pagination } from "@/app/dashboard/members/components/Pagination";
import { InviteMemberButton } from "@/app/dashboard/members/components/InviteMemberButton";

export default function MembersPage() {
  return (
    <div className="p-4 space-y-4 bg-gray-50/50 min-h-screen">
      <div className="flex items-center justify-between">
        <h1 className="text-[24px] font-bold text-[#101828] font-inter">
          Members
        </h1>
        <InviteMemberButton />
      </div>

      <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden flex flex-col min-h-[calc(100vh-160px)]">
        <div className="p-4">
          <MembersSearch />
        </div>

        <div className="flex-1 overflow-x-auto">
          <MembersTable />
        </div>

        <div className="px-4 py-4 border-t border-gray-100 flex items-center justify-between bg-white mt-auto">
          <div className="text-sm text-gray-500 font-medium">
            Showing 1-10 out of 93
          </div>
          <Pagination />
        </div>
      </div>
    </div>
  );
}
