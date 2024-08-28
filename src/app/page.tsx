"use client";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-gray-500 p-8 rounded-lg shadow-lg max-w-md w-full text-center">
        <h1 className="text-2xl font-bold mb-6">Welcome to Our App</h1>

        {!isLoggedIn ? (
          <div className="flex flex-col space-y-4">
            <p className="mb-4">Press below button to login:</p>
            <Link href="/password/login">
              <p className="bg-white border border-blue-500 text-blue-500 font-bold py-2 px-4 rounded hover:bg-blue-400 hover:text-white">
                Start Authentication
              </p>
            </Link>
          </div>
        ) : (
          <p className="bg-white border border-blue-500 text-blue-500 font-bold py-2 px-4 rounded hover:bg-blue-400 hover:text-white">
            You are logged in!
          </p>
        )}
      </div>
    </div>
  );
}
