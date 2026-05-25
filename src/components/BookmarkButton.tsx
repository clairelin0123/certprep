"use client";

import { useState, useEffect } from "react";
import { isSaved, saveMistake, removeMistake } from "@/lib/mistakes";

interface BookmarkButtonProps {
  questionId: string;
  autoSave?: boolean;
}

export default function BookmarkButton({ questionId, autoSave }: BookmarkButtonProps) {
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    setSaved(isSaved(questionId));
  }, [questionId]);

  useEffect(() => {
    if (autoSave && !isSaved(questionId)) {
      saveMistake(questionId);
      setSaved(true);
    }
  }, [autoSave, questionId]);

  const toggle = () => {
    if (saved) {
      removeMistake(questionId);
      setSaved(false);
    } else {
      saveMistake(questionId);
      setSaved(true);
    }
  };

  return (
    <button
      onClick={toggle}
      className="inline-flex items-center gap-1 rounded-md px-2 py-1 text-xs font-medium transition hover:bg-gray-100"
      title={saved ? "Remove from saved mistakes" : "Save to mistakes"}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill={saved ? "currentColor" : "none"}
        stroke="currentColor"
        strokeWidth={2}
        className={`h-4 w-4 ${saved ? "text-amber-500" : "text-gray-400"}`}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
        />
      </svg>
      <span className={saved ? "text-amber-600" : "text-gray-500"}>
        {saved ? "Saved" : "Save"}
      </span>
    </button>
  );
}
