"use client";
import Link from "next/link";

import { useUserAuth } from "./_utils/auth-context";
import NavBar from "../nav/nav-bar";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  return (
    <div>
      <header>
        <NavBar />
      </header>
      <div className="p-2 m-4 flex justify-center">
        {user ? (
          <div className="max-w-sm p-2 m-4 bg-slate-900 w-full border-2 rounded-lg text-white font-bold text-3xl flex-col justify-center">
            <div className="flex justify-center py-4">
              <h1>Week 10</h1>
            </div>
            <div className="flex justify-center py-4">
              <p>Hi there! {user.displayName}</p>
            </div>
            <div className="flex justify-center py-4">
              <Link
                href="/week-10/shopping-list"
                className="bg-slate-400 px-8 py-2 rounded-lg text-white border-2 border-slate-400 hover:border-green-500 hover:text-green-500 m-1 font-bold w-full text-center"
              >
                Shopping List
              </Link>
            </div>
            <div className="flex justify-center pt-4">
              <button
                onClick={firebaseSignOut}
                className="bg-slate-400 px-8 py-2 rounded-lg text-white border-2 border-slate-400 hover:border-green-500 hover:text-green-500 m-1 font-bold w-full"
              >
                Sign Out
              </button>
            </div>
          </div>
        ) : (
          <div className="max-w-sm p-2 m-4 bg-slate-900 w-full border-2 rounded-lg text-white font-bold text-3xl flex-col justify-center">
            <div className="flex justify-center py-4">
              <h1>Week 10</h1>
            </div>
            <div className="flex justify-center py-4">
              <p>Please sign in</p>
            </div>
            <div className="flex justify-center pt-4">
              <button
                onClick={gitHubSignIn}
                className="bg-slate-400 px-8 py-2 rounded-lg text-white border-2 border-slate-400 hover:border-green-500 hover:text-green-500 m-1 font-bold w-full"
              >
                Sign In with GitHub
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
