"use client";

import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function Pagination() {
  return (
    <div className="flex items-center gap-2">
      <button className="flex items-center gap-1 px-3 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-md hover:bg-gray-50 disabled:opacity-50 transition-colors">
        <ChevronLeft className="h-4 w-4" />
        Previous
      </button>

      <div className="flex items-center gap-1">
        <button className="w-8 h-8 flex items-center justify-center text-sm font-medium rounded-md bg-[#0F172A] text-white">
          1
        </button>
        <button className="w-8 h-8 flex items-center justify-center text-sm font-medium rounded-md transition-colors text-gray-600 hover:bg-gray-50 border border-transparent hover:border-gray-100">
          2
        </button>
        <button className="w-8 h-8 flex items-center justify-center text-sm font-medium rounded-md transition-colors text-gray-600 hover:bg-gray-50 border border-transparent hover:border-gray-100">
          3
        </button>
        <span className="w-8 h-8 flex items-center justify-center text-sm text-gray-400">
          ...
        </span>
        <button className="w-8 h-8 flex items-center justify-center text-sm font-medium rounded-md transition-colors text-gray-600 hover:bg-gray-50 border border-transparent hover:border-gray-100">
          9
        </button>
      </div>

      <button className="flex items-center gap-1 px-3 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-md hover:bg-gray-50 disabled:opacity-50 transition-colors">
        Next page
        <ChevronRight className="h-4 w-4" />
      </button>
    </div>
  );
}
