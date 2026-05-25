"use client";

import Link from "next/link";
import { useSession } from "next-auth/react";
import AuthButton from "./AuthButton";

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <nav className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="text-xl font-bold text-blue-700">
          CertPrep
        </Link>
        <div className="flex items-center gap-6 text-sm font-medium text-gray-600">
          <Link href="/cma" className="hover:text-blue-700">
            CMA Exam
          </Link>
          <Link href="/cma/mock-exam" className="hover:text-blue-700">
            Mock Exam
          </Link>
          <Link href="/resources" className="hover:text-blue-700">
            Resources
          </Link>
          <Link href="/cma/saved-mistakes" className="hover:text-blue-700">
            Saved Mistakes
          </Link>
          {session && (
            <Link href="/dashboard" className="hover:text-blue-700">
              Dashboard
            </Link>
          )}
          <AuthButton />
        </div>
      </div>
    </nav>
  );
}
