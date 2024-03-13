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
        {user ? 
        (
          <div>
            <h1>Week 8</h1>
            <p>Hi there! {user.displayName}</p>
            <Link href="/week-8/shopping-list">Shopping List</Link>
            <button onClick={firebaseSignOut}>Sign Out</button>
          </div>
          
        ) : 
        (
          <div>
            <h1>Week 8</h1>
            <p>Please sign in</p>
            <button onClick={gitHubSignIn}>Sign In with GitHub</button>
          </div>
        )}    
    </div>
  );
}
